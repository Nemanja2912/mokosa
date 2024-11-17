import styles from "./grid.module.css";

const Grid = ({ title, text, src, reverse = false }) => {
  return (
    <div className={`${styles.section} ${reverse ? styles.reverse : ""}`}>
      <div className={styles.content}>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
      <div className={styles.imageWrapper}>
        <img src={src} alt="" />
      </div>
    </div>
  );
};

export default Grid;
