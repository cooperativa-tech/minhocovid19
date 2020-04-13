import React from "react";
import PropTypes from "prop-types";
import NextLink from "next/link";

import styles from "./index.module.css";

const Link = ({ href, children }) => (
  <NextLink href={href}>
    {/* eslint-disable-next-line */}
    <a className={styles.root}>
      {children}
      <span className={styles.underline} />
    </a>
  </NextLink>
);

Link.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Link;
