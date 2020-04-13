import React from "react";
import PropTypes from "prop-types";

import Layout from "root/components/Layout";
import Logo from "root/components/Logo";
import Text, { THEMES as TEXT_THEMES } from "root/components/Text";
import Subtitle, { THEMES as SUBTITLE_THEMES } from "root/components/Subtitle";
import Title, { THEMES as TITLE_THEMES } from "root/components/Title";
import BigText from "root/components/BigText";
import Button, { THEMES as BUTTON_THEMES } from "root/components/Button";
import Link from "root/components/Link";
import getTotalDonations from "root/lib/getTotalDonations";
import getDeliveredMaterial from "root/lib/getDeliveredMaterial";

import content from "cms/pages/kitchensink.json";

const KitchenSink = ({ totalDonations, deliveredMaterial }) => (
  <Layout
    title={content.title}
    description={content.description}
    keywords={content.keywords}
  >
    <Title theme={TITLE_THEMES.RED}>Juntos paramos o Covid19</Title>
    <Title theme={TITLE_THEMES.NEON_CARROT}>Juntos paramos o Covid19</Title>
    <Title theme={TITLE_THEMES.GREISH_BLUE}>Juntos paramos o Covid19</Title>
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
    <Text theme={TEXT_THEMES.GREISH_BLUE}>
      Total donations: {totalDonations}
    </Text>
    <Text theme={TEXT_THEMES.GREISH_BLUE}>
      Delivered material: {deliveredMaterial}
    </Text>
    <BigText theme="redTheme">
      Ligamos quem precisa de ajuda a quem pode ajudar.
    </BigText>
    <BigText theme="neonCarrotTheme">
      Ligamos quem precisa de ajuda a quem pode ajudar.
    </BigText>
    <BigText theme="greyishBlueTheme">
      Ligamos quem precisa de ajuda a quem pode ajudar.
    </BigText>
    <Button theme={BUTTON_THEMES.RED} href="kitchensink">
      Kitchen
    </Button>
    <Button theme={BUTTON_THEMES.NEON_CARROT} href="/">
      Home
    </Button>
    <Button
      theme={BUTTON_THEMES.RED}
      onClick={() => alert("this is not cookie clicker -.-")}
    >
      Quero ajudar
    </Button>
    <Button
      theme={BUTTON_THEMES.NEON_CARROT}
      onClick={() => alert("this is not cookie clicker -.-")}
    >
      Preciso de ajuda
    </Button>
    <Link href="/">Ver todas as doações do MinhoCovid19</Link>
  </Layout>
);

KitchenSink.propTypes = {
  totalDonations: PropTypes.number.isRequired,
  deliveredMaterial: PropTypes.number.isRequired,
};

export async function getStaticProps(_context) {
  return {
    props: {
      totalDonations: await getTotalDonations(),
      deliveredMaterial: await getDeliveredMaterial(),
    },
  };
}

export default KitchenSink;
