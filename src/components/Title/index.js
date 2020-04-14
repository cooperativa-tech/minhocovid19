import React from "react";
import PropTypes from "prop-types";

import Themes from "../Themes";
import styles from "./index.module.css";

const Title = ({ children, theme, variant }) => {
  const Element = variant;

  return (
    <Element className={`${styles.root} ${styles[theme]}`}>{children}</Element>
  );
};

Title.defaultProps = {
  variant: "h2",
};

Title.propTypes = {
  children: PropTypes.node.isRequired,
  theme: PropTypes.oneOf([Themes.red, Themes.neonCarrot, Themes.greyishBlue])
    .isRequired,
  variant: PropTypes.string,
};

export default Title;
