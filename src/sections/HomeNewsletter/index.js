import React from "react";

import content from "cms/pages/index.json";
import Section from "root/components/Section";
import SmallTitle from "root/components/SmallTitle";
import Themes from "root/components/Themes";
import Text from "root/components/Text";
import NewsletterForm from "root/components/NewsletterForm";
import Link from "root/components/Link";
import mail from "root/assets/email.svg?include";

import styles from "./index.module.css";

export default function HomeNewsletter() {
  return (
    <Section>
      <SmallTitle theme={Themes.neonCarrot}>
        {content.newsletterTitle}
      </SmallTitle>

      <div className={styles.subtitle}>
        <Text theme={Themes.goldYellow}>{content.newsletterSubtitle}</Text>
      </div>

      <NewsletterForm />

      <div className={styles.contactUs}>
        <Text theme={Themes.goldYellow}> {content.newsletterContactLabel}</Text>
      </div>

      <Link
        icon={mail}
        href={`mailto:${content.newsletterContactEmail}`}
        external
      >
        {content.newsletterContactEmail}
      </Link>
    </Section>
  );
}
