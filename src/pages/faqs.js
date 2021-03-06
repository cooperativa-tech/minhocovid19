import React from "react";

import content from "cms/pages/faqs.json";
import Layout from "root/components/Layout";
import Navbar from "root/components/Navbar";
import Faq from "root/components/Faq";
import Section from "root/components/Section";
import Title from "root/components/Title";
import Themes from "root/components/Themes";
import TextArea from "root/components/TextArea";

import styles from "./faqs.module.css";

export default function FaqsPage() {
  return (
    <Layout
      title={content.title}
      description={content.description}
      keywords={content.keywords}
    >
      <Navbar currentPage="/faqs" />

      <div className={styles.hero}>
        <Section theme={Themes.linen}>
          <div className={styles.heroTitle}>
            <Title theme={Themes.neonCarrot}>{content.heroTitle}</Title>
          </div>

          <TextArea theme={Themes.goldYellow}>{content.heroContent}</TextArea>
        </Section>
      </div>

      <div className={styles.faqs}>
        {content.faqs.map((faq, index) => (
          <div key={index} className={styles.faq}>
            <Faq {...faq} />
          </div>
        ))}
      </div>
    </Layout>
  );
}
