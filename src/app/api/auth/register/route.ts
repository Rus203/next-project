import { NextRequest, NextResponse } from 'next/server';
import { userServices } from '@/services/user.services';
import { CustomError } from '@/utils/custom-http-error';

export const POST = async (request: NextRequest) => {
  const { name, password, email } = await request.json();

  // console.log(name, password, email);
  try {
    await userServices.addUser({ name, password, email });
    return new NextResponse('User has been created', { status: 201 });
    } catch (error: unknown) {

      if (error instanceof CustomError) {
        return new NextResponse(error.message, { status: error.status });
      }
      
      return new NextResponse('Something was wrong', { status: 500 });
    }
};