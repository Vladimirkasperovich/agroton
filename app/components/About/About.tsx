import { Achievements } from '@/app/components/About/components/Achievements/Achievements';
import { Advantages } from '@/app/components/About/components/Advantages/Advantages';
import { CompanyOverview } from '@/app/components/About/components/CompanyOverview/CompanyOverview';
import styles from './About.module.css';

export const About = () => {
  return (
    <section className={styles.about}>
      <div className="container-big">
        <div className={styles.top}>
          <h1 className={styles.title}>Agroton</h1>
          <p className={styles.subtitle}>
            one of the largest producers of agricultural products in Ukraine
          </p>
        </div>
      </div>
      <div className="container">
        <Achievements />
        <Advantages />
        <CompanyOverview />
      </div>
    </section>
  );
};
