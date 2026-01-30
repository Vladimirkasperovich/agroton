import Link from 'next/link';
import Image from 'next/image';
import achievement1 from '@/public/achievement-1.png';
import arrowRight from '@/public/arrow-right.svg';
import achievement2 from '@/public/achievement-2.png';
import styles from './Achievements.module.css';

export const Achievements = () => {
  return (
    <div className={styles.achievements}>
      <Link href="#" className={styles.achievement}>
        <div className={styles.achievementImageBox}>
          <Image src={achievement1} alt="about achievements 1" />
          <button className={styles.achievementButton}>
            <Image src={arrowRight} alt="arrow right" />
          </button>
        </div>

        <div className={styles.achievementContent}>
          <h4 className={styles.achievementTitle}>
            Agroton is among the leaders in wheat production in Ukraine
          </h4>

          <p className={styles.achievementText}>
            <span className={styles.textBold}>We rank</span>
            <span className={styles.textHighlight}>4th in Ukraine</span> in terms of wheat
            production...
          </p>
        </div>
      </Link>

      <Link href="#" className={styles.achievement}>
        <div className={styles.achievementImageBox}>
          <Image src={achievement2} alt="about achievements 2" />
          <button className={styles.achievementButton}>
            <Image src={arrowRight} alt="arrow right" />
          </button>
        </div>

        <div className={styles.achievementContent}>
          <h4 className={styles.achievementTitle}>
            Agroton – number 1 in chicken production in Ukraine
          </h4>

          <p className={styles.achievementText}>
            <span className={styles.textBold}>We lead the chicken market</span>
            in Ukraine...
          </p>
        </div>
      </Link>
    </div>
  );
};
