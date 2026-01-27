import styles from './About.module.css';
export const About = () => {
  return (
    <section className={styles.about}>
      <div className="container-big">
        <div className={styles.about__top}>
          <h1 className={styles.about__title}>Agroton</h1>
          <h2 className={styles.about__text}>
            one of the largest producers of agricultural products in Ukraine
          </h2>
        </div>
      </div>
    </section>
  );
};
