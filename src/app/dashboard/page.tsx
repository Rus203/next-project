'use client';

import React, { FC } from 'react';
import style from './dashboard.module.css';
import Image from 'next/image';
import { SessionProvider } from '@/components/Session-Provider';


const Dashboard: FC = () => {
  return (
  <div className={style.container}>
    <div className={style.posts}>

      <div className={style.postItem}>
        <div className={style.imgContainer}>
          <Image
            src='https://images.pexels.com/photos/17663848/pexels-photo-17663848/free-photo-of-food-apple-fruits-fall.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            fill={true}
            alt='post'
            className={style.img}
          />
        </div>
        <h3 className={style.postTitle}>test</h3>
        <span className={style.delete}>X</span>
      </div>

      <div className={style.postItem}>
        <div className={style.imgContainer}>
          <Image
            src='https://images.pexels.com/photos/17663848/pexels-photo-17663848/free-photo-of-food-apple-fruits-fall.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            fill={true}
            alt='post'
            className={style.img}
          />
        </div>
        <h3 className={style.postTitle}>test</h3>
        <span className={style.delete}>X</span>
      </div>

      <div className={style.postItem}>
        <div className={style.imgContainer}>
          <Image
            src='https://images.pexels.com/photos/17663848/pexels-photo-17663848/free-photo-of-food-apple-fruits-fall.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            fill={true}
            alt='post'
            className={style.img}
          />
        </div>
        <h3 className={style.postTitle}>test</h3>
        <span className={style.delete}>X</span>
      </div>

      <div className={style.postItem}>
        <div className={style.imgContainer}>
          <Image
            src='https://images.pexels.com/photos/17663848/pexels-photo-17663848/free-photo-of-food-apple-fruits-fall.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            fill={true}
            alt='post'
            className={style.img}
          />
        </div>
        <h3 className={style.postTitle}>test</h3>
        <span className={style.delete}>X</span>
      </div>    


      <div className={style.postItem}>
        <div className={style.imgContainer}>
          <Image
            src='https://images.pexels.com/photos/17663848/pexels-photo-17663848/free-photo-of-food-apple-fruits-fall.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            fill={true}
            alt='post'
            className={style.img}
          />
        </div>
        <h3 className={style.postTitle}>test</h3>
        <span className={style.delete}>X</span>
      </div>  


      <div className={style.postItem}>
        <div className={style.imgContainer}>
          <Image
            src='https://images.pexels.com/photos/17663848/pexels-photo-17663848/free-photo-of-food-apple-fruits-fall.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            fill={true}
            alt='post'
            className={style.img}
          />
        </div>
        <h3 className={style.postTitle}>test</h3>
        <span className={style.delete}>X</span>
      </div>  

    </div>
    <form className={style.form}>
      <h2 className={style.formTitle}>Add new post</h2>
        <input
          id='title'
          placeholder='Title'
          type="text"
          className={style.input}
        />
        <input
          id='description'
          placeholder='Description'
          type="text"
          className={style.input}
        />
        <input
          id='imageLink'
          placeholder='Image link'
          type="url"
          className={style.input}
        />
        <textarea
          placeholder='Content'
          id="content"
          cols={30}
          rows={10}
          className={style.textArea}
        ></textarea>
        <button type='submit' className={style.button}>Send</button>
    </form>
  </div>);
};


const DashboardWithAuth = SessionProvider({ Component: Dashboard });

export default DashboardWithAuth;
