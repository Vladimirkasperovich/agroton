import Image from 'next/image';
import achievment1 from '@/public/achievement-1.png';
import achievment2 from '@/public/achievement-2.png';
import Link from 'next/link';
import styles from './About.module.css';

export const About = () => {
  return (
    <section className={styles.about}>
      <div className="container-big">
        <div className={styles.about__top}>
          <h1 className={styles.about__title}>Agroton</h1>
          <p className={styles.about__text}>
            one of the largest producers of agricultural products in Ukraine
          </p>
        </div>
      </div>
      <div className="container">
        <div className={styles.about__achievements}>
          <Link href="#" className={styles.about__achievement}>
            <div className={styles.about__achievement__img__box}>
              <Image src={achievment1} alt="about achievements 1" />
              <button className={styles.about__achievement__btn}>aasd</button>
            </div>
            <div className={styles.about__achievement__content}>
              <h4 className={styles.about__achievement__title}>
                Agroton is among the leaders in wheat production in Ukraine
              </h4>
              <p className={styles.about__achievement__text}>
                <span className={styles.about__achievement__text__bold}> We rank</span>
                <span className={styles.about__achievement__text__yellow}>4th in Ukraine</span> in
                terms of wheat production, ensuring high quality grain thanks to modern technologies
                and fertile Ukrainian fields.
              </p>
            </div>
          </Link>
          <Link href="#" className={styles.about__achievement}>
            <div className={styles.about__achievement__img__box}>
              <Image src={achievment2} alt="about achievements 2" />
              <button className={styles.about__achievement__btn}>asdas</button>
            </div>
            <div className={styles.about__achievement__content}>
              <h4 className={styles.about__achievement__title}>
                Agroton – number 1 in chicken production in Ukraine
              </h4>
              <p className={styles.about__achievement__text}>
                <span className={styles.about__achievement__text__bold}>
                  We lead the chicken market
                </span>
                in Ukraine, guaranteeing the highest quality products thanks to modern technologies,
                safety controls
              </p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};
