import React from "react";
import Section from "root/components/Section";
import Title from "root/components/Title";
import BigText from "root/components/BigText";
import Themes from "root/components/Themes";
import Button from "root/components/Button";

import content from "cms/pages/index.json";

import styles from "./index.module.css";

export default function HomeCallToAction() {
  return (
    <div className={styles.root}>
      <Section theme={Themes.lightRed}>
        <Title theme={Themes.sweetBrown}>{content.cta1Title}</Title>

        <div className={styles.description}>
          <BigText>{content.cta1Subtitle}</BigText>
        </div>

        <Button theme={Themes.red}>{content.cta1Action}</Button>
      </Section>

      <div className={styles.needHelpSection}>
        <Section theme={Themes.linen}>
          <Title theme={Themes.neonCarrot}>{content.cta2Title}</Title>

          <div className={styles.description}>
            <BigText theme={Themes.goldYellow}>{content.cta2Subtitle}</BigText>
          </div>

          <Button theme={Themes.neonCarrot}>{content.cta2Action}</Button>
        </Section>
      </div>
    </div>
  );
}
