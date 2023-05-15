import styles from "@/pages/about/WhatSec/WhatSec.module.css";
import { H2,OddEvenSec,LinkButton } from "@/common/index"
import useSlideIn from "hooks/useSlideIn";

const Item = ({imageSrc,h3,p,link}) => {
  const s = Array.from({ length: 1 }, () => useSlideIn());
  return (
    <div ref={s[0].ref} style={s[0].slideInStyles} className={styles.item}>
      <img className={styles.itemImage} src={imageSrc} alt={h3} />
      <h3 className={styles.itemTitle}>{h3}</h3>
      <p className={styles.itemContent}>{p}</p>
      <LinkButton href={link} text="もっと見る" />
    </div>
  );
};

const WhatSec = () => {

  return (
    <OddEvenSec keyProps='even'>
      <H2 heading="このサイトで出来る事" subheading="WHAT" />
      <div className={styles.container}>
        <Item
          imageSrc="/images/pages/about/about-what-illust-1.svg"
          h3="サービス利用"
          p="画像ジェネレーターをはじめとした様々なサービスが利用できます。画像とテキストを送信すると、テンプレートに当てはめて画像出力することができます。"
          link="/service" 
        />
        <Item
          imageSrc="/images/pages/about/about-what-illust-2.svg"
          h3="ブログ閲覧"
          p="大きく分けてFF14関連とWEB関連のふたつのカテゴリーについてブログを読むことができます。役に立つかどうかは読む人次第です。"
          link="/blog" 
        />
        <Item
          imageSrc="/images/pages/about/about-what-illust-3.svg"
          h3="連絡・応援"
          p="サイト運営者へ連絡することができます。いただいたご意見やご感想をもとに、新たなサービスの開発や、既存サービスの改善を行います。応援も受け付けてます。"
          link="/contact" 
        />
      </div>
    </OddEvenSec>
  );
};

export default WhatSec;