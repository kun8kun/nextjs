import { HeroPages, OddEvenSec,H2 } from "@/common/index";
import Card from "@/pages/contact/Card";
import React from "react";
import styles from "styles/pages/contact/contact.module.css";
import useSlideIn from "hooks/useSlideIn";

export default function Contact() {
  const s = Array.from({ length: 1 }, () => useSlideIn());
  return (
    <main>
      <HeroPages title='コンタクト' sub='CONTACT' imageSrc='/images/pages/contact/contact-hero-illust.svg'  />
      <OddEvenSec keyProps="odd">
        <H2 heading="連絡方法一覧" subheading="MESSAGE" />
        <p ref={s[0].ref} style={s[0].slideInStyles} className={styles.text}>お気軽にご連絡くださいませ。<br/>ご意見、ご要望、応援なんでも受け付けております。</p>
        <div className={styles.section}>
          <Card
            href="#"
            iconSrc="/images/pages/contact/contact-icon-marshmallow.svg"
            h3="Marshmallow"
            p="匿名でメッセージを送りたい場合はこちらからお願いいたします"
            qrSrc="/images/pages/contact/contact-qr-marshmallow.svg"
           />
          <Card
            href="#"
            iconSrc="/images/pages/contact/contact-icon-twitter.svg"
            h3="Twitter"
            p="お返事が必要な場合や、お話してくださる方はこちらからお願いいたします"
            qrSrc="/images/pages/contact/contact-qr-twitter.svg"
           />
          <Card
            href="#"
            iconSrc="/images/pages/contact/contact-icon-ofuse.svg"
            h3="OFUSE"
            p="おやつをご馳走してくださるお優しいかたはこちらからお願いいたします"
            qrSrc="/images/pages/contact/contact-qr-ofuse.svg"
           />
        </div>
      </OddEvenSec>
    </main>
  );
}
