import { NextResponse, NextRequest } from 'next/server';
import { getServerSession } from "next-auth/next";
// import { connectDB } from '@/database';

// connectDB();

export const GET = async (res: NextResponse) => {
  console.log('session: ');
  const session = await getServerSession();
  console.log(session);
  console.log(session?.user.googleId);
  return new NextResponse('Answer from the server');
};


