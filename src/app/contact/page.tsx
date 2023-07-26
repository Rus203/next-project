import React, { FC } from 'react';
import style from './contact.module.css';
import Image from 'next/image';
import { Button } from '@/components/Button';

const Contact: FC = () => {
  return <div className={style.container}>
    <h2 className={style.title} >Let&#39;s Keep in touch</h2>
    <div className={style.content}>
      <div className={style.imgContainer}>
        <Image
          src='/contact.png'
          fill={true}
          className={style.img}
          alt='picture'
        />
      </div>
      <form className={style.form}>
        <input type="text"
          placeholder='name'
          className={style.input}/>
        <input
          placeholder='email'
          type="email"
          className={style.input}/>
        <textarea
          className={style.textArea}
          placeholder='message'
          rows={10}
          cols={30}
        ></textarea>
        <Button text="Send" url="#" />
      </form>
    </div>
  </div>;
};

export default Contact;
