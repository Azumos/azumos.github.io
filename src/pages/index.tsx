import React from "react";
import { Heading, Text } from "@chakra-ui/core";

import { Layout, SEO } from "../components";

const IndexPage: React.FC = ({ location }) => {
  return (
    <Layout location={location}>
      <SEO title="Home" />
      <Heading as="h1">Home page</Heading>
    </Layout>
  );
};

export default IndexPage;
