import React from "react";
import PropTypes from "prop-types";
import NextLink from "next/link";
import classNames from "classnames";

import styles from "./index.module.css";

const NavLink = ({ href, children, selected }) => {
  const className = classNames(styles.root, {
    [styles.selected]: selected,
  });

  return (
    <NextLink href={href}>
      <a className={className} href={href}>
        {children}
        {selected && <span className={styles.circle} />}
      </a>
    </NextLink>
  );
};

NavLink.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  selected: PropTypes.bool,
};

NavLink.defaultProps = {
  selected: false,
};

export default NavLink;
