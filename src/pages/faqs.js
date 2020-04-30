import React from "react";

import content from "cms/pages/faqs.json";
import Layout from "root/components/Layout";
import FaqsList from "root/sections/FaqsList";

export default function FaqsPage() {
  return (
    <Layout
      title={content.title}
      description={content.description}
      keywords={content.keywords}
    >
      <div style={{ marginTop: "200px" }}>
        <FaqsList />
      </div>
    </Layout>
  );
}
