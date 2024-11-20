import styles from "./body.module.css";

const Body = () => {
  return (
    <div className="contentWrapper">
      <div className="content">
        <div className="container">
          <h2>Proslava rođendana</h2>
          <h4>Savršen prostor za vaše nezaboravne porodične trenutke</h4>
          <p>
            Ukoliko planirate proslavu rođendana za svoje dete u intimnijoj atmosferi naš prostor je
            idealno mesto za vas. Nudimo vam savršeno i prirodno okruženje koje će učiniti svaku
            porodičnu proslavu posebnom.
          </p>
          <h2>Zašto izabrati nas?</h2>
          <h4>
            <i>Autentičan prostor</i>
          </h4>
          <p>
            Naš prostor smešten je u predratnu vilu koja svojom arhitekturom i enterijerom
            neodoljivo podseća na Pariške salonce u koje smo svi zaljubljeni. Prostran i okupan
            prirodnom svetlošću, naš prostor odiše toplinom i nežnošću kojem nije potrebna dodatna
            dekoracija i u kojem ćete se osećati kao kod svoje kuće.
          </p>
          <img src="./assets/images/pr1.jpg" alt="" />
          <h4>
            <i>Sigurno i prijatno okruženje</i>
          </h4>
          <p>
            Naš tim brine o sigurnosti vaših mališana, a prostor je dizajniran tako da bude udoban i
            privlačan za decu različitog uzrasta. Deo za roditelje ima kapaciteta za do 40 odraslih
            osoba, a u jednoj prostoriji koja predstavlja community zonu dozvoljena je konzumacija
            elektronskih cigareta. Prostor je pokriven video nadzorom, a zahvaljujući prečišćivaču
            vazduha vaši mališani će biti na bezbednom i tokom onih dana kada je zagađenje vazduha u
            Beogradu na visokom nivou.
          </p>
          <img src="./assets/images/pr2.jpg" alt="" />
          <h2>Paketi</h2>
          <p>
            Mokoša tim se trudi da svim roditeljima izađe u susret kada je proslava rođendana u
            pitanju i zbog toga smo kreirali nekoliko različitih paketa.
          </p>
        </div>
      </div>
      <div className={styles.packages}>
        <img className={styles.cloud} src="./assets/images/cloudText1.png" alt="" />
        <img className={styles.cloud} src="./assets/images/cloudText2.png" alt="" />
        <img className={styles.cloud} src="./assets/images/cloudText3.png" alt="" />
      </div>
    </div>
  );
};

export default Body;
