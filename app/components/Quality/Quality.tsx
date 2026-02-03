import Link from 'next/link';
import quality1 from '@/public/quality/quality-1.png';
import quality2 from '@/public/quality/quality-2.png';
import quality3 from '@/public/quality/quality-3.png';
import quality4 from '@/public/quality/quality-4.png';
import quality5 from '@/public/quality/quality-5.png';
import quality6 from '@/public/quality/quality-6.png';
import styles from './Quality.module.css';
import Image from 'next/image';
import { Switch } from '@/app/components/Switch/Switch';
export const Quality = () => {
  return (
    <section className={styles.quality}>
      <div className="container-big">
        <div className={styles.block}>
          <div className="container">
            <div className={styles.qualityContent}>
              <h1 className={styles.qualityTitle}>High quality agricultural products</h1>
              <div className={styles.images}>
                <Link href="#">
                  <Image src={quality1} alt="high quality 1" />
                </Link>
                <Link href="#">
                  <Image src={quality2} alt="high quality 2" />
                </Link>
                <Link href="#">
                  <Image src={quality3} alt="high quality 3" />
                </Link>
                <Link href="#">
                  <Image src={quality4} alt="high quality 4" />
                </Link>
                <Link href="#">
                  <Image src={quality5} alt="high quality 5" />
                </Link>
                <Link href="#">
                  <Image src={quality6} alt="high quality 6" />
                </Link>
              </div>
            </div>
            <div className={styles.switch}>
              <Switch />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
