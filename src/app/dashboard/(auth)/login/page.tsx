'use client';

import React, { FC, FormEvent, useEffect, useState } from 'react';
import style from './login.module.css';
import { signIn, useSession } from 'next-auth/react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';


const Login: FC = () => {
  const session = useSession();
  const router = useRouter();
  const params = useSearchParams();
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
 
  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    const form = event.currentTarget as HTMLFormElement;

    const email = (form.elements
      .namedItem('email') as HTMLInputElement).value;

    const password = (form.elements
      .namedItem('password') as HTMLInputElement).value;

      try {
        const res = await signIn('credentials', { email, password }).then(() => console.log('success')).catch(error => { console.log(error);});

        console.log('response');
        console.log(res);
      } catch (error) {
      
        console.log(error);
        setError(error);
      }
  }; 

  useEffect(() => {
    if (session.status === 'authenticated') {
      router.push('/dashboard');
    }

    setError(params.get('error'));
    setSuccess(params.get('success'));
  }, [session.status, params]);


  return <div className={style.container}>
    <h2 className={style.title}>Please sign in to see the dashboard.</h2>
    <form className={style.form} onSubmit={handleSubmit}>
      <input
        className={style.input}
        id='email'
        type="text"
        placeholder='email'
        required
      />
      <input
        className={style.input}
        id='password'
        type="password"
        placeholder='password'
        required
      />
      <button
        type='submit'
        className={style.button}
      >
        Login
      </button>
      {error && error} {/* rebuild it as soon as possible */}
    </form>
    <button
      className={`${style.button} ${style.google}`}
      type='button'
      onClick={() => signIn('google')}
      >
        Login with Google
      </button>
      <span className={style.or}>- OR -</span>
      <Link className={style.link} href="/dashboard/register">
        Create new account
      </Link>
  </div>;
};

export default Login;
