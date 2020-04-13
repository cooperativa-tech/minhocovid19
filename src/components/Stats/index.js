import React from "react";
import PropTypes from "prop-types";

import styles from "./index.module.css";

// eslint-disable-next-line react/prop-types
const render = ({ label, value }) => (
  <li className={styles.item}>
    <p className={styles.label}>{label}</p>
    <p className={styles.value}>{value}</p>
  </li>
);

const Stats = ({ list }) => <ul className={styles.root}>{list.map(render)}</ul>;

Stats.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.number,
    })
  ).isRequired,
};

export default Stats;
