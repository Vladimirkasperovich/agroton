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
            Agroton is <span className={styles.yellowText}>30 years</span> of leadership in the
            agricultural sector. We cultivate{' '}
            <span className={styles.yellowText}>200,000+ hectares of land</span>, supply the market
            with quality products and export{' '}
            <span className={styles.yellowText}>to 10+ countries</span>.{' '}
            <span className={styles.boldText}>Our mission is</span> to develop agriculture,
            introduce innovations and provide people with natural products.
          </h4>

          <ul className={styles.statsList}>
            <li className={styles.statsItem}>
              <p className={styles.statsLabel}>
                <span className={styles.yellowText}>№1</span> in sunflower production in Ukraine
              </p>
              <span className={styles.statsValue}>48,000 hectares of sown areas.</span>
            </li>

            <li className={styles.statsItem}>
              <p className={styles.statsLabel}>
                <span className={styles.yellowText}>№4</span> in wheat production
              </p>
              <span className={styles.statsValue}>50,000 hectares of fields.</span>
            </li>

            <li className={styles.statsItem}>
              <p className={styles.statsLabel}>
                <span className={styles.yellowText}>№1</span> in grain elevator capacity in Luhansk
                region
              </p>
              <span className={styles.statsValue}>235,000 tons of storage.</span>
            </li>

            <li className={styles.statsItem}>
              <p className={styles.statsLabel}>
                <span className={styles.yellowText}>№1</span> in poultry production in Luhansk
                region
              </p>
              <span className={styles.statsValue}>4,000,000 chickens.</span>
            </li>

            <li className={styles.statsItem}>
              <p className={styles.statsLabel}>
                <span className={styles.yellowText}>№5</span> in milk production in Ukraine
              </p>
              <span className={styles.statsValue}>4,500 dairy cattle.</span>
            </li>

            <li className={styles.statsItem}>
              <p className={styles.statsLabel}>
                <span className={styles.yellowText}>№2</span> in bakery production in Luhansk
              </p>
              <span className={styles.statsValue}>7,000 tons of products per year.</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
