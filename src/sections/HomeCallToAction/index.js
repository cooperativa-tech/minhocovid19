import React from "react";
import Section from "root/components/Section";
import SmallTitle from "root/components/SmallTitle";
import Text from "root/components/Text";
import Themes from "root/components/Themes";
import Button from "root/components/Button";

import content from "cms/pages/index.json";

import styles from "./index.module.css";

export default function HomeCallToAction() {
  return (
    <div className={styles.root}>
      <Section theme={Themes.lightRed}>
        <SmallTitle theme={Themes.sweetBrown}>{content.cta1Title}</SmallTitle>

        <div className={styles.description}>
          <Text theme={Themes.red}>{content.cta1Subtitle}</Text>
        </div>

        <Button theme={Themes.red}>{content.cta1Action}</Button>
      </Section>

      <div className={styles.needHelpSection}>
        <Section theme={Themes.linen}>
          <SmallTitle theme={Themes.neonCarrot}>{content.cta2Title}</SmallTitle>

          <div className={styles.description}>
            <Text theme={Themes.goldYellow}>{content.cta2Subtitle}</Text>
          </div>

          <Button theme={Themes.neonCarrot}>{content.cta2Action}</Button>
        </Section>
      </div>
    </div>
  );
}
