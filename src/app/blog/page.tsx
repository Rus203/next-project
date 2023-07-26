import React, { FC } from 'react';
import style from './blog.module.css';
import Image from 'next/image';
import Link from 'next/link';

const Blog: FC = () => {
  return (
    <div className={style.container}>
      <Link href="#" className={style.post}>
        <div className={style.imgContainer}>
          <Image
            src='https://images.pexels.com/photos/13911606/pexels-photo-13911606.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            alt='post'
            className={style.img}
            fill={true}
          />
        </div>
        <div className={style.textContainer}>
          <h3 className={style.title}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem, unde.</h3>
          <p className={style.description}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi
            cum dolorem ipsum enim praesentium dolor illum officia a, amet
            possimus adipisci, laudantium tenetur earum repellat ratione!
            Atque eum illo dolore.
          </p>
        </div>
      </Link>

      <Link href="#" className={style.post}>
        <div className={style.imgContainer}>
          <Image
            src='https://images.pexels.com/photos/13911606/pexels-photo-13911606.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            alt='post'
            className={style.img}
            fill={true}
          />
        </div>
        <div className={style.textContainer}>
          <h3 className={style.title}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem, unde.</h3>
          <p className={style.description}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi
            cum dolorem ipsum enim praesentium dolor illum officia a, amet
            possimus adipisci, laudantium tenetur earum repellat ratione!
            Atque eum illo dolore.
          </p>
        </div>
      </Link>

      
    </div>);
};

export default Blog;
