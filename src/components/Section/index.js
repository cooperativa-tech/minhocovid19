import React from "react";
import PropTypes from "prop-types";

import Themes from "../Themes";
import styles from "./index.module.css";

const Section = ({ children, theme, id }) => (
  <section id={id} className={`${styles.root} ${theme ? styles[theme] : ""}`}>
    {children}
  </section>
);

Section.propTypes = {
  id: PropTypes.string,
  theme: PropTypes.oneOf([Themes.lightBlue, Themes.lightRed, Themes.linen]),
  children: PropTypes.node.isRequired,
};

Section.defaultProps = {
  id: null,
  theme: null,
};

export default Section;
