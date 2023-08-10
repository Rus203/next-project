'use client';

import React, { FC, FormEvent, useState } from 'react';
import style from './register.module.css';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Register: FC = () => {
  const [error, setError] = useState<boolean>(false);
  const router = useRouter();

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    const form = event.currentTarget as HTMLFormElement;

    const name = (form.elements
      .namedItem('name') as HTMLInputElement).value;

    const email = (form.elements
      .namedItem('email') as HTMLInputElement).value;

    const password = (form.elements
      .namedItem('password') as HTMLInputElement).value;

      const res = await fetch('/api/auth/register', {
        method: 'POST',
        body: JSON.stringify({ name, email, password })
      });

      res.status === 201 && router
        .push('/dashboard/login?success=Account has been created"');

      res.status >= 400 && setError(true);
  };

  return (
    <div className={style.container}>
      <h2 className={style.title}>Create an Account</h2>
      <h3 className={style.subTitle}>Please sign up to see the dashboard.</h3>
      <form className={style.form} onSubmit={handleSubmit}>
        <input
          className={style.input}
          placeholder="user name"
          type="text"
          id="name"
          required={true}
        />
        <input
          className={style.input}
          placeholder="email"
          type="email"
          id="email"
          required={true}
        />
        <input
          className={style.input}
          placeholder="password"
          type="password"
          id="password"
          required={true}
        />
        <button className={style.button} type="submit">
          Register
        </button>
        {error && 'Such email has already existed'}
      </form>
      <Link className={style.link} href="/dashboard/login">
        Log in with existing account
      </Link>
    </div>
  );
};

export default Register;
