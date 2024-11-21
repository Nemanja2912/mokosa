import styles from "./work.module.css";

const Work = () => {
  return (
    <div className={styles.section}>
      <img className={styles.cloud} src="/assets/images/cloud1.png" alt="" />
      <div className="container">
        <div>
          <h2>Informacije o lokaciji</h2>
          <div className={styles.items}>
            <div className={styles.item}>
              <p>Radno vreme</p>
              <p>10:00 - 20:00</p>
            </div>
            <div className={styles.item}>
              <p>Adresa</p>
              <p>Krunska 89, Beograd</p>
            </div>
            <div className={styles.item}>
              <p>Kontak</p>
              <p>
                <a href="tel:+381652160507">065 2160507</a>
              </p>
            </div>
          </div>
        </div>

        <div>
          <img src="/assets/images/calendar.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Work;
