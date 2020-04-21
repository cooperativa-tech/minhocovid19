import React from "react";
import Proptypes from "prop-types";

import logoSvg from "root/assets/logo.svg?include";
import SvgIncluder from "root/components/SvgIncluder";

const Logo = ({ width }) => <SvgIncluder width={width} svg={logoSvg} />;

Logo.propTypes = {
  width: Proptypes.string,
};

Logo.defaultProps = {
  width: "140px",
};

export default Logo;
