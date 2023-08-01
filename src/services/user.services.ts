import { connectDB } from '@/database';
import { IUserDocument, UserModel } from '@/models';
import { hash } from 'bcrypt';
import { CustomError } from '@/utils';
import { FilterQuery } from 'mongoose';

interface IUser {
  name: string;
  password: string;
  email: string;
}

class UserServices {
  constructor() {}

  async addUser(candidate: IUser): Promise<void> {
    const { name, password, email } = candidate;
    const db = await connectDB();

    try {
      const users: IUserDocument[] = await db
        .model(UserModel.modelName)
        .find({ email }, { lean: true });

      if (users.length > 0) {
        throw new CustomError({
          message: 'Such email already exists', status: 409
        });
      }

      const user = new UserModel({
        name,
        email,
        password: await hash(password, 10),
      });

      await user.save();
    } finally {
      db.disconnect();
    }
  }

  async getOneUser(entityFilterQuery:FilterQuery<IUserDocument>): Promise<IUserDocument> {
    const db = await connectDB();
    const user = await db.model(UserModel.modelName).findOne(entityFilterQuery);

    if (!user) {
      throw new CustomError({
        message: 'User wasn\'t found', status: 404
      });
    }

    return user;
  }
}

export const userServices = new UserServices();
