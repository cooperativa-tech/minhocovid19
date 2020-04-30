import React from "react";
import PropTypes from "prop-types";
import NextLink from "next/link";

import SvgIncluder from "../SvgIncluder";

import styles from "./index.module.css";

const renderInnerAnchor = (icon, href, children) => (
  <div className={styles.root}>
    {icon && (
      <span className={styles.icon}>
        <SvgIncluder svg={icon} width="100%" height="100%" />
      </span>
    )}
    <a href={href} className={styles.anchor}>
      {children}
    </a>
    <span className={styles.underline} />
  </div>
);

const Link = ({ icon, href, children, external }) =>
  external ? (
    renderInnerAnchor(icon, href, children)
  ) : (
    <NextLink href={href}>{renderInnerAnchor(icon, href, children)}</NextLink>
  );

Link.defaultProps = {
  icon: null,
  external: false,
};

Link.propTypes = {
  icon: PropTypes.string,
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  external: PropTypes.bool,
};

export default Link;
