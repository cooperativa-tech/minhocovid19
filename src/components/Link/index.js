import React from "react";
import PropTypes from "prop-types";
import NextLink from "next/link";

import styles from "./index.module.css";

const renderInnerAnchor = (href, children) => (
  <a href={href} className={styles.root}>
    {children}
    <span className={styles.underline} />
  </a>
);

const Link = ({ href, children, external }) =>
  external ? (
    renderInnerAnchor(href, children)
  ) : (
    <NextLink href={href}>{renderInnerAnchor(href, children)}</NextLink>
  );

Link.defaultProps = {
  external: false,
};

Link.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  external: PropTypes.bool,
};

export default Link;
