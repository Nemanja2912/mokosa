import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.section}>
      <img className={styles.cloud} src="./assets/images/cloud1.png" alt="Cloud decoration" />
      <div className="container">
        <div className={styles.text}>
          <div>
            <span>Dobrodošli</span>
          </div>
          <div>
            <h3>Mokoša</h3>
          </div>
          <div>
            <p>Dečija Igraonica | Kreativni centar za decu</p>
          </div>
        </div>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11323.766007156592!2d20.4746007!3d44.8023808!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a7be1065feb69%3A0xa2d49ca348bc3f74!2sMoko%C5%A1a%20Igraonica!5e0!3m2!1sen!2srs!4v1731803529762!5m2!1sen!2srs"
          width="100%"
          height="400"
          style={{ border: "0", borderRadius: "1rem" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Mokoša Igraonica - Google Maps"
        ></iframe>

        <div className={styles.bottom}>
          <div className={styles.socials}>
            <a
              className={styles.item}
              href="https://www.instagram.com/mokosa.vracar/?hl=en"
              target="_blank"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="#b96986" viewBox="0 0 256 256">
                <path d="M176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24ZM128,176a48,48,0,1,1,48-48A48.05,48.05,0,0,1,128,176Zm60-96a12,12,0,1,1,12-12A12,12,0,0,1,188,80Zm-28,48a32,32,0,1,1-32-32A32,32,0,0,1,160,128Z"></path>
              </svg>
            </a>
            <a
              className={styles.item}
              href="https://www.facebook.com/mokosa.vracar/"
              target="_blank"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="#b96986" viewBox="0 0 256 256">
                <path d="M232,128a104.16,104.16,0,0,1-91.55,103.26,4,4,0,0,1-4.45-4V152h24a8,8,0,0,0,8-8.53,8.17,8.17,0,0,0-8.25-7.47H136V112a16,16,0,0,1,16-16h16a8,8,0,0,0,8-8.53A8.17,8.17,0,0,0,167.73,80H152a32,32,0,0,0-32,32v24H96a8,8,0,0,0-8,8.53A8.17,8.17,0,0,0,96.27,152H120v75.28a4,4,0,0,1-4.44,4A104.15,104.15,0,0,1,24.07,124.09c2-54,45.74-97.9,99.78-100A104.12,104.12,0,0,1,232,128Z"></path>
              </svg>
            </a>
            <a
              className={styles.item}
              href="https://www.tiktok.com/@mokosa.vracar?lang=en"
              target="_blank"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="#b96986" viewBox="0 0 256 256">
                <path d="M232,80v40a8,8,0,0,1-8,8,103.25,103.25,0,0,1-48-11.71V156a76,76,0,0,1-152,0c0-36.9,26.91-69.52,62.6-75.88A8,8,0,0,1,96,88v42.69a8,8,0,0,1-4.57,7.23A20,20,0,1,0,120,156V24a8,8,0,0,1,8-8h40a8,8,0,0,1,8,8,48.05,48.05,0,0,0,48,48A8,8,0,0,1,232,80Z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
