"use client";

import Link from "next/link";
import { useState } from "react";
import styles from "./navigation.module.css";

const navLinks = [
  { text: "Igraonica", link: "/igraonica" },
  { text: "Proslava rođendana", link: "/proslava-rodjendana" },
  { text: "Čuvanje", link: "/cuvanje" },
  { text: "Programi i radionice", link: "/programi-i-radionice" },
  { text: "Mokoša klub", link: "/mokosa-klub" },
  { text: "Mokoša showroom", link: "/mokosa-showroom" },
  { text: "Želim da ti kažem", link: "/zelim-da-ti-kazem" },
];

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <nav className={`${styles.nav} ${isMenuOpen ? styles.open : ""}`}>
      <div className={`container  `}>
        <Link href={"/"}>
          <img src="./assets/images/logo.png" alt="Logo" className={styles.logo} />
        </Link>

        <div className={styles.navLinks}>
          <List />
        </div>

        <div
          className={`${styles.hamburger} ${isMenuOpen ? styles.active : ""}`}
          onClick={toggleMenu}
        >
          <div className={styles.line}></div>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
        </div>
      </div>

      <div className={`${styles.mobLinks} container`}>
        <List />
      </div>
    </nav>
  );
};

export default Navigation;

const List = () => {
  return (
    <ul>
      {navLinks.map((section, index) => (
        <li key={index}>
          <Link href={section.link}>{section.text}</Link>
        </li>
      ))}
    </ul>
  );
};
