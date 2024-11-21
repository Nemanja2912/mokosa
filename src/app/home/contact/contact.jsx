"use client";

import Button from "@/components/button/button";
import styles from "./contact.module.css";

const Contact = () => {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    try {
      const response = await fetch("/contact.php", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        alert("Poruka je uspešno poslata!");
        event.target.reset(); // Resetuje formu
      } else {
        alert("Došlo je do greške. Pokušajte ponovo.");
      }
    } catch (error) {
      console.error("Greška pri slanju:", error);
      alert("Došlo je do greške. Pokušajte ponovo.");
    }
  };

  return (
    <div className={styles.section}>
      <img className={styles.cloud} src="/assets/images/cloud2.png" alt="Cloud decoration" />
      <form onSubmit={handleSubmit} className={`${styles.form} container`}>
        <h2>Pošaljite nam svoj upit, komentar ili sugestiju (prvi dolazak je besplatan)</h2>
        <div className={styles.inputGroup}>
          <label htmlFor="name">Ime</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="message">Poruka</label>
          <textarea id="message" name="message" rows="4" required />
        </div>
        <button type="submit" className={styles.submitButton}>
          <Button>Pošalji</Button>
        </button>
      </form>
    </div>
  );
};

export default Contact;
