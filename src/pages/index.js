import React from "react";
import Layout from "root/components/Layout";
import Circle from "root/assets/circle.svg?sprite";

import content from "cms/pages/index.json";

export default function HomePage() {
  return (
    <Layout
      title={content.title}
      description={content.description}
      keywords={content.keywords}
    >
      <h1>{content.title}</h1>

      <Circle />
    </Layout>
  );
}
