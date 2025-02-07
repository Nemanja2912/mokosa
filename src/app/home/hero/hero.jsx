"use client";

import Button from "@/components/button/button";
import styles from "./hero.module.css";
import { useEffect, useState } from "react";

const Hero = () => {
  const [height, setHeight] = useState();

  useEffect(() => {
    setHeight(window.innerHeight);
  }, []);

  return (
    <div className={styles.section} style={{ height }}>
      <img className={styles.background} src="/assets/images/withoutLogo.png" alt="" />
      <div className={`${styles.content} container`}>
        <h1>
          Vaša beba zaslužuje <br /> posebno mesto za igru
        </h1>

        <p>
          Zamislite prostor gde se vaša beba oseća sigurno kao kod svoje kuće, a vi konačno možete
          da predahnete uz šoljicu omiljenog napitka. Mesto gde nema preglasne muzike, agresivnih
          sadržaja i velike gužve – upravo je to prostor koje smo stvorile u Beogradu želeći da se
          svi gosti osećaju slobodno, prijatno i razdragano.
        </p>

        <div className={styles.buttons}>
          <a
            href="https://www.google.com/maps/place/Moko%C5%A1a+Igraonica/@44.8023808,20.4746007,15z/data=!4m2!3m1!1s0x0:0xa2d49ca348bc3f74?sa=X&ved=1t:2428&ictx=111"
            target="_blank"
          >
            <Button>Poseti nas</Button>
          </a>
          <a className={styles.secondButton} href="tel:+381652160507">
            <Button>Pozovi nas</Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
