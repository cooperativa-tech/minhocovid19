import React from "react";

import content from "cms/pages/index.json";
import SmallTitle from "root/components/SmallTitle";
import Text from "root/components/Text";
import Themes from "root/components/Themes";
import Section from "root/components/Section";

import styles from "./index.module.css";

export default function HomeInstitutions() {
  return (
    <Section theme={Themes.lightBlue}>
      <SmallTitle theme={Themes.blue}>{content.institutionsTitle}</SmallTitle>

      <div className={styles.subtitle}>
        <Text theme={Themes.greyishBlue}>{content.institutionsSubtitle}</Text>
      </div>

      <div>
        {content.institutionsList.map((institution, index) => (
          <div key={index} className={styles.institution}>
            <Text theme={Themes.greyishBlue}>{institution.name}</Text>
          </div>
        ))}
      </div>
    </Section>
  );
}
