import React from "react";
import Section from "root/components/Section";
import SmallTitle from "root/components/SmallTitle";
import TextArea from "root/components/TextArea";
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
          <TextArea theme={Themes.red}>{content.cta1Content}</TextArea>
        </div>

        <Button theme={Themes.red}>{content.cta1Action}</Button>
      </Section>

      <div className={styles.needHelpSection}>
        <Section theme={Themes.linen}>
          <SmallTitle theme={Themes.neonCarrot}>{content.cta2Title}</SmallTitle>

          <div className={styles.description}>
            <TextArea theme={Themes.goldYellow}>
              {content.cta2Content}
            </TextArea>
          </div>

          <Button theme={Themes.neonCarrot}>{content.cta2Action}</Button>
        </Section>
      </div>
    </div>
  );
}
