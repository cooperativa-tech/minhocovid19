import React from "react";
import PropTypes from "prop-types";

import Link from "next/link";
import logoSvg from "root/assets/logo.svg?include";
import SvgIncluder from "root/components/SvgIncluder";

import styles from "./index.module.css";

const Logo = ({ width, title }) => (
  <Link href="/">
    <a href="/" aria-label="Homepage">
      <SvgIncluder
        width={width}
        svg={logoSvg}
        className={title ? "" : styles.noTitle}
      />
    </a>
  </Link>
);

Logo.propTypes = {
  width: PropTypes.string,
  title: PropTypes.bool,
};

Logo.defaultProps = {
  width: "140px",
  title: true,
};

export default Logo;
