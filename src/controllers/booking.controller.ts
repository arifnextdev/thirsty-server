import { Request, Response } from 'express';
import mongoose from 'mongoose';
import { handleError } from '../errors/handle.error';
import BookingModel from '../models/booking.model';
import BeautyPackageModel from '../models/beautyPackage.model';
import UserModel from '../models/user.model';
import { bookingType } from '../types/booking.type';

export default class BookingController {
  constructor() {}

  public async createABooking(req: Request, res: Response): Promise<void> {
    try {
      const { bid } = req.params;
      const userId = req.user?._id;

      if (!mongoose.Types.ObjectId.isValid(bid)) {
        res.status(404).json({ message: 'Beauty Package Not Found' });
      }

      const user = await UserModel.findById(req.user?._id).populate('bookings');

      const alreadyBooked = user?.booking.find(
        (booking: bookingType) => bid === booking.beautyPackage._id.toString()
      );

      if (alreadyBooked) {
        res.status(403).json({ message: 'Beauty Package already booked' });
        return;
      }

      await Promise.resolve().then(async () => {
        const booking = await BookingModel.create({
          beautyPackage: bid,
          user: req.query?._id,
        });

        await BeautyPackageModel.findByIdAndUpdate(bid, {
          $addToSet: {
            bookings: booking._id,
          },
        });

        await UserModel.findByIdAndUpdate(req.user?._id, {
          $addToSet: {
            booking: booking._id,
          },
        });

        res.status(200).json(booking);
      });
    } catch (error: unknown) {
      await handleError(error, res);
    }
  }
}
