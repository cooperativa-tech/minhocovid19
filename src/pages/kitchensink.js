/* eslint-disable no-alert */
import React from "react";
import PropTypes from "prop-types";

import Button from "root/components/Button";
import Layout from "root/components/Layout";
import Link from "root/components/Link";
import Logo from "root/components/Logo";
import Navbar from "root/components/Navbar";
import Section from "root/components/Section";
import Stats from "root/components/Stats";
import SmallTitle from "root/components/SmallTitle";
import Text from "root/components/Text";
import Themes from "root/components/Themes";
import Title from "root/components/Title";

import getDeliveredMaterial from "root/lib/getDeliveredMaterial";
import getTotalDonations from "root/lib/getTotalDonations";

import content from "cms/pages/kitchensink.json";

const KitchenSink = ({ totalDonations, deliveredMaterial }) => (
  <>
    <Navbar />
    <Layout
      title={content.title}
      description={content.description}
      keywords={content.keywords}
    >
      <Title theme={Themes.red}>Juntos paramos o Covid19</Title>
      <Title theme={Themes.neonCarrot}>Juntos paramos o Covid19</Title>
      <Title theme={Themes.greyishBlue}>Juntos paramos o Covid19</Title>
      <Logo />
      <Text theme={Themes.red}>
        Aceitamos doações de material para construir viseiras, material de
        higiene, produtos alimentares ou dinheiro
      </Text>
      <Text theme={Themes.neonCarrot}>
        Aceitamos doações de material para construir viseiras, material de
        higiene, produtos alimentares ou dinheiro
      </Text>
      <Text theme={Themes.greyishBlue}>
        Aceitamos doações de material para construir viseiras, material de
        higiene, produtos alimentares ou dinheiro
      </Text>
      <SmallTitle theme={Themes.greyishBlue}>Precisa de Ajuda?</SmallTitle>
      <SmallTitle theme={Themes.neonCarrot}>Como ajudar?</SmallTitle>
      <SmallTitle theme={Themes.red}>Badjeros Badjorans? Bodjarens.</SmallTitle>
      <Stats
        list={[
          { label: "Total donations", value: totalDonations },
          { label: "Delivered material", value: deliveredMaterial },
        ]}
      />
      <Button theme={Themes.red} href="kitchensink">
        Kitchen
      </Button>
      <Button theme={Themes.neonCarrot} href="/">
        Home
      </Button>
      <Button
        theme={Themes.red}
        onClick={() => alert("this is not cookie clicker -.-")}
      >
        Quero ajudar
      </Button>
      <Button
        theme={Themes.neonCarrot}
        onClick={() => alert("this is not cookie clicker -.-")}
      >
        Preciso de ajuda
      </Button>
      <Link href="/">Ver todas as doações do MinhoCovid19</Link>
      <Section theme={Themes.lightBlue}>
        <Button
          theme={Themes.neonCarrot}
          onClick={() => alert("this is not cookie clicker -.-")}
        >
          Preciso de ajuda
        </Button>
        <Link href="/">Ver todas as doações do MinhoCovid19</Link>
      </Section>
      <Section theme={Themes.lightRed}>
        <Button
          theme={Themes.neonCarrot}
          onClick={() => alert("this is not cookie clicker -.-")}
        >
          Preciso de ajuda
        </Button>
        <Link href="/">Ver todas as doações do MinhoCovid19</Link>
      </Section>
      <Section theme={Themes.linen}>
        <Button
          theme={Themes.neonCarrot}
          onClick={() => alert("this is not cookie clicker -.-")}
        >
          Preciso de ajuda
        </Button>
        <Link href="/">Ver todas as doações do MinhoCovid19</Link>
      </Section>
    </Layout>
  </>
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
