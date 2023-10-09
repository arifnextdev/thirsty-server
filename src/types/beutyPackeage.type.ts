import { Document } from 'mongoose';
import { speciallisType } from './spcial.type';
import { bookingType } from './booking.type';

export type beautyPackageType = {
  title: string;
  description: string;
  category: string;
  images: string[];
  price: number;
  speciallist: speciallisType;
  bookings: bookingType;
} & Document;
