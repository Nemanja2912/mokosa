"use client";

import { useState } from "react";
import styles from "./card.module.css";

const Card = ({ image, date, price, currency, name, desc = [], time }) => {
  const [show, setShow] = useState(false);

  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper} onClick={() => setShow((prev) => !prev)}>
        <img src={image ? `/assets/images/${image}` : null} alt={name} />
      </div>

      <div className={`${styles.content} ${show ? styles.show : ""}`}>
        <div>
          <div className={styles.topContent}>
            <div className={styles.date}>{date}</div>
          </div>
          <div className={styles.name}>{name}</div>
          <div className={styles.desc}>
            {desc.map((item, index) => (
              <span key={index}>
                {item}
                <br />
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
