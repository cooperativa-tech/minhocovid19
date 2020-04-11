import React from "react";
import PropTypes from "prop-types";

import styles from "./index.module.css"

const THEMES_VALUES = [
  styles.redTheme,
  styles.neonCarrotTheme,
]

export const THEMES = {
  RED: THEMES_VALUES[0],
  NEON_CARROT: THEMES_VALUES[1]
}

const Button = ({ theme, href, children, onClick }) => {
  const className = `${styles.root} ${theme}`;

  if (href) {
    return (
      <a className={className} href={href}>{children}</a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={className}>
      {children}
    </button>
  );
}

Button.propTypes = {
  href: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  theme: PropTypes.oneOf(THEMES_VALUES).isRequired,
}

Button.defaultProps = {
  href: null,
  onClick: null
}

export default Button;
