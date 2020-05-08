import React from "react";
import PropTypes from "prop-types";
import NextLink from "next/link";

import styles from "./index.module.css";

const NavButton = ({ href, external, children, onClick }) => {
  const className = `${styles.root} ${styles.text}`;

  if (href && external) {
    return (
      <a className={className} href={href}>
        {children}
      </a>
    );
  }

  if (href) {
    return (
      <NextLink href={href}>
        <a className={className} href={href}>
          {children}
        </a>
      </NextLink>
    );
  }

  return (
    <button type="button" onClick={onClick} className={className}>
      {children}
    </button>
  );
};

NavButton.propTypes = {
  href: PropTypes.string,
  external: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
};

NavButton.defaultProps = {
  href: null,
  external: false,
  onClick: null,
};

export default NavButton;
