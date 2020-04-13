import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import styles from "./index.module.css";

const BigText = ({ children, theme }) => {
  const colorThemes = classnames(styles[theme]);

  return <p className={colorThemes}>{children}</p>;
};

BigText.defaultProps = {
  theme: "redTheme",
};

BigText.propTypes = {
  children: PropTypes.node.isRequired,
  theme: PropTypes.oneOf(["redTheme", "neonCarrotTheme", "greyishBlueTheme"]),
};

export default BigText;
