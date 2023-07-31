import GoogleProvider from 'next-auth/providers/google';
import type { AuthOptions } from 'next-auth';
import CredentialsProvider from "next-auth/providers/credentials";

interface Credentials {
  email: string;
  password: string;
}

export const authConfig: AuthOptions = {
  pages: {
    // override the default pages with auth
    signIn: '/dashboard/login',
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
        console.log('credentials\n\n');
        console.log(credentials);
        return true;
      },
    }),
  ],
};
