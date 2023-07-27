'use client';
import React, { FC, ReactNode, createContext, useState } from 'react';
import { Modes } from '@/enums';

interface ThemeContextValue {
  handleToggle: () => void;
  mode: Modes;
}

export const ThemeContext = createContext<ThemeContextValue>({
  handleToggle: () => {},
  mode: Modes.DARK,
});

export const ThemeProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [mode, setMode] = useState<Modes>(Modes.DARK);

  const handleToggle = (): void => {
    setMode(prev => (prev === Modes.DARK ? Modes.LIGHT : Modes.DARK));
  };

  return (
    <ThemeContext.Provider value={{ handleToggle, mode }}>
      <div className={`${mode} theme`}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};