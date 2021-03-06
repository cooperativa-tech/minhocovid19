import React from "react";
import PropTypes from "prop-types";

import Themes from "../Themes";
import styles from "./index.module.css";

const SmallTitle = ({ children, theme, variant }) => {
  const Element = variant;

  return (
    <Element className={`${styles.root} ${styles[theme]}`}>{children}</Element>
  );
};

SmallTitle.defaultProps = {
  variant: "h2",
};

SmallTitle.propTypes = {
  children: PropTypes.node.isRequired,
  theme: PropTypes.oneOf([
    Themes.blue,
    Themes.neonCarrot,
    Themes.goldYellow,
    Themes.greyishBlue,
    Themes.red,
    Themes.sweetBrown,
  ]).isRequired,
  variant: PropTypes.string,
};

export default SmallTitle;
