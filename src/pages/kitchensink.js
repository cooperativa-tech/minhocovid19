import React from "react";
import Layout from "root/components/Layout";

import content from "cms/pages/kitchensink.json";
import Title from "root/components/Title";
import Logo from "../components/Logo";

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
  </Layout>
);
