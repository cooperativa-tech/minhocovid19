import React from "react";
import PropTypes from "prop-types";

import Themes from "../Themes";
import styles from "./index.module.css";

const Section = ({ children, theme }) => (
  <section className={`${styles.root} ${theme ? styles[theme] : ""}`}>
    {children}
  </section>
);

Section.propTypes = {
  theme: PropTypes.oneOf([Themes.lightBlue, Themes.lightRed, Themes.linen]),
  children: PropTypes.node.isRequired,
};

Section.defaultProps = {
  theme: null,
};

export default Section;
