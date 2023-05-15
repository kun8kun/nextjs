import styles from "@/pages/about/TargetSec/TargetSec.module.css";
import { H2,OddEvenSec } from "@/common/index"
import useSlideIn from "hooks/useSlideIn";

const TargetSec = () => {
const s = Array.from({ length: 2 }, () => useSlideIn());

  return (
    <OddEvenSec keyProps='odd'>
      <H2 heading="このサイトの目的" subheading="TARGET" />
      <div ref={s[0].ref} style={s[0].slideInStyles} className={`${styles.container} ${styles.first}`}>
        <img className={styles.img} src="/images/pages/about/about-target-illust-1.svg" alt="FF14コミュニティの交流活性化" />
        <div className={styles.content}>
          <h3 className={styles.h3}>FF14コミュニティの<br/>交流活性化</h3>
          <p className={styles.p}>FF14プレイヤーにとってTwitterをはじめとしたSNSは無くてはならないツールとして利用されています。そんなSNSで様々なイベントや活動を宣伝される方が多く見られます。</p>
          <p className={styles.p}>しかし、せっかく楽しい企画を思いついても宣伝用画像を作るのが苦手であったり、スマートフォンからでは作りにくいということがあると思います。</p>
          <p className={styles.p}>そんな時に、このサイトのサービスを利用して簡単に画像などが作成できれば、もっとコミュニティが活発になるのではないかと思い、公開しています。</p>
        </div>
      </div>
      <div ref={s[1].ref} style={s[1].slideInStyles}  className={`${styles.container} ${styles.second}`}>
        <img className={styles.img} src="/images/pages/about/about-target-illust-2.svg" alt="アイディアから実行をもっと早くもっと簡単に" />
        <div className={styles.content}>
          <h3 className={styles.h3}>アイディアから<br/>実行をもっと早く<br/>もっと簡単に</h3>
          <p className={styles.p}>このサイトのサービスを通じて、苦手な作業や面倒な作業が削減されれば、プレイヤーの皆さんは企画を考えたり、実行することに時間を割くことができます。</p>
          <p className={styles.p}>そうすることで、今まで以上に多くの方がユーザーイベントの企画やハウジング代行など、様々な活動をスムーズかつ簡単に行えるようになります。今まで企画を思いついても面倒で行動に移して来なかった方も動き始めるかもしれませんね。</p>
        </div>
      </div>
    </OddEvenSec>
  );
};

export default TargetSec;