import { Request, Response } from 'express';
import mongoose from 'mongoose';
import { handleError } from '../errors/handle.error';

export default class BookingController {
  constructor() {}

  public async createBooking(req: Request, res: Response): Promise<void> {
    try {
      const userId = req.user?._id;
      const bid = req.query?.beauty_package;

      if (bid) {
        if (!mongoose.Types.ObjectId.isValid(bid)) {
          res.status(404).json({ message: 'Beauty Package Not Found' });
        }
      }

      await Promise.resolve().then(async () => {});
    } catch (error: unknown) {
      await handleError(error, res);
    }
  }
}
