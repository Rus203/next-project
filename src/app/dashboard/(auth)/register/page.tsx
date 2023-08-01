'use client';

import React, { FC, FormEvent, useState } from 'react';
import style from './register.module.css';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Register: FC = () => {
  const [error, setError] = useState<unknown | null>(null);
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


    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        body: JSON.stringify({ name, email, password })
      });

      res.status === 201 && router
        .push('/dashboard/login?success=Account has been created"');

    } catch (error: unknown) {
      setError(error);
    }

  };

  return (
    <div className={style.container}>
      <h2 className={style.title}>Create an Account</h2>
      <h3 className={style.subTitle}>Please sign up to see the dashboard.</h3>
      <form className={style.form} onSubmit={handleSubmit}>
        <input
          className={style.input}
          placeholder='user name'
          type="text"
          id='name'
          required={true}
        />
        <input
          className={style.input}
          placeholder='email'
          type="email"
          id='email'
          required={true}
        />
        <input
          className={style.input}
          placeholder='password'
          type="password"
          id='password'
          required={true}
        />
        <button className={style.button} type='submit'>Register</button>
      </form>
      { error && 'Something was wrong' }
      <Link
        className={style.link}
        href='/dashboard/login'
      >
        Log in with existing account
      </Link>
    </div>
  );
};

export default Register;
