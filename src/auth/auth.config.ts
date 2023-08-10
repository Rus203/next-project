import GoogleProvider from 'next-auth/providers/google';
import type { AuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { userServices } from '@/services';
import { compare } from 'bcrypt';
import { CustomError } from '@/utils';
import { UserModel } from '@/models';

interface Credentials {
  email: string;
  password: string;
}

export const authConfig: AuthOptions = {
  pages: {
    // override the default pages with auth
    signIn: '/dashboard/login',
    error: '/dashboard/login',
  },
  callbacks: {
    async signIn({ user }) {
      const { email, name } = user;

      const users = await userServices.getUsers({ email });
      if (users.length === 0) {
        const newUser = new UserModel({
          email,
          name,
        });

        await newUser.save();
      } 

      return true;
    },

    async session({ session }) {
      const { email } = session.user;
      const user = await userServices.getOneUser({ email });
      session.user.id = user._id;
      return session;
    }
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    CredentialsProvider({
      id: 'credentials',
      name: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      async authorize(credentials: Credentials) {
        const { email, password } = credentials;
        const user = await userServices.getOneUser({ email });
        const isPassport = await compare(password, user.password);

        if (!isPassport) {
          throw new CustomError({
            message: 'Wrong credentials',
            status: 401,
          });
        }

        return user;
      },
    }),
  ],
};
