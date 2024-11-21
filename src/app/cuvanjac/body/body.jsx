import styles from "./body.module.css";

const Body = () => {
  return (
    <div className="contentWrapper">
      <div className="content">
        <div className="container">
          <h2>Čuvanjac</h2>
          <p>
            Mokoša igraonica se nalazi u samom epicentru Vračara, a ukoliko imate potrebu da
            svratite na pijacu, odete do banke ili pošte ili pak imate zakazan termin u frizerskom
            salonu – ne brinite – vaše dete možete ostaviti na čuvanju u našoj igraonici.
            <br />
            <br />
            Nudimo vam pažljivo osmišljen program čuvanja dece, gde se svaki trenutak ispunjava
            radošću i zabavom.
          </p>
          <h2>Zašto odabrati Mokošu?</h2>
          <ul>
            <li>
              <p>
                <b>
                  <i>Sigurno i prijatno okruženje</i>
                </b>{" "}
                – naš tim ljubaznih devojaka brine o sigurnosti i dobrobiti vaše dece
              </p>
            </li>
            <li>
              <p>
                <b>
                  <i>Raznovrsne aktivnosti</i>
                </b>{" "}
                – tokom boravka organizujemo kreativne igre, edukativne radionice i sportske
                aktivnosti koje podstiču razvoj motorike i kreativnosti
              </p>
            </li>
            <li>
              <p>
                <b>
                  <i>Fleksibilni termini</i>
                </b>{" "}
                – nudimo usluhe čuvanja dece u različitim vremenskim terminima, prilagođenim vašim
                potrebama
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.grid}>
        <div className={styles.gridLine}>
          <img src="/assets/images/cuvanjac1.jpg" alt="" />
          <img src="/assets/images/cuvanjac6.jpg" alt="" />
          <img src="/assets/images/cuvanjac3.jpg" alt="" />
          <img src="/assets/images/cuvanjac5.jpg" alt="" />
          <img src="/assets/images/cuvanjac8.jpg" alt="" />
        </div>
        <div className={styles.gridLine}>
          <img src="/assets/images/cuvanjac7.jpg" alt="" />
          <img src="/assets/images/cuvanjac4.jpg" alt="" />
          <img src="/assets/images/cuvanjac2.jpg" alt="" />
          <img src="/assets/images/cuvanjac10.jpg" alt="" />
          <img src="/assets/images/cuvanjac11.jpg" alt="" />
          <img src="/assets/images/cuvanjac9.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Body;
