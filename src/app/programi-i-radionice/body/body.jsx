"use client";

import { useEffect, useState } from "react";
import Card from "../card/card";
import styles from "./body.module.css";

const Body = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/programi/lista.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to load data");
        }
        return response.json();
      })
      .then((jsonData) => setData(jsonData))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="contentWrapper">
      <div className="container">
        <h2>Programi i radionice</h2>
        <div className={styles.cards}>
          {data.map((item, index) => (
            <Card key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;
