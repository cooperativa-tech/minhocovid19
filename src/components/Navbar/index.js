import React from "react";

import Logo from "root/components/Logo";
import NavLink from "root/components/NavLink";
import NavButton from "root/components/NavButton";

import styles from "./index.module.css";

const Navbar = () => {
  return (
    <header className={styles.root}>
      <div className={styles.logo}>
        <Logo />
      </div>
      <nav className={styles.nav}>
        <div className={styles.link}>
          <NavLink href="/">Sobre Nós</NavLink>
        </div>
        <div className={styles.link}>
          <NavLink href="/">Perguntas Frequentes</NavLink>
        </div>
        <div className={styles.link}>
          <NavLink href="/">Relatório de Transparência</NavLink>
        </div>
        <div className={styles.link}>
          <NavButton href="/">Quero ajudar</NavButton>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
