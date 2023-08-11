import { NextResponse } from 'next/server';
import { getSession } from 'next-auth/react';

export default async function middleware() {
  const session = await getSession();

  if (!session) {
    return new NextResponse('Unauthenticated', { status: 401 });
  }
  console.log(session);
  return NextResponse.next();
}

export const config = {
  matcher: ['/api/test'],
};
