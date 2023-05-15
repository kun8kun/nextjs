import { HeroPages, OddEvenSec } from "@/common/index";
import styles from 'styles/pages/service/service.module.css';

export default function Service() {
  return (
    <main>
      <HeroPages />
      <OddEvenSec keyProps='odd' marginTop="300px">
        <div className={styles.section}>
      <p>service page</p>
      </div>
      </OddEvenSec>
    </main>
  );
}
