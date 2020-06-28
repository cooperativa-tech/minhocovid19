import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import Themes from "../Themes";
import styles from "./index.module.css";

const Text = ({ children, theme, weight }) => {
  const className = classNames(styles.root, {
    [styles[theme]]: true,
    [styles[weight]]: true,
  });

  return <p className={className}>{children}</p>;
};

Text.propTypes = {
  children: PropTypes.node.isRequired,
  theme: PropTypes.oneOf([
    Themes.red,
    Themes.neonCarrot,
    Themes.goldYellow,
    Themes.greyishBlue,
    Themes.blue,
    Themes.mineshaft,
  ]).isRequired,
  weight: PropTypes.oneOf(["normal", "bold"]),
};

Text.defaultProps = {
  weight: "normal",
};

export default Text;
