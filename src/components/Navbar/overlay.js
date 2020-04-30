import React from "react";
import Proptypes from "prop-types";

import closeSvg from "root/assets/close.svg?include";
import Themes from "root/components/Themes";
import Button from "root/components/Button";
import SvgIncluder from "root/components/SvgIncluder";
import content from "cms/components/navbar.json";

import styles from "./overlay.module.css";

const Overlay = ({ isOpen, onClose }) => (
  <div className={`${styles.root} ${isOpen ? styles.isOpen : ""}`}>
    <button type="button" className={styles.close} onClick={onClose}>
      <SvgIncluder svg={closeSvg} />
    </button>

    <div className={styles.content}>
      <ul className={styles.links}>
        <a className={styles.link} href="/">
          {content.about}
        </a>

        <a className={styles.link} href="/faqs">
          {content.faq}
        </a>

        <a className={styles.link} href="/transparency">
          {content.transparency}
        </a>
      </ul>
      <div className={styles.contacts}>
        <p className={styles.label}>Contacte-nos</p>
        <a className={styles.contact} href="mailto:minhocovid@aaum.pt">
          minhocovid@aaum.pt
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

    <Button theme={Themes.white} href="/">
      Quero ajudar
    </Button>
  </div>
);

Overlay.propTypes = {
  isOpen: Proptypes.bool.isRequired,
  onClose: Proptypes.func.isRequired,
};

export default Overlay;