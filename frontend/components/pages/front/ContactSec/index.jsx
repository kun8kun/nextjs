import styles from "@/pages/front/ContactSec/ContactSec.module.css";
import { H2,OddEvenSec,LinkButton } from "@/common/index"

const ContactSec = () => {

  return (
    <OddEvenSec keyProps='odd'>
      <H2 heading="コンタクト" subheading="CONTACT" />
      <div className={styles.section}>
        <img src="/images/pages/front/front-contact-illust.svg" alt="atoxについてのイメージイラスト" />
        <div className={styles.content}>
          <p className={styles.text}>ご要望、ご感想、応援などなど<br/>こちらからお願いします<br/>お気軽にどうぞ！</p>
          <LinkButton text={"もっとみる"} w={"auto"} href={"/contact"}/>
        </div>
      </div>
    </OddEvenSec>
  );
};

export default ContactSec;