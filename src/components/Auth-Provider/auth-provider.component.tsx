'use client';


import React, { FC, ReactNode } from 'react';
import { SessionProvider } from "next-auth/react";

export const AuthProvider: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <SessionProvider>
      {children}
    </SessionProvider>
  );
};
