import React, { useMemo } from "react";
import PropTypes from "prop-types";
import uniqueId from "lodash.uniqueid";

function WithScript({ children }) {
  const elementId = useMemo(() => uniqueId("with_script_"), []);

  return (
    <>
      <noscript>
        <style>
          {`
            #${elementId}{
              display: none;
            }
          `}
        </style>
      </noscript>

      <div id={elementId}>{children}</div>
    </>
  );
}

WithScript.propTypes = {
  children: PropTypes.number.isRequired,
};

export default WithScript;
