import React from "react";

import Logo from "root/components/Logo";
import NavLink from "root/components/NavLink";
import NavButton from "root/components/NavButton";

import content from "cms/components/navbar.json";

import styles from "./index.module.css";

const Navbar = () => {
  return (
    <nav className={styles.root}>
      <div className={styles.logo}>
        <Logo />
      </div>

      <ul className={styles.links}>
        <li className={styles.link}>
          <NavLink href="/">{content.about}</NavLink>
        </li>
        <li className={styles.link}>
          <NavLink href="/faqs">{content.faq}</NavLink>
        </li>
        <li className={styles.link}>
          <NavLink href="/transparency">{content.transparency}</NavLink>
        </li>
        <li className={styles.link}>
          <NavButton href="/">{content.cta}</NavButton>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
