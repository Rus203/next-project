import { connectDB } from '@/database';
import { IUserDocument, UserModel } from '@/models';
import { hash } from 'bcrypt';
import { CustomError } from '@/utils';
import { FilterQuery } from 'mongoose';

interface IUser {
  name: string;
  password?: string;
  email: string;
}

class UserServices {
  constructor() {}

  async addUser(candidate: IUser): Promise<void> {
    const { name, password, email } = candidate;
    await connectDB();

    const users: IUserDocument[] = await this.getUsers({ email });

    if (users.length > 0) {
      throw new CustomError({
        message: 'Such email already exists',
        status: 409,
      });
    }
    const parameters: IUser = {
      name,
      email,
    };

    if (password) {
      parameters.password = await hash(password, 10);
    }

    const user = new UserModel(parameters);

    await user.save();
  }

  async getUsers(entityFilterQuery: FilterQuery<IUserDocument>): Promise<IUserDocument[]> {
    const db = await connectDB();
    return db
      .model(UserModel.modelName)
      .find(entityFilterQuery, {}, { lean: true });
  }

  async getOneUser(
    entityFilterQuery: FilterQuery<IUserDocument>,
  ): Promise<IUserDocument> {
    const db = await connectDB();
    const user = await db
      .model(UserModel.modelName)
      .findOne(entityFilterQuery, {}, { lean: true });

    if (!user) {
      throw new CustomError({
        message: "User wasn't found",
        status: 404,
      });
    }

    return user;
  }
}

export const userServices = new UserServices();
