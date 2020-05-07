import React, { useState, useMemo } from "react";
import PropTypes from "prop-types";
import ReactMarkdown from "react-markdown";
import uniqueId from "lodash.uniqueid";

import arrow from "root/assets/arrow.svg?include";
import Link from "../Link";
import SmallTitle from "../SmallTitle";
import SvgIncluder from "../SvgIncluder";
import Text from "../Text";
import Themes from "../Themes";

import styles from "./index.module.css";

/* eslint-disable react/prop-types */
const RENDERERS = {
  paragraph: ({ children }) => (
    <Text theme={Themes.goldYellow}>{children}</Text>
  ),
  text: ({ children }) => children,
  link: ({ href, children }) => (
    <Link href={href} external animate={false}>
      {children}
    </Link>
  ),
};
/* eslint-enable react/prop-types */

function Faq({ title, content }) {
  const contentId = useMemo(() => uniqueId(), []);
  const [open, setOpen] = useState(false);

  function toggleOpen() {
    setOpen(!open);
  }

  return (
    <div className={styles.root}>
      <div className={styles.header}>
        <SmallTitle theme={Themes.goldYellow}>{title}</SmallTitle>

        <button
          className={`${styles.toggle} ${open ? styles.open : ""}`}
          type="button"
          onClick={toggleOpen}
          aria-label="Expand"
          aria-expanded={open}
          aria-controls={contentId}
        >
          <SvgIncluder svg={arrow} />
        </button>
      </div>

      <div
        id={contentId}
        className={`${styles.content} ${open ? "" : styles.hidden}`}
      >
        <ReactMarkdown
          source={content}
          allowedTypes={["emphasis", "strong", "paragraph", "link", "text"]}
          renderers={RENDERERS}
        />
      </div>
    </div>
  );
}

Faq.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default Faq;
