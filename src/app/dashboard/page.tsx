'use client';

import React, { FC } from 'react';
import { useSession } from 'next-auth/react';
import { signIn } from 'next-auth/react';

const Dashboard: FC = () => {
  const { data: session, status } = useSession();

  console.log(`status - ${status}`);
  console.log(session);
  return <div>
    <button
      type='button'
      onClick={() => signIn('google')}
    >
      sign in google account
    </button>
  </div>;
};

export default Dashboard;
