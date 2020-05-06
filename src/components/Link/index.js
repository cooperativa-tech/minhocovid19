import React from "react";
import PropTypes from "prop-types";
import NextLink from "next/link";

import SvgIncluder from "../SvgIncluder";

import styles from "./index.module.css";

const renderInnerAnchor = (icon, href, animate, children) => (
  <div className={`${styles.root} ${animate ? styles.animate : ""}`}>
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

const Link = ({ icon, href, animate, children, external }) =>
  external ? (
    renderInnerAnchor(icon, href, animate, children)
  ) : (
    <NextLink href={href}>
      {renderInnerAnchor(icon, href, animate, children)}
    </NextLink>
  );

Link.defaultProps = {
  icon: null,
  external: false,
  animate: true,
};

Link.propTypes = {
  icon: PropTypes.string,
  href: PropTypes.string.isRequired,
  animate: PropTypes.bool,
  children: PropTypes.node.isRequired,
  external: PropTypes.bool,
};

export default Link;
