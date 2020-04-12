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

const Subtitle = ({ children, theme }) => {
  const className = classnames(styles.root, theme);

  return <h2 className={className}>{children}</h2>;
};

Subtitle.propTypes = {
  children: PropTypes.node.isRequired,
  theme: PropTypes.oneOf(THEMES_VALUES).isRequired,
};

export default Subtitle;
