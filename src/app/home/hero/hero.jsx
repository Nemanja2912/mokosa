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
      <img className={styles.background} src="./assets/images/withoutLogo.png" alt="" />
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

        <Button>Poseti nas</Button>
      </div>
    </div>
  );
};

export default Hero;
