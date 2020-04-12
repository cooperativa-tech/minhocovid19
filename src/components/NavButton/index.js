import React from "react";
import PropTypes from "prop-types";
import NextLink from "next/link";

import styles from "./index.module.css";

const NavButton = ({ href, children, onClick }) => {
  const className = `${styles.root} ${styles.text}`;

  if (href) {
    return (
      <NextLink href={href}>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a className={className}>{children}</a>
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
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
};

NavButton.defaultProps = {
  href: null,
  onClick: null,
};

export default NavButton;
