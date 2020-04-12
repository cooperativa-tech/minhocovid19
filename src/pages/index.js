import React from "react";

import Layout from "root/components/Layout";
import Circle from "root/assets/circle.svg?sprite";
import content from "cms/pages/index.json";
import Description from "root/components/Description";

export default function HomePage() {
  return (
    <Layout
      title={content.title}
      description={content.description}
      keywords={content.keywords}
    >
      <h1>{content.title}</h1>
      <Circle width="100" height="100" />
      <Description theme="redTheme">
        Ligamos quem precisa de ajuda a quem pode ajudar.
      </Description>
      <Description theme="neonCarrotTheme">
        Ligamos quem precisa de ajuda a quem pode ajudar.
      </Description>
      <Description theme="greyishBlueTheme" />
    </Layout>
  );
}
