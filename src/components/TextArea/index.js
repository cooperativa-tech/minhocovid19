import React from "react";
import PropTypes from "prop-types";

import styles from "./index.module.css";
import Text from "../Text";

const TextArea = ({ children, theme }) => {
  const lines = (children || "").split(/\n/).filter((line) => {
    const trimmedLine = line.trim();

    return trimmedLine && trimmedLine !== "";
  });

  return (
    <div className={styles.root}>
      {lines.map((line, index) => (
        <Text key={index} theme={theme}>
          {line}
        </Text>
      ))}
    </div>
  );
};

TextArea.propTypes = {
  children: PropTypes.node.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  theme: PropTypes.any.isRequired,
};

export default TextArea;
