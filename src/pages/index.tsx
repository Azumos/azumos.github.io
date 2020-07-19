import React from "react";

import { Layout } from "../components/layout";
import { SEO } from "../components/seo";

const IndexPage: React.FC = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to Azumos official website.</p>
    <p>Let's build something great together.</p>
  </Layout>
);

export default IndexPage;
