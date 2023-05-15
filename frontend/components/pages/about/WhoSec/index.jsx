import styles from "@/pages/about/WhoSec/WhoSec.module.css";
import { H2,OddEvenSec } from "@/common/index"
import Link from "next/link";
import useSlideIn from "hooks/useSlideIn";

const WhoSec = () => {
const s = Array.from({ length: 1 }, () => useSlideIn());

  return (
    <OddEvenSec keyProps='odd'>
      <H2 heading="サイト運営者" subheading="WHO" />
      <div ref={s[0].ref} style={s[0].slideInStyles} className={styles.section}>
        <img className={styles.illust} src="/images/pages/about/about-who-illust.png" alt="アルウィン" />
        <div className={styles.container}>
          <div className={styles.nameContainer}>
            <p className={styles.name}>アルウィン</p>
            <div className={styles.nameSubContainer}>
                <p>A'lwin</p>
                <Link href="#">
                  <img src="/images/common/common-icon-twitter-navy.svg" alt="Twitterリンク"/>
                </Link>
            </div>
          </div>
          <div className={styles.contentContainer}>
            <p className={styles.content}>
              MeteorDCのRamuhで遊んでいるオスッテです。ひとりの時はギャザクラやハウジングをしています。お店巡りも好きで、ふらっと入ったお店でオーナーや他のお客さんとチャットでお話しています。
            </p>
            <p className={styles.content}>
              ハウジンガーマンションという企画をRamuhで主催しています。「様々なDCに散らばるハウジング好きがひとつのFCに集まり個室でハウジングを楽しむ」をコンセプトに掲げ、たくさんのハウジンガーさんと一緒にハウジングを楽しんでおります。
            </p>
            <p className={styles.content}>
              中の人はものづくりが大好きな駆け出しWEB制作者です。ミックスナッツとラムネをつまみながらキーボードをカタカタしています。カフェラテは相棒。
            </p>
          </div>
        </div>
      </div>
    </OddEvenSec>
  );
};

export default WhoSec;