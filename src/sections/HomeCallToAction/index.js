import React from "react";
import Section from "root/components/Section";
import Title from "root/components/Title";
import BigText from "root/components/BigText";
import Themes from "root/components/Themes";
import Button from "root/components/Button";

import styles from "./index.module.css";

export default function HomeCallToAction() {
  return (
    <div className={styles.root}>
      <Section theme={Themes.lightRed}>
        <Title theme={Themes.sweetBrown}>Como posso ajudar?</Title>

        <div className={styles.description}>
          <BigText>
            Aceitamos doações de material para construir viseiras, material de
            higiene, produtos alimentares ou dinheiro
          </BigText>
        </div>

        <Button theme={Themes.red}>Quero Ajudar</Button>
      </Section>

      <div className={styles.needHelpSection}>
        <Section theme={Themes.linen}>
          <Title theme={Themes.neonCarrot}>Precisa de ajuda?</Title>

          <div className={styles.description}>
            <BigText theme={Themes.goldYellow}>
              Indique-nos o material de que precisa e nós entregamos com
              segurança.
            </BigText>
          </div>

          <Button theme={Themes.neonCarrot}>Preciso de ajuda</Button>
        </Section>
      </div>
    </div>
  );
}
