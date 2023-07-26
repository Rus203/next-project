import React, { FC } from 'react';
import style from './category.module.css';
import Image from 'next/image';
import { Button } from '@/components/Button';

interface IProps {
  params: {
    category: string;
  }
}

const Category: FC<IProps> = ({ params }) => {
  console.log(params.category);
  return (
    <div className={style.container}>
      <h2 className={style.sectionTitle}>{params.category}</h2>
      <div className={style.item}>
        <div className={style.textContainer}>
          <h3 className={style.textTitle}>Test</h3>
          <p className={style.description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            laboriosam facilis totam nulla delectus consectetur dignissimos hic,
            quam alias eos!
          </p>
          <Button url='#' text='See more' />
        </div>
        <div className={style.imgContainer} >
          <Image
            src='https://images.pexels.com/photos/17644160/pexels-photo-17644160/free-photo-of-landscape.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            alt='picture'
            fill={true}
            className={style.imgContainer}
          />
        </div>
      </div>

      <div className={style.item}>
        <div className={style.textContainer}>
          <h3 className={style.textTitle}>Test</h3>
          <p className={style.description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            laboriosam facilis totam nulla delectus consectetur dignissimos hic,
            quam alias eos!
          </p>
          <Button url='#' text='See more' />
        </div>
        <div className={style.imgContainer} >
          <Image
            src='https://images.pexels.com/photos/17644160/pexels-photo-17644160/free-photo-of-landscape.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            alt='picture'
            fill={true}
            className={style.img}
          />
        </div>
      </div>

      <div className={style.item}>
        <div className={style.textContainer}>
          <h3 className={style.textTitle}>Test</h3>
          <p className={style.description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            laboriosam facilis totam nulla delectus consectetur dignissimos hic,
            quam alias eos!
          </p>
          <Button url='#' text='See more' />
        </div>
        <div className={style.imgContainer} >
          <Image
            src='https://images.pexels.com/photos/17644160/pexels-photo-17644160/free-photo-of-landscape.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            alt='picture'
            fill={true}
            className={style.imgContainer}
          />
        </div>
      </div>
    </div>
  );
};

export default Category;
