import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";

import "normalize.css";
import "root/styles/reset.css";

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <script src="https://polyfill.io/v3/polyfill.min.js?features=IntersectionObserver" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

/* eslint-disable react/forbid-prop-types */
App.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.object.isRequired,
};
/* eslint-enable */

export default App;
