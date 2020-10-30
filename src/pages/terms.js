import React from "react";

import content from "cms/pages/terms.json";
import MarkdownArea from "root/components/MarkdownArea";
import Themes from "root/components/Themes";
import Layout from "root/components/Layout";
import Navbar from "root/components/Navbar";

import styles from "./terms.module.css";

export default function TermsPage() {
  return (
    <Layout
      title={content.title}
      description={content.description}
      keywords={content.keywords}
    >
      <Navbar currentPage="/terms" />

      <div className={styles.root}>
        <MarkdownArea
          theme={Themes.goldYellow}
          headingsTheme={Themes.neonCarrot}
        >
          {content.text}
        </MarkdownArea>
      </div>
    </Layout>
  );
}
