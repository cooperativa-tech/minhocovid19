import React from "react";
import PropTypes from "prop-types";

import styles from "./index.module.css";

const Section = ({ children, theme }) => (
  <section className={`${styles.root} ${styles[theme]}`}>{children}</section>
);

Section.propTypes = {
  theme: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Section;
