import React from "react";
import PropTypes from "prop-types";

import Themes from "../Themes";
import styles from "./index.module.css";

const Text = ({ children, theme }) => {
  return <p className={`${styles.root} ${styles[theme]}`}>{children}</p>;
};

Text.propTypes = {
  children: PropTypes.node.isRequired,
  theme: PropTypes.oneOf([Themes.red, Themes.neonCarrot, Themes.greyishBlue])
    .isRequired,
};

export default Text;
