import React from "react";

import content from "cms/pages/about.json";
import Navbar from "root/components/Navbar";
import Layout from "root/components/Layout";
import SmallTitle from "root/components/SmallTitle";
import Themes from "root/components/Themes";
import Title from "root/components/Title";
import MarkdownArea from "root/components/MarkdownArea";
import AboutNews from "root/sections/AboutNews";

import styles from "./about.module.css";

export default function AboutPage() {
  return (
    <Layout
      title={content.title}
      description={content.description}
      keywords={content.keywords}
    >
      <Navbar currentPage="/about" />

      <div className={styles.root}>
        <div className={styles.section1}>
          <div className={styles.section1Title}>
            <Title theme={Themes.neonCarrot}>{content.section1Title}</Title>
          </div>

          <MarkdownArea theme={Themes.goldYellow}>
            {content.section1Content}
          </MarkdownArea>
        </div>

        <div className={styles.section2}>
          <div className={styles.section2Title}>
            <SmallTitle theme={Themes.neonCarrot}>
              {content.section2Title}
            </SmallTitle>
          </div>

          <MarkdownArea theme={Themes.goldYellow}>
            {content.section2Content}
          </MarkdownArea>
        </div>
      </div>

      <div className={styles.news}>
        <AboutNews />
      </div>
    </Layout>
  );
}
