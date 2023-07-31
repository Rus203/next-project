import { connectDB } from '@/database';
import { IUserDocument, UserModel } from '@/models';
import { hash } from 'bcrypt';

interface IUser {
  name: string;
  password: string;
  email: string;
}

class UserServices {
  constructor() {}

  async addUser(candidate: IUser) {
    const { name, password, email } = candidate;
    const db = await connectDB();

    try {
      const users: IUserDocument[] = await db
        .model('User')
        .find({ email }, { lean: true });

      if (users.length > 0) {
        throw new Error('Such email already exists');
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
}

export const userServices = new UserServices();
