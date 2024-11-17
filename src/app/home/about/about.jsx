import styles from "./about.module.css";

import InstagramEmbed from "../instagramFeed/instagramFeed";

const About = () => {
  return (
    <div className={styles.section}>
      <img className={styles.cloud} src="./assets/images/cloud1.png" alt="" />
      <div className={`container `}>
        <div className={styles.content}>
          <div>
            <h2>U Mokoši nema forme</h2>
            <p>
              Sve je u suštini, a suština je da je život vrlo jednostavan i najbolje ga razumeju
              deca. Trudimo se da u svakom segmentu zadovoljimo potrebe dece, ali i njihovih
              roditelja kojima je često potreban beg sa užurbanih ulica u ušuškan prostor u kojem će
              uživati kao kod svoje kuće (ali će im neko skuvati kafu i pospremiti za klincima).{" "}
              <br />
              <br />
              Želimo vam da uživate u svakom našem programu koji smo osmislili sa puno pažnje i
              ljubavi. <br />
              <br /> Čekamo vas u Krunskoj 89.
            </p>
          </div>
          <div className={styles.instagram}>
            <img src="./assets/images/instagram-background.png" alt="" />
            <div className={styles.instagramWrapper}>
              <InstagramEmbed />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
