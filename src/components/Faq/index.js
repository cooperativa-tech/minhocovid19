import React, { useState, useMemo } from "react";
import PropTypes from "prop-types";
import uniqueId from "lodash.uniqueid";

import arrow from "root/assets/arrow.svg?include";
import NoScript from "../NoScript";
import SmallTitle from "../SmallTitle";
import SvgIncluder from "../SvgIncluder";
import Themes from "../Themes";
import WithScript from "../WithScript";
import MarkdownArea from "../MarkdownArea";

import styles from "./index.module.css";

function Faq({ title, content }) {
  const contentId = useMemo(() => uniqueId(), []);
  const [open, setOpen] = useState(false);

  function toggleOpen() {
    setOpen(!open);
  }

  return (
    <div className={styles.root}>
      <div className={styles.header} onClick={toggleOpen} role="presentation">
        <SmallTitle theme={Themes.goldYellow}>{title}</SmallTitle>

        <WithScript>
          <button
            className={`${styles.toggle} ${open ? styles.open : ""}`}
            type="button"
            aria-label="Expand"
            aria-expanded={open}
            aria-controls={contentId}
          >
            <SvgIncluder svg={arrow} />
          </button>
        </WithScript>
      </div>

      <WithScript>
        <div id={contentId} hidden={!open} className={styles.content}>
          <MarkdownArea theme={Themes.goldYellow}>{content}</MarkdownArea>
        </div>
      </WithScript>

      <NoScript>
        <div className={styles.content}>
          <MarkdownArea theme={Themes.goldYellow}>{content}</MarkdownArea>
        </div>
      </NoScript>
    </div>
  );
}

Faq.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default Faq;
