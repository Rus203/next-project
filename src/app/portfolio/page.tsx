import React, { FC } from 'react';
import style from './portfolio.module.css';
import Link from 'next/link';

const Portfolio: FC = () => {
  return (
  <div className={style.container}>
    <h3 className={style.selectTitle}>Choose a gallery</h3>
    <div className={style.items}>
      <Link href='/portfolio/illustrations' className={style.item}>
        <span className={style.title}>Illustrations</span>
      </Link>
      <Link href='/portfolio/websites' className={style.item}>
        <span className={style.title}>Websites</span>
      </Link>
      <Link href='/portfolio/applications' className={style.item}>
        <span className={style.title}>Applications</span>
      </Link>
    </div>
  </div>
  );
};

export default Portfolio;
