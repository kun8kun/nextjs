import styles from "@/common/Header/Header.module.css";
import {Logo,Menu,Button} from "@/common/Header/items";

const Header = () => {

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <Logo />
        <Menu />
        <Button />
      </div>
    </header>
  );
};

export default Header;
