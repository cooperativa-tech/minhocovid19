import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Link from "next/link";

import closeSvg from "root/assets/close.svg?include";
import Themes from "root/components/Themes";
import Button from "root/components/Button";
import SvgIncluder from "root/components/SvgIncluder";
import content from "cms/components/navbar.json";

import styles from "./overlay.module.css";
import { navLinks } from "./navLinks";

const renderLink = (navLink, currentPage) => {
  const className = classNames(styles.link, {
    [styles.selected]: currentPage === navLink.href,
  });

  return (
    <li className={styles.link} key={navLink.key}>
      <Link href={navLink.href}>
        <a className={className} href={navLink.href}>
          {navLink.label}
        </a>
      </Link>
    </li>
  );
};

const Overlay = ({ isOpen, onClose, currentPage }) => (
  <div className={`${styles.root} ${isOpen ? styles.isOpen : ""}`}>
    <button type="button" className={styles.close} onClick={onClose}>
      <SvgIncluder svg={closeSvg} />
    </button>

    <div className={styles.content}>
      <ul className={styles.links}>
        {navLinks.map((navLink) => renderLink(navLink, currentPage))}
      </ul>
      <div className={styles.contacts}>
        <p className={styles.label}>Contacte-nos</p>
        <a className={styles.contact} href="mailto:minhocovid19@aaum.pt">
          minhocovid19@aaum.pt
        </a>
        <div className={styles.phone}>
          <a className={styles.contact} href="tel:914553932">
            914 553 932
          </a>
          <a className={styles.contact} href="tel:934453980">
            934 453 980
          </a>
        </div>
      </div>
    </div>

    <Button theme={Themes.white} href="/#howtohelp" onClick={onClose}>
      {content.cta}
    </Button>
  </div>
);

Overlay.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  currentPage: PropTypes.string.isRequired,
};

export default Overlay;
