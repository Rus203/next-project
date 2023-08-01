'use client';

import React, { FC } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const Dashboard: FC = () => {
  const session = useSession();
  const router = useRouter();

  if (session.status === 'unauthenticated') {
    router.push('/dashboard/login');
  }


  if (session.status === "loading") {
    return <p>Loading...</p>;
  }

  return <div>
    dashboard
  </div>;
};

export default Dashboard;
