import React from "react";
import PropTypes from "prop-types";

import "root/styles/base.css";

function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

/* eslint-disable react/forbid-prop-types */
App.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.object.isRequired,
};
/* eslint-enable */

export default App;
