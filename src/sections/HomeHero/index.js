import React from "react";

import Title, { THEMES as TITLE_THEMES } from "root/components/Title";
import Subtitle, { THEMES as SUBTITLE_THEMES } from "root/components/Subtitle";

import HeroSvg from "root/assets/hero.svg?sprite";

import styles from "./index.module.css";

export default function HomeHero() {
  return (
    <section className={styles.root}>
      <div className={styles.copy}>
        <Title variant="h1" theme={TITLE_THEMES.NEON_CARROT}>
          Juntos paramos o Covid19
        </Title>

        <div className={styles.subtitle}>
          <Subtitle theme={SUBTITLE_THEMES.RED}>
            Ligamos quem precisa de ajuda a quem pode ajudar
          </Subtitle>
        </div>
      </div>

      <div className={styles.foreground}>
        <HeroSvg />
      </div>
    </section>
  );
}