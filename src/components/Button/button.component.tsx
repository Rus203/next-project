import React, { FC } from 'react';
import style from './button.module.css';
import Link from 'next/link';

interface IPropTypes {
  url: string;
  text: string
}

export const Button: FC<IPropTypes> = ({ url, text }) => {
  return (
    <Link href={url}>
      <button className={style.container}>
        {text}
      </button>
    </Link>
  );
};