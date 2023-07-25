import React, { FC } from 'react';
import style from './about.module.css';
import Image from 'next/image';
import { Button } from '@/components/Button';

const About: FC = () => {
  return <div>
    <div className={style.imgContainer}>
      <Image
        className={style.img}
        src='https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        alt='picture'
        fill={true}
      />
      <div className={style.imgText}>
        <h2>Digital Storytellers</h2>
        <h3>
          Handcrafting award winning digital experiences
        </h3>
      </div>
    </div>
    <div className={style.textContainer}>
      <div className={style.item}>
        <h2 className={style.title}>What We Do</h2>
        <p className={style.description}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
          quae dolor, optio voluptatibus magnam iure esse tempora beatae. A
          suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea
          eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Ducimus quae dolor, optio voluptatibus magnam iure esse tempora
          beatae, a suscipit eos. Animi quibusdam cum omnis officiis
          <br />
          <br />
          voluptatum quo ea eveniet? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Ducimus quae dolor, optio voluptatibus magnam iure
          esse tempora beatae, a suscipit eos. Animi quibusdam cum omnis
          officiis voluptatum quo ea eveniet?
        </p>
      </div>
      <div className={style.item}>
        <h2 className={style.title}>What We Do</h2>
        <p className={style.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            quae dolor, optio voluptatibus magnam iure esse tempora beatae, a
            suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea
            eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. -
            Creative Illustrations
            <br />
            <br /> - Dynamic Websites
            <br />
            <br /> - Fast and Handy
            <br />
            <br /> - Mobile Apps
          </p>
          <Button url='\contacts' text='Contact' />
      </div>
    </div>
  </div>;
};

export default About;

// https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2
