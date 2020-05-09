import React from "react";
import PropTypes from "prop-types";
import ReactMarkdown from "react-markdown";

import Link from "../Link";
import Text from "../Text";
import Themes from "../Themes";

import styles from "./index.module.css";

/* eslint-disable react/prop-types */
function generateRenderers(theme) {
  return {
    paragraph: ({ children }) => <Text theme={theme}>{children}</Text>,
    text: ({ children }) => children,
    link: ({ href, children }) => (
      <Link href={href} external animate={false}>
        {children}
      </Link>
    ),
    emphasize: ({ children }) => (
      <Text theme={theme} weight="bold">
        {children}
      </Text>
    ),
  };
}
/* eslint-enable react/prop-types */

function MarkdownArea({ children, theme }) {
  const renderers = generateRenderers(theme);

  return (
    <ReactMarkdown
      className={styles.root}
      source={children}
      allowedTypes={["emphasis", "strong", "paragraph", "link", "text"]}
      renderers={renderers}
    />
  );
}

MarkdownArea.propTypes = {
  children: PropTypes.node.isRequired,
  theme: PropTypes.oneOf([
    Themes.red,
    Themes.neonCarrot,
    Themes.goldYellow,
    Themes.greyishBlue,
    Themes.blue,
  ]).isRequired,
};

export default MarkdownArea;
