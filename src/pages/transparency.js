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
        <thead>
          <tr style={{ textAlign: "left" }}>
            <th>Propósito</th>
            <th>Data</th>
            <th>Valor</th>
          </tr>
        </thead>
        <tbody>
          {transparencyReport.map((reportLine, index) => (
            <tr key={index}>
              <td>{reportLine.purpose}</td>
              <td>{reportLine.date}</td>
              <td>{reportLine.value}€</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Layout>
  );
}

HomePage.propTypes = {
  transparencyReport: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.number.isRequired,
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
