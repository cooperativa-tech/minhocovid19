import React from "react";

import Layout from "root/components/Layout";
import HomeHero from "root/sections/HomeHero";

import content from "cms/pages/index.json";

export default function HomePage() {
  return (
    <Layout
      title={content.title}
      description={content.description}
      keywords={content.keywords}
    >
      <HomeHero />
    </Layout>
  );
}
