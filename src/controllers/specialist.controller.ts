import { Request, Response } from 'express';
import { handleError } from '../errors/handle.error';
import SpecialistModel from '../models/specialist.model';
import mongoose from 'mongoose';

export default class SpecialistController {
  constructor() {}

  public async getAllSpecialists(req: Request, res: Response): Promise<void> {
    try {
      await Promise.resolve().then(async () => {
        const specialists = await SpecialistModel.find({});
        res.status(200).json(specialists);
      });
    } catch (error: unknown) {
      await handleError(error, res);
    }
  }

  public async getAnSpecialist(req: Request, res: Response): Promise<void> {
    try {
      const { sid } = req.params;

      if (!mongoose.Types.ObjectId.isValid(sid)) {
        res.status(404).json({ message: 'Specialist Package Not Found' });
      }

      await Promise.resolve().then(async () => {
        const specialist = await SpecialistModel.findById(sid);
        res.status(200).json(specialist);
      });
    } catch (error: unknown) {
      await handleError(error, res);
    }
  }
  public async createASpecialist(req: Request, res: Response): Promise<void> {
    try {
      const { name, designation, bio, photoURL, dateOfBirth, beautyPackages } =
        req.body;

      await Promise.resolve().then(async () => {
        const specialist = await SpecialistModel.create({
          name,
          designation,
          bio,
          photoURL,
          dateOfBirth,
          beautyPackages,
        });
        res.status(200).json(specialist);
      });
    } catch (error: unknown) {
      await handleError(error, res);
    }
  }
  public async updateASpecialist(req: Request, res: Response): Promise<void> {
    try {
      const { sid } = req.params;
      const { name, designation, bio, photoURL, dateOfBirth, beautyPackages } =
        req.body;

      if (!mongoose.Types.ObjectId.isValid(sid)) {
        res.status(404).json({ message: 'Specialist  Package Not Found' });
      }

      await Promise.resolve().then(async () => {
        const specialist = await SpecialistModel.findByIdAndUpdate(
          {
            name,
            designation,
            bio,
            photoURL,
            dateOfBirth,
            beautyPackages,
          },
          { new: true }
        );
        res.status(200).json(specialist);
      });
    } catch (error: unknown) {
      await handleError(error, res);
    }
  }
  public async deleteASpecialist(req: Request, res: Response): Promise<void> {
    try {
      const { sid } = req.params;

      if (!mongoose.Types.ObjectId.isValid(sid)) {
        res.status(404).json({ message: 'Specialist Package Not Found' });
      }

      await Promise.resolve().then(async () => {
        const specialist = await SpecialistModel.findByIdAndDelete(sid);
        res.status(200).json(specialist);
      });
    } catch (error: unknown) {
      await handleError(error, res);
    }
  }
}
