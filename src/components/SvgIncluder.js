import React from "react";
import PropTypes from "prop-types";

function SvgIncluder({ svg, width, height }) {
  const style = {
    width,
    height,
  };

  return <div style={style} dangerouslySetInnerHTML={{ __html: svg }} />;
}

SvgIncluder.propTypes = {
  svg: PropTypes.string.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
};

SvgIncluder.defaultProps = {
  width: null,
  height: null,
};

export default SvgIncluder;
