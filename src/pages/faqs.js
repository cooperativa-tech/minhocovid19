import React from "react";

import content from "cms/pages/faqs.json";
import Layout from "root/components/Layout";
import Navbar from "root/components/Navbar";
import Faq from "root/components/Faq";

import styles from "./faqs.module.css";

export default function FaqsPage() {
  return (
    <Layout
      title={content.title}
      description={content.description}
      keywords={content.keywords}
    >
      <Navbar />

      <div className={styles.faqs}>
        {content.faqs.map((faq, index) => (
          <div className={styles.faq}>
            <Faq key={index} {...faq} />
          </div>
        ))}
      </div>
    </Layout>
  );
}
