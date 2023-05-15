import styles from "@/common/HeroPages/HeroPages.module.css";
import useSlideIn from "hooks/useSlideIn";

const HeroPages = ( props ) => {

const title = props.title
const subTitle = props.sub
const imageSrc = props.imageSrc
const s = Array.from({ length: 1 }, () => useSlideIn());

  return (
    <section className={styles.hero}>
      <div ref={s[0].ref} style={s[0].slideInStyles} className={styles.heroContainer}>
        <div className={styles.content}>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.sub}>{subTitle}</p>
        </div>
        <img className={styles.img} src={imageSrc} alt={title} />
      </div>
    </section>
  );
};

export default HeroPages;