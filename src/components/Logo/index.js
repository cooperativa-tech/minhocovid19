import React from "react";
import Proptypes from "prop-types";

import Sprite from "root/assets/logo.svg?sprite";

const Logo = ({ width }) => <Sprite width={width} />;

Logo.propTypes = {
  width: Proptypes.number,
};

Logo.defaultProps = {
  width: 140,
};

export default Logo;
