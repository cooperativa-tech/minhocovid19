import React from "react";
import PropTypes from "prop-types";
import NextLink from "next/link";

import Themes from "../Themes";
import styles from "./index.module.css";

const Button = ({ theme, href, children, type, onClick }) => {
  const className = `${styles.root} ${styles[theme]}`;

  if (href) {
    return (
      <NextLink href={href}>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a className={className}>{children}</a>
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
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  theme: PropTypes.oneOf([Themes.red, Themes.neonCarrot, Themes.white])
    .isRequired,
  type: PropTypes.oneOf(["button", "submit"]),
};

Button.defaultProps = {
  href: null,
  onClick: null,
  type: "button",
};

export default Button;
