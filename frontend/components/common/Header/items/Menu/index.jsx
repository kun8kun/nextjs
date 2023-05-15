import Link from "next/link";
import styles from "@/common/Header/items/Menu/Menu.module.css"

import { useState } from 'react';

const SubmenuItem = ({ href, label }) => {

  
  return (
    <li className={styles.subMenuItem}>
      <Link href={href} className={styles.subMenuLink}>{label}</Link>
    </li>
  );
};

const Submenu = ({ items }) => {
  return (
    <ul className={styles.subMenu}>
      {items.map((item) => (
        <SubmenuItem key={item.label} href={item.href} label={item.label} />
      ))}
    </ul>
  );
};

const MenuItem = ({ href, label, subItems }) => {
  const [isSubMenuVisible, setIsSubMenuVisible] = useState(false);

  const handleMouseEnter = () => {
    setIsSubMenuVisible(true);
  };

  const handleMouseLeave = () => {
    setIsSubMenuVisible(false);
  };
  
  const handleClick = () => {
    setIsSubMenuVisible(false);
  };
  
  return (
    <li className={`${styles.mainMenuItem} ${isSubMenuVisible ? styles.visible : ""}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={handleClick}>
      <Link href={href} className={styles.mainMenuLink}>{label}</Link>
      {subItems && <Submenu items={subItems}/>}
    </li>
  );
};

const Menu = () => {
  const menuItems = [
    { href: "/service", label: "Service", subItems: [
        { href: "/service/detail", label: "ハウスオーナーカード" },
        { href: "/service/detail", label: "ハウスデザイナーカード" },
        { href: "/service/detail", label: "ショップオーナーカード" }, ], },
    { href: "/about", label: "About" },
    { href: "/blog", label: "Blog", subItems: [
        { href: "/blog/ffxiv", label: "FF14" },
        { href: "/blog/web", label: "WEB" }, ], },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className={styles.mainMenu}>
        <ul className={styles.mainMenuList}>
            {menuItems.map((item) => (
                <MenuItem
                key={item.label}
                href={item.href}
                label={item.label}
                subItems={item.subItems}
                />
            ))}
        </ul>
    </nav>
  );
};

export default Menu;