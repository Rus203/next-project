import style from './page.module.css';
import Hero from 'public/hero.png';
import Image from 'next/image';

export default function Home() {
  return (
    <div className={style.container}>
      <div className={style.item}>
        <h1 className={style.title}>Better design for your digital products</h1>
        <p className={style.desc}>
          Turning your Idea into Reality. We bring together the
          teams from the global tech industry</p>
        <button className={style.button}>See our works</button>
      </div>
      <div className={style.item}>
        <Image className={style.img} src={Hero} alt="background image" />
      </div>
    </div>
  );
}
