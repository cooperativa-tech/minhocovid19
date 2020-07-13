import React from "react";
import PropTypes from "prop-types";
import ReactMarkdown from "react-markdown";

import Link from "../Link";
import Text from "../Text";
import Themes from "../Themes";

import styles from "./index.module.css";
import Title from "../Title";
import SmallTitle from "../SmallTitle";

/* eslint-disable react/prop-types */
function generateRenderers(theme, headingsTheme) {
  return {
    paragraph: ({ children }) => <Text theme={theme}>{children}</Text>,
    text: ({ children }) => children,
    listItem: ({ children }) => (
      <li>
        <Text theme={theme}>{children}</Text>
      </li>
    ),
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
    heading: ({ children, level }) => {
      switch (level) {
        case 1:
          return <Title theme={headingsTheme || theme}>{children}</Title>;
        default:
          return (
            <SmallTitle theme={headingsTheme || theme} variant={`h${level}`}>
              {children}
            </SmallTitle>
          );
      }
    },
  };
}
/* eslint-enable react/prop-types */

function MarkdownArea({ children, theme, headingsTheme }) {
  const renderers = generateRenderers(theme, headingsTheme);

  return (
    <ReactMarkdown
      className={`${styles.root} ${styles[theme]}`}
      source={children}
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
  headingsTheme: PropTypes.oneOf([
    Themes.red,
    Themes.neonCarrot,
    Themes.goldYellow,
    Themes.greyishBlue,
    Themes.blue,
  ]),
};

MarkdownArea.defaultProps = {
  headingsTheme: null,
};

export default MarkdownArea;
