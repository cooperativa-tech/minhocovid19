import React from "react";

import heroSvg from "root/assets/hero.svg?include";
import Themes from "root/components/Themes";
import Title from "root/components/Title";
import Subtitle from "root/components/Subtitle";
import SvgIncluder from "root/components/SvgIncluder";

import styles from "./index.module.css";

export default function HomeHero() {
  return (
    <section className={styles.root}>
      <div className={styles.copy}>
        <Title variant="h1" theme={Themes.neonCarrot}>
          Juntos paramos o Covid19
        </Title>

        <div className={styles.subtitle}>
          <Subtitle theme={Themes.red}>
            Ligamos quem precisa de ajuda a quem pode ajudar
          </Subtitle>
        </div>
      </div>

      <div className={styles.foreground}>
        <SvgIncluder svg={heroSvg} />
      </div>
    </section>
  );
}
