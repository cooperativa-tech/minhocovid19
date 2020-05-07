import React from "react";
import PropTypes from "prop-types";
import NextLink from "next/link";

import Themes from "../Themes";
import styles from "./index.module.css";

const Button = ({ theme, href, external, children, type, onClick }) => {
  const className = `${styles.root} ${styles[theme]}`;

  if (href) {
    if (external) {
      return (
        <a className={className} href={href}>
          {children}
        </a>
      );
    }

    return (
      <NextLink href={href}>
        <a className={className} href={href}>
          {children}
        </a>
      </NextLink>
    );
  }

  return (
    // eslint-disable-next-line react/button-has-type
    <button type={type} onClick={onClick} className={className}>
      {children}
    </button>
  );
};

Button.propTypes = {
  href: PropTypes.string,
  external: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  theme: PropTypes.oneOf([Themes.red, Themes.neonCarrot, Themes.white])
    .isRequired,
  type: PropTypes.oneOf(["button", "submit"]),
};

Button.defaultProps = {
  href: null,
  external: false,
  onClick: null,
  type: "button",
};

export default Button;
