import React from "react";
import homeData from "cms/pages/index.json";
import Layout from "root/components/Layout";
import Circle from "root/assets/circle.svg?sprite";

export default function HomePage() {
  return (
    <Layout>
      <h1>{homeData.title}</h1>

      <Circle width="100" height="100" />
    </Layout>
  );
}
