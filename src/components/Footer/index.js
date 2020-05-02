import React from "react";

import content from "cms/components/footer.json";
import SvgIncluder from "root/components/SvgIncluder";
import facebook from "root/assets/facebook.svg?include";
import instagram from "root/assets/instagram.svg?include";
import linkedin from "root/assets/linkedin.svg?include";
import SmallTitle from "../SmallTitle";
import Text from "../Text";

import styles from "./index.module.css";
import Themes from "../Themes";

export default function Footer() {
  return (
    <section className={styles.root}>
      <SmallTitle theme={Themes.red}>{content.title}</SmallTitle>

      <div className={styles.subtitle}>
        <Text theme={Themes.red}>{content.subtitle}</Text>
      </div>

      <div className={styles.social}>
        <div className={styles.socialItem}>
          <a
            href={content.facebookLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <SvgIncluder svg={facebook} />
          </a>
        </div>

        <div className={styles.socialItem}>
          <a
            href={content.instagramLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <SvgIncluder svg={instagram} />
          </a>
        </div>

        <div className={styles.socialItem}>
          <a
            href={content.linkedinLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="linkedin"
          >
            <SvgIncluder svg={linkedin} />
          </a>
        </div>
      </div>
    </section>
  );
}
