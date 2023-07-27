'use client';

import React, { FC, useContext } from 'react';
import style from './dark-toggle-mode.module.css';
import { ThemeContext } from '@/context';
import { Modes } from '@/enums';

export const DarkModeToggle: FC = () => {
  const { handleToggle, mode } = useContext(ThemeContext);
  return (
    <div className={style.container} onClick={handleToggle}>
      <div className={style.icon}>🌞</div>
      <div className={style.icon}>🌙</div>
      <div
        className={style.ball}
        style={mode === Modes.LIGHT
          ? { left: '2px' }
          : { right: '2px' }}
        ></div>
    </div>
  );
};
