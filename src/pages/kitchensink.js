import React from "react";

import Layout from "root/components/Layout";
import Logo from "root/components/Logo";
import Text, { THEMES as TEXT_THEMES } from "root/components/Text";
import Subtitle, { THEMES as SUBTITLE_THEMES } from "root/components/Subtitle";
import Title from "root/components/Title";

import content from "cms/pages/kitchensink.json";

export default () => (
  <Layout
    title={content.title}
    description={content.description}
    keywords={content.keywords}
  >
    <Title theme="redTheme">Juntos paramos o Covid19</Title>
    <Title theme="neonCarrotTheme">Juntos paramos o Covid19</Title>
    <Title theme="greyishBlueTheme">Juntos paramos o Covid19</Title>
    <Logo />
    <Text theme={TEXT_THEMES.RED}>
      Aceitamos doações de material para construir viseiras, material de
      higiene, produtos alimentares ou dinheiro
    </Text>
    <Text theme={TEXT_THEMES.NEON_CARROT}>
      Aceitamos doações de material para construir viseiras, material de
      higiene, produtos alimentares ou dinheiro
    </Text>
    <Text theme={TEXT_THEMES.GREISH_BLUE}>
      Aceitamos doações de material para construir viseiras, material de
      higiene, produtos alimentares ou dinheiro
    </Text>
    <Subtitle theme={SUBTITLE_THEMES.GREISH_BLUE}>Precisa de Ajuda?</Subtitle>
    <Subtitle theme={SUBTITLE_THEMES.NEON_CARROT}>Como ajudar?</Subtitle>
    <Subtitle theme={SUBTITLE_THEMES.RED}>
      Badjeros Badjorans? Bodjarens.
    </Subtitle>
  </Layout>
);
