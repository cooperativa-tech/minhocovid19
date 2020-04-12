import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import styles from "./index.module.css";

const THEMES_VALUES = [
  styles.redTheme,
  styles.neonCarrotTheme,
  styles.greyishBlueTheme,
];

export const THEMES = {
  RED: THEMES_VALUES[0],
  NEON_CARROT: THEMES_VALUES[1],
  GREISH_BLUE: THEMES_VALUES[2],
};

const Title = ({ children, theme, variant }) => {
  const className = classnames(styles.root, theme);
  const Element = variant;

  return <Element className={className}>{children}</Element>;
};

Title.defaultProps = {
  variant: "h2",
};

Title.propTypes = {
  children: PropTypes.node.isRequired,
  theme: PropTypes.oneOf(THEMES_VALUES).isRequired,
  variant: PropTypes.string,
};

export default Title;
