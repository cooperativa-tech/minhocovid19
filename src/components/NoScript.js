/* eslint-disable react/no-danger */
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import PropTypes from "prop-types";

function NoScript({ children }) {
  return (
    <noscript
      dangerouslySetInnerHTML={{
        __html: renderToStaticMarkup(children).replace(/noscript/g, "div"),
      }}
    />
  );
}

NoScript.propTypes = {
  children: PropTypes.node.isRequired,
};

export default NoScript;
