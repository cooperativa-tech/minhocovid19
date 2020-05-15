import React, { useRef, useEffect, useState } from "react";
import PropTypes from "prop-types";

import openSvg from "root/assets/open.svg?include";
import Logo from "root/components/Logo";
import NavLink from "root/components/NavLink";
import NavButton from "root/components/NavButton";
import SvgIncluder from "root/components/SvgIncluder";
import content from "cms/components/navbar.json";
import { navLinksWithoutHome } from "./navLinks";
import Overlay from "./overlay";

import styles from "./index.module.css";

const options = {
  rootMargin: "148px",
  threshold: [0, 1.0],
};

const Navbar = ({ home, currentPage }) => {
  const [fixed, setFixed] = useState(false);
  const [isOpen, setOpen] = useState(false);
  const observer = useRef(null);
  const navbar = useRef(null);

  useEffect(() => {
    if (!navbar || !navbar.current) return;

    if (observer && observer.current) return;

    observer.current = new IntersectionObserver((entries) => {
      const intersecting = entries[0].isIntersecting;

      setFixed(!intersecting);
    }, options);

    observer.current.observe(navbar.current);
  });

  const className = `${styles.root} ${fixed ? styles.isFixed : ""}`;

  return (
    <nav ref={navbar} className={className}>
      <Overlay
        isOpen={isOpen}
        onClose={() => setOpen(false)}
        currentPage={currentPage}
      />
      <div className={styles.content}>
        {!isOpen && (
          <button
            type="button"
            className={styles.open}
            onClick={() => setOpen(true)}
          >
            <SvgIncluder svg={openSvg} />
          </button>
        )}

        <div className={`${styles.logo} ${home ? styles.home : ""}`}>
          <Logo width="auto" title={home ? !fixed : false} />
        </div>

        <ul className={styles.links}>
          {navLinksWithoutHome.map((navLink) => (
            <li className={styles.link} key={navLink.key}>
              <NavLink
                href={navLink.href}
                selected={currentPage === navLink.href}
              >
                {navLink.label}
              </NavLink>
            </li>
          ))}

          <li className={styles.link}>
            <NavButton href="/#howtohelp">{content.cta}</NavButton>
          </li>
        </ul>
      </div>
    </nav>
  );
};

Navbar.defaultProps = {
  home: false,
};

Navbar.propTypes = {
  home: PropTypes.bool,
  currentPage: PropTypes.string.isRequired,
};

export default Navbar;
