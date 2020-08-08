import React from "react";
import { Heading, Text } from "@chakra-ui/core";

import { Layout, SEO } from "../components";

const IndexPage: React.FC = () => (
  <Layout>
    <SEO title="Home" />
    <Heading as="h1">Hi people</Heading>
    <Text>Welcome to Azumos official website.</Text>
    <Text>Let's build something great together.</Text>
  </Layout>
);

export default IndexPage;
