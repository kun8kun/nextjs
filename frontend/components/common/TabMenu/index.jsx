import styles from "@/common/TabMenu/TabMenu.module.css";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from 'next/image';
import homeIcon from "@/images/common/tabmenu/commonIconHome.svg";
import homeIconFilled from "@/images/common/tabmenu/commonIconHomeFilled.svg";
import aboutIcon from "@/images/common/tabmenu/commonIconAbout.svg";
import aboutIconFilled from "@/images/common/tabmenu/commonIconAboutFilled.svg";
import blogIcon from "@/images/common/tabmenu/commonIconBlog.svg";
import blogIconFilled from "@/images/common/tabmenu/commonIconBlogFilled.svg";
import contactIcon from "@/images/common/tabmenu/commonIconContact.svg";
import contactIconFilled from "@/images/common/tabmenu/commonIconContactFilled.svg";


function TabMenu() {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  const router = useRouter();

  const homeIconPath = router.pathname === '/' ? homeIconFilled : homeIcon;
  const aboutIconPath = router.pathname === '/about' ? aboutIconFilled : aboutIcon;
  const blogIconPath = router.pathname.startsWith('/blog') ? blogIconFilled : blogIcon;
  const contactIconPath = router.pathname === '/contact' ? contactIconFilled : contactIcon;

  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <Link href="/">
            <div className={styles.link}>
            <Image className={styles.linkIcon} src={homeIconPath} alt="home" width={30} height={30} />
            <p className={styles.linkText}>Home</p>
            </div>
          </Link>
        </li>
        <li className={styles.item}>
          <Link href="/about">
            <div className={styles.link}>
            <Image className={styles.linkIcon} src={aboutIconPath} alt="about" width={30} height={30} />
            <p className={styles.linkText}>About</p>
            </div>
          </Link>
        </li>
        <li className={styles.item}>
          <button className={`${styles.button} ${clicked ? styles.clicked : ""}`} onClick={handleClick} >
            <div className={styles.serviceListWrapper}>
            <ul className={styles.serviceList}>
              <li>
                <Link href="/service/detail">
                  <div className={styles.serviceLink}>
                    <img src="https://placehold.jp/80x60.png" alt="icon" />
                    <p>ハウス<br />オーナー<br />カード</p>
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/service/detail">
                  <div className={styles.serviceLink}>
                  <img src="https://placehold.jp/80x60.png" alt="icon" />
                  <p>ハウス<br />デザイナー<br />カード</p>
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/service/detail">
                  <div className={styles.serviceLink}>
                  <img src="https://placehold.jp/80x60.png" alt="icon" />
                  <p>ショップ<br />オーナー<br />カード</p>
                  </div>
                </Link>
              </li>
            </ul>
            <Link className={styles.serviceListLink} href="/service">全てのサービスを見る</Link>
            </div>
          </button>
        </li>
        <li className={styles.item}>
        <Link href="/blog">
            <div className={styles.link}>
            <Image className={styles.linkIcon} src={blogIconPath} alt="blog" width={30} height={30} />
              <p className={styles.linkText}>Blog</p>
            </div>
          </Link>
        </li>
        <li className={styles.item}>
          <Link href="/contact">
            <div className={styles.link}>
            <Image className={styles.linkIcon} src={contactIconPath} alt="contact" width={30} height={30} />
              <p className={styles.linkText}>Contact</p>
            </div>
          </Link>
        </li>
      </ul>
      <div className={`${styles.bg} ${clicked ? styles.bgClicked : ""}`} onClick={handleClick}></div>
    </nav>
  );
};

// export default React.memo(TabMenu);
export default TabMenu;

