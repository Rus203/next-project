'use client';

import React, { FC } from 'react';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';

type WithAuthProps = {
  Component: FC;
};

export function SessionProvider({ Component }: WithAuthProps) {
  const WithAuthComponent: FC = (props) => {
    const { data: session, status } = useSession();
    const router = useRouter();


    if (status === "loading") {
      return <p>Loading...</p>;
    }

    if (!session) {
      router.push('/dashboard/login');
      return null;
    }

    return <Component {...props} />;
  };

  return WithAuthComponent;
}
