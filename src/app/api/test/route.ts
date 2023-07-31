import { NextResponse } from 'next/server';
import { connectDB } from '@/database';

connectDB();

export const GET = async () => {
  return new NextResponse('Answer from the server');
};


