import React from "react";
import PropTypes from "prop-types";

import HomeHero from "root/sections/HomeHero";
import Layout from "root/components/Layout";
import Navbar from "root/components/Navbar";
import HomeStats from "root/sections/HomeStats";
import getTotalDonations from "root/lib/getTotalDonations";
import getDeliveredMaterial from "root/lib/getDeliveredMaterial";

import content from "cms/pages/index.json";

export default function HomePage({ totalDonations, deliveredMaterial }) {
  return (
    <>
      <Navbar />
      <Layout
        title={content.title}
        description={content.description}
        keywords={content.keywords}
      >
        <HomeHero />
        <HomeStats
          totalDonations={totalDonations}
          deliveredMaterial={deliveredMaterial}
        />
      </Layout>
    </>
  );
}

HomePage.propTypes = {
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
