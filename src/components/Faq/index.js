import React, { useState, useMemo } from "react";
import PropTypes from "prop-types";
import { motion, AnimatePresence } from "framer-motion";
import uniqueId from "lodash.uniqueid";

import arrow from "root/assets/arrow.svg?include";
import NoScript from "../NoScript";
import SmallTitle from "../SmallTitle";
import SvgIncluder from "../SvgIncluder";
import Themes from "../Themes";
import WithScript from "../WithScript";

import styles from "./index.module.css";
import MarkdownArea from "../MarkdownArea";

function Faq({ title, content }) {
  const contentId = useMemo(() => uniqueId(), []);
  const [open, setOpen] = useState(false);

  function toggleOpen() {
    setOpen(!open);
  }

  return (
    <motion.div className={styles.root} layout>
      <motion.div
        className={styles.header}
        onClick={toggleOpen}
        role="presentation"
        layout
      >
        <SmallTitle theme={Themes.goldYellow}>{title}</SmallTitle>

        <WithScript>
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
        </WithScript>
      </motion.div>

      <WithScript>
        <div id={contentId} className={styles.content}>
          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                layout
              >
                <MarkdownArea theme={Themes.goldYellow}>{content}</MarkdownArea>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </WithScript>

      <NoScript>
        <div className={styles.content}>
          <MarkdownArea theme={Themes.goldYellow}>{content}</MarkdownArea>
        </div>
      </NoScript>
    </motion.div>
  );
}

Faq.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default Faq;
