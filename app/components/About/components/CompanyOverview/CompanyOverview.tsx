import Image from 'next/image';
import aboutField from '@/public/about-field.webp';
import styles from './CompanyOverview.module.css';

export const CompanyOverview = () => {
  return (
    <div className={styles.overview}>
      <h2 className={styles.title}>
        <span>Agroton is the largest diversified vertically</span> integrated agricultural producer
        in Eastern Ukraine. Agroton is a regional leader in the cultivation of agricultural crops,
        livestock farming
      </h2>

      <div className={styles.layout}>
        <div className={styles.image}>
          <Image src={aboutField} alt="field" />
        </div>

        <div className={styles.info}>
          <h4 className={styles.description}>
            Agroton is 30 years of leadership in the agricultural sector. We cultivate 200,000+
            hectares of land, supply the market with quality products and export to 10+ countries.
            Our mission is to develop agriculture, introduce innovations and provide people with
            natural products.
          </h4>

          <ul className={styles.statsList}>
            <li className={styles.statsItem}>
              <p>№1 in sunflower production in Ukraine</p>
              <span>48,000 hectares of sown areas.</span>
            </li>

            <li className={styles.statsItem}>
              <p>№4 in wheat production</p>
              <span>50,000 hectares of fields.</span>
            </li>

            <li className={styles.statsItem}>
              <p>№1 in grain elevator capacity in Luhansk region</p>
              <span>235,000 tons of storage.</span>
            </li>

            <li className={styles.statsItem}>
              <p>№1 in poultry production in Luhansk region</p>
              <span>4,000,000 chickens.</span>
            </li>

            <li className={styles.statsItem}>
              <p>№5 in milk production in Ukraine</p>
              <span>4,500 dairy cattle.</span>
            </li>

            <li className={styles.statsItem}>
              <p>№2 in bakery production in Luhansk</p>
              <span>7,000 tons of products per year.</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
