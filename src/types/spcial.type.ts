import { Document } from 'mongoose';
import { beautyPackageType } from './beutyPackeage.type';

export type speciallisType = {
  name: string;
  designation: string;
  bio: string;
  photoURL: string;
  dateOfBirth: string;
  beautyPackages: beautyPackageType[];
} & Document;
