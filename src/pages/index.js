import React from "react";
import PropTypes from "prop-types";

import Navbar from "root/components/Navbar";
import Footer from "root/components/Footer";
import HomeHero from "root/sections/HomeHero";
import Layout from "root/components/Layout";
import HomeCallToAction from "root/sections/HomeCallToAction";
import HomeInstitutions from "root/sections/HomeInstitutions";
import HomeNewsletter from "root/sections/HomeNewsletter";
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
      <Navbar home />

      <HomeHero />

      <div className={styles.sections}>
        <div className={styles.left}>
          <HomeCallToAction />

          <div className={styles.newsletterDesktop}>
            <HomeNewsletter />
          </div>
        </div>

        <div className={styles.right}>
          <HomeStats
            totalDonations={totalDonations}
            deliveredMaterial={deliveredMaterial}
          />

          <div className={styles.institution}>
            <HomeInstitutions />
          </div>
        </div>
      </div>

      <div className={styles.newsletterMobile}>
        <HomeNewsletter />
      </div>

      <Footer />
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
