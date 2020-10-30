import React from "react";

import Navbar from "root/components/Navbar";
import Footer from "root/components/Footer";
import HomeHero from "root/sections/HomeHero";
import Layout from "root/components/Layout";
import HomeCallToAction from "root/sections/HomeCallToAction";
import HomeInstitutions from "root/sections/HomeInstitutions";
import HomeNewsletter from "root/sections/HomeNewsletter";
import HomeStats from "root/sections/HomeStats";

import content from "cms/pages/index.json";

import styles from "./index.module.css";

export default function HomePage() {
  return (
    <Layout
      title={content.title}
      description={content.description}
      keywords={content.keywords}
    >
      <Navbar home currentPage="/" />

      <HomeHero />

      <div className={styles.sections}>
        <div className={styles.left}>
          <HomeCallToAction />

          <div className={styles.newsletterDesktop}>
            <HomeNewsletter />
          </div>
        </div>

        <div className={styles.right}>
          <HomeStats />

          <div className={styles.institution}>
            <HomeInstitutions />
          </div>
        </div>
      </div>

      <div className={styles.newsletterFallback}>
        <HomeNewsletter />
      </div>

      <Footer />
    </Layout>
  );
}
