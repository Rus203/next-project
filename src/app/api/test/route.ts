import { NextResponse, NextRequest } from 'next/server';
import { getServerSession } from "next-auth/next";
// import { connectDB } from '@/database';

// connectDB();

export const GET = async (res: NextResponse) => {
  return new NextResponse('Answer from the server');
};


