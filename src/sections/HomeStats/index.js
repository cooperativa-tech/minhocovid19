import React from "react";

import Link from "root/components/Link";
import Themes from "root/components/Themes";
import SmallTitle from "root/components/SmallTitle";
import Section from "root/components/Section";
import Stats from "root/components/Stats";
import Text from "root/components/Text";

import content from "cms/pages/index.json";

import styles from "./index.module.css";

function HomeStats() {
  return (
    <Section theme={Themes.lightBlue}>
      <SmallTitle theme={Themes.blue}>{content.statsTitle}</SmallTitle>

      <div className={styles.description}>
        <Text theme={Themes.greyishBlue}>{content.statsSubtitle}</Text>
      </div>

      <Stats list={content.stats} />

      <div className={styles.link}>
        <Link href="/transparency">{content.statsAction}</Link>
      </div>
    </Section>
  );
}

export default HomeStats;
