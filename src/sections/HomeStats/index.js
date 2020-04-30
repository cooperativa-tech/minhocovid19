import React from "react";
import PropTypes from "prop-types";

import Link from "root/components/Link";
import Themes from "root/components/Themes";
import SmallTitle from "root/components/SmallTitle";
import Section from "root/components/Section";
import Stats from "root/components/Stats";
import Text from "root/components/Text";

import content from "cms/pages/index.json";

import styles from "./index.module.css";

function HomeStats({ deliveredMaterial }) {
  return (
    <Section theme={Themes.lightBlue}>
      <SmallTitle theme={Themes.blue}>{content.statsTitle}</SmallTitle>

      <div className={styles.description}>
        <Text theme={Themes.greyishBlue}>{content.statsSubtitle}</Text>
      </div>

      <Stats
        list={[{ label: "Material entregue", value: deliveredMaterial }]}
      />

      <div className={styles.link}>
        <Link href="/">{content.statsAction}</Link>
      </div>
    </Section>
  );
}

HomeStats.propTypes = {
  deliveredMaterial: PropTypes.number.isRequired,
};

export default HomeStats;
