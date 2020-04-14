import React from "react";
import PropTypes from "prop-types";

import Themes from "../Themes";
import styles from "./index.module.css";

const Subtitle = ({ children, theme }) => {
  return <h2 className={`${styles.root} ${styles[theme]}`}>{children}</h2>;
};

Subtitle.propTypes = {
  children: PropTypes.node.isRequired,
  theme: PropTypes.oneOf([Themes.red, Themes.neonCarrot, Themes.greyishBlue])
    .isRequired,
};

export default Subtitle;
