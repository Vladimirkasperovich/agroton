import Image from 'next/image';
import background from '@/public/Impressive-scale-bg.png';
import styles from './ImpressiveScale.module.css';
export const ImpressiveScale = () => {
  return (
    <div className={styles.block}>
      <div className="container">
        <p className={styles.subTitle}>Impressive scale. Convincing quality.</p>
        <p className={styles.title}>Agroton</p>
      </div>
      <Image src={background} alt="agroton" className={styles.image} />
    </div>
  );
};
