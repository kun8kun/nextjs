import styles from "@/pages/front/AboutSec/AboutSec.module.css";
import { H2,LinkButton,OddEvenSec } from "@/common/index"
import useSlideIn from "hooks/useSlideIn";



const AboutSec = () => {
  const s = Array.from({ length: 1 }, () => useSlideIn());
  return (
    <OddEvenSec keyProps='odd' marginTop="300px">
      <H2 heading="サイトについて" subheading="ABOUT" />
      <div ref={s[0].ref} style={s[0].slideInStyles} className={styles.section}>
        <img src="/images/pages/front/front-about-illust.svg" alt="atoxについてのイメージイラスト" />
        <div className={styles.content}>
          <p className={styles.text}>FINAL FANTASY XIVで行われる<br/>ハウジングやイベントをはじめとした<br/>遊びを手助けするサービスを<br/>開発・公開していきます</p>
          <LinkButton text={"もっとみる"} w={"auto"} href={"/about"}/>
        </div>
      </div>
    </OddEvenSec>
  );
};

export default AboutSec;