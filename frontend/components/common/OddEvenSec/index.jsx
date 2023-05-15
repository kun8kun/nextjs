import styles from '@/common/OddEvenSec/OddEvenSec.module.css'

const OddEvenSec = ({ children, marginTop, keyProps }) => {
  return (
    <section
    style={{marginTop: marginTop}}
    className={keyProps === 'odd' ? styles.odd : styles.even}>
      <div className={styles.container}>
      { children }
      </div>
    </section>
  );
};

export default OddEvenSec;
