import React from "react";

import HomeHero from "root/sections/HomeHero";
import Layout from "root/components/Layout";
import Navbar from "root/components/Navbar";

import content from "cms/pages/index.json";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Layout
        title={content.title}
        description={content.description}
        keywords={content.keywords}
      >
        <HomeHero />
      </Layout>
    </>
  );
}
