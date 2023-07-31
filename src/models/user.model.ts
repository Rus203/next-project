import { Schema, model, Model } from 'mongoose';

interface IUser {
  name: string,
  email: string,
  password: string,
}

export interface IUserDocument extends IUser, Document {}

export interface IUserModel extends Model<IUserDocument> {}

export const userSchema = new Schema<IUser>(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      required: true,
      unique: true,
      type: String,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

export const UserModel: IUserModel = model<IUserDocument, IUserModel>(
  'User',
  userSchema,
);