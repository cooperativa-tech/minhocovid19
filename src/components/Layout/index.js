import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";

import styles from "./index.module.css";

function Layout({ children }) {
  return (
    <div className={styles.root}>
      <Head>
        <title>MinhoCovid19</title>
      </Head>

      {children}
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
