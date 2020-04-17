import React from "react";

import Logo from "root/components/Logo";
import NavLink from "root/components/NavLink";
import NavButton from "root/components/NavButton";

import styles from "./index.module.css";

const Navbar = () => {
  return (
    <div className={styles.root}>
      <div className={styles.logo}>
        <Logo />
      </div>
      <nav className={styles.nav}>
        <ul>
          <li className={styles.link}>
            <NavLink href="/">Sobre Nós</NavLink>
          </li>
          <li className={styles.link}>
            <NavLink href="/">Perguntas Frequentes</NavLink>
          </li>
          <li className={styles.link}>
            <NavLink href="/">Relatório de Transparência</NavLink>
          </li>
          <li className={styles.link}>
            <NavButton href="/">Quero ajudar</NavButton>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;