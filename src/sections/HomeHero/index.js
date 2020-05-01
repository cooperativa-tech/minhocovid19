import React from "react";

import heroSvg from "root/assets/hero.svg?include";
import heroMobileSvg from "root/assets/hero-mobile.svg?include";
import Themes from "root/components/Themes";
import Text from "root/components/Text";
import Title from "root/components/Title";
import SvgIncluder from "root/components/SvgIncluder";

import content from "cms/pages/index.json";

import styles from "./index.module.css";

export default function HomeHero() {
  return (
    <section className={styles.root}>
      <div className={styles.copy}>
        <Title variant="h1" theme={Themes.neonCarrot}>
          {content.heroTitle}
        </Title>

        <div className={styles.subtitle}>
          <Text theme={Themes.red}>{content.heroSubtitle}</Text>
        </div>
      </div>

      <div className={styles.foreground}>
        <SvgIncluder svg={heroSvg} />
      </div>

      <div className={styles.foregroundMobile}>
        <SvgIncluder svg={heroMobileSvg} />
      </div>
    </section>
  );
}
