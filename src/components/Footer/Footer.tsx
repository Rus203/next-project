import React, { FC } from 'react';
import style from './footer.module.css';
import Image from "next/image";


const Footer: FC = () => {
  return <div className={style.container}>
    <div>©Rus203. All rights reserved</div>
    <div className={style.social}>
      <Image src='/1.png' className={style.icon} height={15} width={15} alt='facebook account link' />
      <Image src='/2.png' className={style.icon} height={15} width={15} alt='instagram account link' />
      <Image src='/3.png' className={style.icon} height={15} width={15} alt='twitter account link' />
      <Image src='/4.png' className={style.icon} height={15} width={15} alt='youtube account link' />
    </div>
  </div>;
};

export default Footer;
