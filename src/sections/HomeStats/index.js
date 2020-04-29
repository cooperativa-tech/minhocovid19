import React from "react";
import PropTypes from "prop-types";

import BigText from "root/components/BigText";
import Link from "root/components/Link";
import Themes from "root/components/Themes";
import Title from "root/components/Title";
import Section from "root/components/Section";
import Stats from "root/components/Stats";

import content from "cms/pages/index.json";

import styles from "./index.module.css";

function HomeStats({ deliveredMaterial }) {
  return (
    <Section theme={Themes.lightBlue}>
      <Title theme={Themes.blue}>{content.statsTitle}</Title>

      <div className={styles.description}>
        <BigText theme={Themes.greyishBlue}>{content.statsSubtitle}</BigText>
      </div>

      <Stats
        list={[{ label: "Material entregue", value: deliveredMaterial }]}
      />

      <div className={styles.link}>
        <Link href="https://airtable.com/shrSo1Hv4Xhl8F0Un" external>
          {content.statsAction}
        </Link>
      </div>
    </Section>
  );
}

HomeStats.propTypes = {
  deliveredMaterial: PropTypes.number.isRequired,
};

export default HomeStats;
