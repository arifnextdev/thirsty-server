import mongoose, { Schema, model } from 'mongoose';
import { speciallisType } from '../types/spcial.type';

const specialistSchema = new Schema<speciallisType>(
  {
    name: {
      type: String,
      required: true,
    },
    designation: {
      type: String,
      required: true,
    },
    bio: {
      type: String,
      required: true,
    },
    photoURL: {
      type: String,
      required: true,
    },
    dateOfBirth: {
      type: String,
      required: true,
    },
    beautyPackages: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'BeautyPackage',
      },
    ],
  },
  {
    timestamps: true,
  }
);

const SpecialistModel = model<speciallisType>('', specialistSchema);

export default SpecialistModel;
