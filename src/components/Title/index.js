import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import styles from "./index.module.css";

const Title = ({ children, theme, variant }) => {
  const colorThemes = classnames(styles[theme]);
  const Element = variant;

  return <Element className={colorThemes}>{children}</Element>;
};

Title.defaultProps = {
  theme: "redTheme",
  variant: "h1",
};

Title.propTypes = {
  children: PropTypes.node.isRequired,
  theme: PropTypes.oneOf(["redTheme", "neonCarrotTheme", "greyishBlueTheme"]),
  variant: PropTypes.string,
};

export default Title;
