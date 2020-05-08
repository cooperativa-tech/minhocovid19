import React from "react";
import PropTypes from "prop-types";

import content from "cms/pages/transparency.json";
import Navbar from "root/components/Navbar";
import Layout from "root/components/Layout";
import getTransparencyReport from "root/lib/getTransparencyReport";
import Section from "root/components/Section";
import TextArea from "root/components/TextArea";
import Text from "root/components/Text";
import Title from "root/components/Title";
import Themes from "root/components/Themes";

import styles from "./transparency.module.css";

export default function HomePage({ transparencyReport }) {
  return (
    <Layout
      title={content.title}
      description={content.description}
      keywords={content.keywords}
    >
      <Navbar />

      <div className={styles.hero}>
        <Section theme={Themes.lightBlue}>
          <div className={styles.heroTitle}>
            <Title theme={Themes.blue}>{content.heroTitle}</Title>
          </div>

          <TextArea theme={Themes.greyishBlue}>{content.heroCopy}</TextArea>
        </Section>
      </div>

      <div className={styles.table}>
        <div className={styles.tableHeader}>
          <th className={styles.dateCol}>
            <Text theme={Themes.greyishBlue}>Data</Text>
          </th>
          <th className={styles.purposeCol}>
            <Text theme={Themes.greyishBlue}>Propósito</Text>
          </th>
          <th className={styles.valueCol}>
            <Text theme={Themes.greyishBlue}>Valor</Text>
          </th>
        </div>

        {transparencyReport.map((reportLine, index) => (
          <span key={index} className={styles.tableRow}>
            <div className={styles.dateCol}>
              <Text theme={Themes.blue}>{reportLine.date}</Text>
            </div>
            <div className={styles.purposeCol}>
              <Text theme={Themes.blue}>{reportLine.purpose}</Text>
            </div>
            <div className={styles.valueCol}>
              <Text theme={Themes.blue}>{reportLine.value}€</Text>
            </div>
          </span>
        ))}
      </div>
    </Layout>
  );
}

HomePage.propTypes = {
  transparencyReport: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export async function getStaticProps(_context) {
  return {
    props: {
      transparencyReport: await getTransparencyReport(),
    },
  };
}
