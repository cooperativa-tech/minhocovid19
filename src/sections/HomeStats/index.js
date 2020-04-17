import React from "react";
import PropTypes from "prop-types";

import Section from "root/components/Section";
import Themes from "root/components/Themes";
import Stats from "root/components/Stats";
import Title from "root/components/Title";
import BigText from "root/components/BigText";
import Link from "root/components/Link";

import styles from "./index.module.css";

function HomeStats({ totalDonations, deliveredMaterial }) {
  return (
    <div className={styles.root}>
      <Section theme={Themes.lightBlue}>
        <Title theme={Themes.blue}>Como ajudamos?</Title>

        <div className={styles.description}>
          <BigText theme={Themes.greyishBlue}>
            Tentamos dar resposta a todo o tipo de pedidos de ajuda que
            recebemos. Até agora entregamos:
          </BigText>
        </div>

        <Stats
          list={[
            { label: "Total donations", value: totalDonations },
            { label: "Delivered material", value: deliveredMaterial },
          ]}
        />

        <div className={styles.link}>
          <Link href="https://airtable.com/shrSo1Hv4Xhl8F0Un" external>
            Ver todas as doações do MinhoCovid19
          </Link>
        </div>
      </Section>
    </div>
  );
}

HomeStats.propTypes = {
  totalDonations: PropTypes.number.isRequired,
  deliveredMaterial: PropTypes.number.isRequired,
};

export default HomeStats;
