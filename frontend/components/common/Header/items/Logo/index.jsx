import Link from "next/link";
import { useRouter } from "next/router";
import styles from "@/common/Header/items/Logo/Logo.module.css";

const Logo = () => {
  const router = useRouter();

  const isHomePage = router.pathname === "/";

  const logoSrc = "/images/common/logo_symbol_text.svg";
const logoAlt = "My Company Logo";

const Logo = (
  <Link className={styles.link} href="/">
    <img className={styles.img} src={logoSrc} alt={logoAlt} />
  </Link>
);

return isHomePage ? (
  <h1 className={styles.logo}>{Logo}</h1>
) : (
  <div className={styles.logo}>{Logo}</div>
);
};

export default Logo;