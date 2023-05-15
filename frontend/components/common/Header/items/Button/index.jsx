import Link from "next/link";
import styles from "@/common/Header/items/Button/Button.module.css";

const Button = () => {
  return (
    <div className={styles.button}>
        <Link className={styles.twitter} href="#">
            <img src="/images/common/common-icon-twitter-navy.svg" />
        </Link>
        <Link className={styles.en} href="#">
            EN
        </Link>
    </div>
  );
};

export default Button;