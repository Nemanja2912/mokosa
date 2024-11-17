import styles from "./button.module.css";

const Button = ({ children }) => {
  return <div className={styles.button}>{children}</div>;
};

export default Button;
