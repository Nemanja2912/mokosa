import styles from "./loader.module.css";

const Loader = () => {
  return (
    <div className={styles.loader}>
      <img className={styles.background} src="/assets/images/backgroundLogo.png" alt="" />
    </div>
  );
};

export default Loader;
