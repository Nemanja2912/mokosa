import styles from "./gallery.module.css";

const Gallery = () => {
  return (
    <div className={styles.section}>
      <img className={styles.cloud} src="/assets/images/cloud2.png" alt="" />
      <div className={`${styles.gallery} container`}>
        <img src="/assets/images/gallery1.png" alt="" />
        <img src="/assets/images/gallery2.png" alt="" />
        <img src="/assets/images/gallery3.png" alt="" />
        <img src="/assets/images/gallery4.png" alt="" />
        <img src="/assets/images/gallery5.png" alt="" />
        <img src="/assets/images/gallery6.png" alt="" />
        <img src="/assets/images/gallery7.png" alt="" />
        <img src="/assets/images/gallery8.png" alt="" />
      </div>
    </div>
  );
};

export default Gallery;
