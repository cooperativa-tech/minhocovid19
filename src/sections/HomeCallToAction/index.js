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
      <Section id="howtohelp" theme={Themes.lightRed}>
        <SmallTitle theme={Themes.sweetBrown}>{content.cta1Title}</SmallTitle>

        <div className={styles.description}>
          <TextArea theme={Themes.red}>{content.cta1Content}</TextArea>
        </div>

        <div className={styles.actions}>
          <Button
            href={content.cta1ActionMoneyLink}
            external
            theme={Themes.red}
          >
            {content.cta1ActionMoney}
          </Button>

          <Button
            href={content.cta1ActionMaterialLink}
            external
            theme={Themes.red}
          >
            {content.cta1ActionMaterial}
          </Button>
        </div>
      </Section>

      <div className={styles.needHelpSection}>
        <Section theme={Themes.linen}>
          <SmallTitle theme={Themes.neonCarrot}>{content.cta2Title}</SmallTitle>

          <div className={styles.description}>
            <TextArea theme={Themes.goldYellow}>{content.cta2Content}</TextArea>
          </div>

          <div className={styles.actions}>
            <Button href={content.cta2Link} external theme={Themes.neonCarrot}>
              {content.cta2Action}
            </Button>
          </div>
        </Section>
      </div>
    </div>
  );
}
