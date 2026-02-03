import Link from 'next/link';
import Image from 'next/image';
import { Switch } from '@/app/components/Switch/Switch';
import { QUALITY__LIST } from '@/app/components/Switch/constants';
import styles from './Quality.module.css';

export const Quality = () => {
  return (
    <section className={styles.section}>
      <div className="container-big">
        <div className={styles.wrapper}>
          <div className="container">
            <div className={styles.content}>
              <h2 className={styles.title}>High quality agricultural products</h2>
              <ul className={styles.grid}>
                {QUALITY__LIST.map(({ id, src, alt, href }) => (
                  <li key={id}>
                    <Link href={href}>
                      <Image src={src} alt={alt} />
                    </Link>
                  </li>
                ))}
              </ul>
              <Switch />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
