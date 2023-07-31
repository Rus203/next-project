import GoogleProvider from 'next-auth/providers/google';
import type { AuthOptions } from 'next-auth';
import CredentialsProvider from "next-auth/providers/credentials";

interface ICredentials {
  email: string;
  password: string;
}

export const authConfig: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!
    }),
    CredentialsProvider({
      id: 'own credentials',
      name: 'own credentials',
      async authorize(credentials: ICredentials) {
        console.log('credentials\n\n');
        console.log(credentials);
        return true;
      },
      credentials: {
        userName: { label: 'userName', type: 'userName', required: true },
        email: { label: 'email', type: 'email', required: true },
        password: { label: 'password', type: 'password', required: true }
      }
    })
  ]
};
