import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";

import styles from "./index.module.css";

function Layout({ title, description, keywords, children }) {
  return (
    <div className={styles.root}>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        {keywords && <meta name="keywords" content={keywords} />}
      </Head>

      <main>{children}</main>
    </div>
  );
}

Layout.defaultProps = {
  keywords: null,
};

Layout.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  keywords: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Layout;
