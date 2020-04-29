import React from "react";

import heroSvg from "root/assets/hero.svg?include";
import Themes from "root/components/Themes";
import Title from "root/components/Title";
import Subtitle from "root/components/Subtitle";
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
          <Subtitle theme={Themes.red}>{content.heroSubtitle}</Subtitle>
        </div>
      </div>

      <div className={styles.foreground}>
        <SvgIncluder svg={heroSvg} />
      </div>
    </section>
  );
}
