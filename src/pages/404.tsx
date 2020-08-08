import React from "react";
import { Heading, Text } from "@chakra-ui/core";

import { Layout, SEO } from "../components/";

const NotFoundPage: React.FC = ({ location }) => (
  <Layout location={location}>
    <SEO title="404: Not found" />
    <Heading as="h2" color="text">
      NOT FOUND
    </Heading>
    <Text>You just hit a route that doesn&#39;t exist... the sadness.</Text>
  </Layout>
);

export default NotFoundPage;
