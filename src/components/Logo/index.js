import React from "react";
import Proptypes from "prop-types"

import LogoSvg from "./logo.svg?sprite";

const Logo = ({ width }) => (
  <LogoSvg width={width} />
);

Logo.propTypes = {
  width: Proptypes.number
}

Logo.defaultProps = {
  width: 140
}

export default Logo;
