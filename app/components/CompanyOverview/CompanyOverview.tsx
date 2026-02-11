import styles from './CompanyOverview.module.css';
import { Switch } from '@/app/components/Switch/Switch';
export const CompanyOverview = () => {
  return (
    <section className={styles.companyOverview}>
      <div className="container">
        <div className={styles.block}>
          {/*Left Part*/}
          <div className={styles.leftBlock}>
            <p className={styles.leftBlockTitle}>
              Agroton is a reliable supplier of agricultural products
            </p>
            <p className={styles.leftBlockText}>
              We cooperate with processors, distributors and retail chains, ensuring stable supplies
              and high quality standards.
            </p>
            <Switch />
          </div>
          {/*Right part*/}
          <div className={styles.rightBlock}>
            <div className={styles.rightBlockDescription}></div>
          </div>
        </div>
      </div>
    </section>
  );
};
