import React from "react";

import content from "cms/pages/about.json";
import Section from "root/components/Section";
import SmallTitle from "root/components/SmallTitle";
import Themes from "root/components/Themes";
import Text from "root/components/Text";
import useShare from "root/hooks/useShare";
import Link from "root/components/Link";

import styles from "./index.module.css";

export default function AboutNews() {
  const [canShare, share] = useShare();

  const shareArticle = (event) => {
    const url = event.currentTarget.dataset.value;

    share(url);
  };

  return (
    <Section theme={Themes.linen}>
      <div className={styles.root}>
        <div className={styles.copy}>
          <div className={styles.title}>
            <SmallTitle theme={Themes.neonCarrot}>
              {content.newsTitle}
            </SmallTitle>
          </div>

          <Text theme={Themes.goldYellow}>{content.newsContent}</Text>
        </div>

        <div className={styles.news}>
          {content.news.slice(0, 2).map((article, index) => (
            <div key={index} className={styles.article}>
              <div>
                <Text weight="bold" theme={Themes.mineshaft}>
                  {article.publisher}
                </Text>
              </div>

              <div className={styles.articleTitle}>
                <Text theme={Themes.mineshaft}>{article.title}</Text>
              </div>

              <div className={styles.articleSmallText}>
                <Text theme={Themes.mineshaft}>
                  &quot;{article.excerpt}&quot;
                </Text>
              </div>

              <div className={styles.articleShare}>
                {canShare ? (
                  <button
                    type="button"
                    className={styles.articleShareButton}
                    data-value={article.url}
                    onClick={shareArticle}
                  >
                    Partilhar
                  </button>
                ) : (
                  <Link external href={article.url}>
                    Ver notícia
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
