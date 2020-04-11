import React from "react";
import Layout from "root/components/Layout";

import content from "cms/pages/kitchensink.json";

export default () => (
  <Layout
    title={content.title}
    description={content.description}
    keywords={content.keywords}
  >
    Hello world
  </Layout>
);
