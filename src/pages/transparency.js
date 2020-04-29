import React from "react";
import PropTypes from "prop-types";

import Layout from "root/components/Layout";

import getTransparencyReport from "root/lib/getTransparencyReport";

import content from "cms/pages/index.json";

export default function HomePage({ transparencyReport }) {
  return (
    <Layout
      title={content.title}
      description={content.description}
      keywords={content.keywords}
    >
      <table style={{ marginTop: "300px" }}>
        <tr style={{ textAlign: "left" }}>
          <th>Propósito</th>
          <th>Data</th>
          <th>Valor</th>
        </tr>
        {transparencyReport.map((reportLine) => (
          <tr>
            <td>{reportLine.purpose}</td>
            <td>{reportLine.date}</td>
            <td>{reportLine.value}€</td>
          </tr>
        ))}
      </table>
    </Layout>
  );
}

HomePage.propTypes = {
  transparencyReport: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export async function getStaticProps(_context) {
  return {
    props: {
      transparencyReport: await getTransparencyReport(),
    },
  };
}
