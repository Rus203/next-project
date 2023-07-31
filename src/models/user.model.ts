import { Schema, model } from 'mongoose';

interface IUser {
  name: string,
  email: string,
  password: string,
}

const userSchema = new Schema<IUser>({
  name: {
    type: String,
    unique: true,
    required: true
  },
  email: {
    required: true,
    unique: true,
    type: String,
  },
  password: {
    required: true
  }
}, { timestamps: true });

export const userModel = model('User', userSchema);