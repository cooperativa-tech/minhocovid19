import React from "react";
import Layout from "root/components/Layout";

import content from "cms/pages/kitchensink.json";
import Logo from "../components/Logo";
import Text, { THEMES } from "../components/Text";

export default () => (
  <Layout
    title={content.title}
    description={content.description}
    keywords={content.keywords}
  >
    <Logo />
    <Text theme={THEMES.RED}>
      Aceitamos doações de material para construir viseiras, material de
      higiene, produtos alimentares ou dinheiro
    </Text>
    <Text theme={THEMES.NEON_CARROT}>
      Aceitamos doações de material para construir viseiras, material de
      higiene, produtos alimentares ou dinheiro
    </Text>
    <Text theme={THEMES.GREISH_BLUE}>
      Aceitamos doações de material para construir viseiras, material de
      higiene, produtos alimentares ou dinheiro
    </Text>
  </Layout>
);
