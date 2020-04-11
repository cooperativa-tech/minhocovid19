import React from "react";
import PropTypes from "prop-types";

import Layout from "root/components/Layout";
import getTotalDonations from "root/lib/getTotalDonations";
import getDeliveredMaterial from "root/lib/getDeliveredMaterial";
import Circle from "root/assets/circle.svg?sprite";

import content from "cms/pages/kitchensink.json"

export default function KitchenSink({ totalDonations, deliveredMaterial }) {
  return (
    <Layout
      title={content.title}
      description={content.description}
      keywords={content.keywords}
    >
      <p>Total donations: {totalDonations}</p>
      <p>Delivered material: {deliveredMaterial}</p>

      <Circle width="100" height="100" />
    </Layout>
  );
}

KitchenSink.propTypes = {
  totalDonations: PropTypes.number.isRequired,
  deliveredMaterial: PropTypes.number.isRequired,
};

export async function getStaticProps(_context) {
  return {
    props: {
      totalDonations: await getTotalDonations(),
      deliveredMaterial: await getDeliveredMaterial(),
    },
  };
}
