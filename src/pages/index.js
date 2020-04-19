import React from "react";
import PropTypes from "prop-types";

import HomeHero from "root/sections/HomeHero";
import Layout from "root/components/Layout";
import HomeCallToAction from "root/sections/HomeCallToAction";
import HomeStats from "root/sections/HomeStats";
import getTotalDonations from "root/lib/getTotalDonations";
import getDeliveredMaterial from "root/lib/getDeliveredMaterial";

import content from "cms/pages/index.json";

import styles from "./index.module.css";

export default function HomePage({ totalDonations, deliveredMaterial }) {
  return (
    <Layout
      title={content.title}
      description={content.description}
      keywords={content.keywords}
    >
      <HomeHero />

      <div className={styles.sections}>
        <div className={styles.callToAction}>
          <HomeCallToAction />
        </div>

        <div className={styles.stats}>
          <HomeStats
            totalDonations={totalDonations}
            deliveredMaterial={deliveredMaterial}
          />
        </div>
      </div>
    </Layout>
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
