import React, { FC, ReactNode } from 'react';
import style from './portfolio.module.css';

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div>
      <h2 className={style.mainTitle}>Our Works</h2>
      {children}
    </div>
  );
};

export default Layout;
