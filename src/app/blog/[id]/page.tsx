import React, { FC } from 'react';
import style from './page.module.css';
import Image from 'next/image';

interface IProps {
  params: {
    id: string;
  }
}

const BlogPost: FC<IProps> = ({ params }) => {
  const { id } = params;
  console.log(id);
  return (
    <div className={style.container}>
      <div className={style.top}>
        <div className={style.info}>
          <h2 className={style.title}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </h2>
          <p className={style.desciption}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            vel est quisquam perferendis blanditiis totam ducimus, cupiditate id
            soluta illo eius optio inventore quos autem, quaerat neque?
          </p>
          <div className={style.author}>
            <Image
              src ='https://images.pexels.com/photos/3772623/pexels-photo-3772623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              alt='avatar'
              className={style.avatar}
              width={40}
              height={40}
            />
            <span className={style.user}>John Doe</span>
          </div>
        </div>
        <div className={style.imgContainer}>
          <Image
            src='https://images.pexels.com/photos/2876407/pexels-photo-2876407.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            alt='image'
            className={style.img}
            fill={true}
          />
        </div>
      </div>
      <div className={style.content}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate
        dolorum rem earum consequatur similique eveniet cum sit expedita.
        Voluptate pariatur quos, ut quidem ipsam voluptatibus, ad quae
        eligendi vitae perspiciatis maxime, est expedita! Esse vitae
        vero possimus doloribus sequi corporis pariatur, reiciendis
        fugiat modi itaque, iste quaerat, voluptate odio aperiam
        perferendis totam. Lorem ipsum, dolor sit amet consectetur
        adipisicing elit. Voluptate dolorum rem earum consequatur similique
        eveniet cum sit expedita. Voluptate pariatur quos, ut quidem
        ipsam voluptatibus, ad quae eligendi vitae perspiciatis maxime,
        est expedita! Esse vitae vero possimus doloribus sequi corporis
        pariatur, reiciendis fugiat modi itaque, iste quaerat, voluptate
        odio aperiam  perferendis totam.
      </div>
    </div>
  );
};

export default BlogPost;
