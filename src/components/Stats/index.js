import React from "react";
import PropTypes from "prop-types";

import styles from "./index.module.css";

import Themes from "../Themes";
import Text from "../Text";

const renderItem = (item) => {
  const { label, value } = item;

  return (
    <li className={styles.item} key={label}>
      <Text theme={Themes.greyishBlue}>{label}</Text>
      <p className={styles.value}>{value}</p>
    </li>
  );
};

const Stats = ({ list }) => (
  <ul className={styles.root}>{list.map(renderItem)}</ul>
);

Stats.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.number,
    })
  ).isRequired,
};

export default Stats;
