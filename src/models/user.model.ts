import mongoose, { Schema, model } from 'mongoose';
import { userType } from '../types/user.type';
import validator from 'validator';
import bcrypt from 'bcrypt';
import { promises } from 'fs';
import { UserModelInterface } from '../interface/user.interface';

const userSchema = new Schema<userType>(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    photoURl: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
    },
    role: {
      enum: ['user', 'admin'],
      default: 'user',
      type: String,
      required: true,
    },
    booking: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Booking',
      },
    ],
  },
  {
    timestamps: true,
  }
);

userSchema.statics.register = async function (
  name,
  email,
  password,
  photoURl,
  phoneNumber,
  address
): Promise<userType> {
  if (!name || !email || !password || !photoURl) {
    throw new Error('Must Fill Name, Email, Passwors,PhotoUrl');
  }

  const existingUser = await this.findOne({ email });

  if (existingUser) {
    throw new Error('Email all ready exist');
  }

  if (!validator.isEmail(email)) {
    throw new Error('Invalid Email');
  }

  if (validator.isStrongPassword(password)) {
    throw new Error(
      'Password must 8+ chars, containes uppercase, lowercase, and special chars'
    );
  }

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  const user = await this.create({
    name,
    email,
    password: hash,
    photoURl,
    phoneNumber,
    address,
  });

  return user;
};

userSchema.statics.login = async function (email, password): Promise<userType> {
  if (!email || !password) {
    throw new Error('Must fill Email and Password');
  }

  const user = await this.findOne({ email });

  if (!user) {
    throw new Error('Incorrect Email and Password');
  }

  const match = await bcrypt.compare(password, user.password);

  if (!match) {
    throw new Error('Did not match Email and Password');
  }

  return user;
};

const UserModel = model<userType, UserModelInterface>('User', userSchema);

export default UserModel;
