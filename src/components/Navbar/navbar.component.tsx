'use client';

import Link from 'next/link';
import React, { FC } from 'react';
import style from './navbar.module.css';

const links = [
  {
    id: 1,
    title: 'Home',
    url: '/'
  },
  {
    id: 2,
    title: 'Portfolio',
    url: '/portfolio'
  },
  {
    id: 3,
    title: 'Blog',
    url: '/blog'
  },
  {
    id: 4,
    title: 'About',
    url: '/about'
  },
  {
    id: 5,
    title: 'Contact',
    url: '/contact'
  },
  {
    id: 6,
    title: 'Dashboard',
    url: '/dashboard'
  }
];

export const Navbar: FC = () => {
  return (
  <div className={style.container} >
    <Link className={style.logo} href='/'>Rus203</Link>
    <div className={style.links}>
    { links.map(page => 
      (<Link href={page.url} key={page.id}>{page.title}</Link>))}
    <button
        className={style.logout}
        onClick={() => console.log('logout')}>
          Log out
      </button>
    </div>
  </div>);
};
