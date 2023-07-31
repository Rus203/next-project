import { NextRequest, NextResponse } from 'next/server';
import { userServices } from '@/services';

export const POST = async (request: NextRequest) => {
  const { name, password, email } = await request.json();

  try {
    await userServices.addUser({ name, password, email });
    return new NextResponse('User has been created', { status: 201 });
    } catch (error: unknown) {
      console.log(error);
      return new NextResponse('User create error', { status: 500 });
    }
};