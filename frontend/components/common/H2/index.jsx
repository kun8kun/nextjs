import styles from '@/common/H2/H2.module.css'

const H2 = ({ heading, subheading }) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>{heading}</h2>
      <p className={styles.subheading}>{subheading}</p>
    </div>
  );
};

export default H2;
