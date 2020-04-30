import React from "react";
import ReactMarkdown from "react-markdown";

import content from "cms/pages/faqs.json";
import Link from "root/components/Link";
import Subtitle from "root/components/Subtitle";
import Text from "root/components/Text";
import Themes from "root/components/Themes";

import styles from "./index.module.css";

/* eslint-disable react/prop-types */
const RENDERERS = {
  paragraph: ({ children }) => (
    <Text theme={Themes.greyishBlue}>{children}</Text>
  ),
  text: ({ children }) => children,
  link: ({ href, children }) => (
    <Link href={href} external>
      {children}
    </Link>
  ),
};
/* eslint-enable react/prop-types */

export default function FaqsList() {
  return (
    <div>
      {content.faqs.map((faq, index) => (
        <div key={index}>
          <Subtitle theme={Themes.greyishBlue}>{faq.title}</Subtitle>

          <div className={styles.faqContent}>
            <ReactMarkdown
              source={faq.content}
              allowedTypes={["emphasis", "strong", "paragraph", "link", "text"]}
              renderers={RENDERERS}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
