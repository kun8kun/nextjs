import Link from "next/link";
import styles from "styles/pages/contact/contact.module.css";
import useSlideIn from "hooks/useSlideIn";

const Card = (props) => {
    const s = Array.from({ length: 1 }, () => useSlideIn());
  return (
    <Link href={props.href} rel="noopener" target="_blank">
      <div ref={s[0].ref} style={s[0].slideInStyles} className={styles.itemContainer}>
        <img className={styles.itemLinkIcon} src="/images/common/icon-external-link-line.svg" alt="外部リンクのアイコン" />
        <img className={styles.itemIcon} src={props.iconSrc} alt={props.h3} />
        <h3 className={styles.itemTitle}>{props.h3}</h3>
        <p className={styles.itemText}>{props.p}</p>
        <img className={styles.itemQr} src={props.qrSrc} alt={`${props.h3}のQRコード`}/>
      </div>
    </Link>
  );
}


export default Card;