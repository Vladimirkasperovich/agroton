import styles from './Advantages.module.css';
export const Advantages = () => {
  return (
    <div className={styles.advantages}>
      <ul className={styles.advantagesList}>
        <li className={styles.advantagesItem}>
          <h2 className={styles.advantagesTitle}>100%</h2>
          <p className={styles.advantagesText}>quality of production</p>
        </li>

        <li className={styles.advantagesItem}>
          <h2 className={styles.advantagesTitle}>50+</h2>
          <p className={styles.advantagesText}>modern agricultural technologies</p>
        </li>

        <li className={styles.advantagesItem}>
          <h2 className={styles.advantagesTitle}>1.5 mil. tons</h2>
          <p className={styles.advantagesText}>products we produce every year.</p>
        </li>

        <li className={styles.advantagesItem}>
          <h2 className={styles.advantagesTitle}>10+ countries</h2>
          <p className={styles.advantagesText}>we export products all over the world.</p>
        </li>
      </ul>
    </div>
  );
};
