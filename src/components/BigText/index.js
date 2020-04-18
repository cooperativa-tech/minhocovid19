import React from "react";
import PropTypes from "prop-types";

import Themes from "../Themes";
import styles from "./index.module.css";

const BigText = ({ children, theme }) => {
  return <p className={`${styles.root} ${styles[theme]}`}>{children}</p>;
};

BigText.defaultProps = {
  theme: Themes.red,
};

BigText.propTypes = {
  children: PropTypes.node.isRequired,
  theme: PropTypes.oneOf([
    Themes.red,
    Themes.neonCarrot,
    Themes.greyishBlue,
    Themes.goldYellow,
  ]),
};

export default BigText;
