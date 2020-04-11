import React from "react";
import Layout from "root/components/Layout";

import content from "cms/pages/kitchensink.json";
import Logo from "../components/Logo";

export default () => (
  <Layout
    title={content.title}
    description={content.description}
    keywords={content.keywords}
  >
    <Logo />
  </Layout>
);
