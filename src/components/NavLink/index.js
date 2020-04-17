import React from "react";
import PropTypes from "prop-types";
import NextLink from "next/link";

import styles from "./index.module.css";

const NavLink = ({ href, children }) => (
  <NextLink href={href}>
    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
    <a className={styles.root}>
      {children}
      <span className={styles.underline} />
    </a>
  </NextLink>
);

NavLink.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default NavLink;
