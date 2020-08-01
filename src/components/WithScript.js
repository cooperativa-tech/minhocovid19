import React, { useMemo } from "react";
import PropTypes from "prop-types";
import uniqueId from "lodash.uniqueid";
import { renderToString } from "preact-render-to-string";

function WithScript({ children }) {
  const elementId = useMemo(() => uniqueId("with_script_"), []);
  const renderNoscriptContent = () =>
    renderToString(
      <style>
        {`
          #${elementId}{
            display: none;
          }
        `}
      </style>
    );

  return (
    <>
      {process.browser && (
        <noscript
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: renderNoscriptContent() }}
        />
      )}

      <div id={elementId}>{children}</div>
    </>
  );
}

WithScript.propTypes = {
  children: PropTypes.number.isRequired,
};

export default WithScript;
