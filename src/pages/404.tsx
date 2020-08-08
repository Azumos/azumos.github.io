import React from "react";
import { Heading, Text } from "@chakra-ui/core";

import { Layout, SEO } from "../components/";
import { LocationContext } from "../context/LocationContext";

const NotFoundPage: React.FC = ({ location }) => (
  <LocationContext.Provider value={location}>
    <Layout>
      <SEO title="404: Not found" />
      <Heading as="h2" color="text.primary">
        NOT FOUND
      </Heading>
      <Text>You just hit a route that doesn&#39;t exist... the sadness.</Text>
    </Layout>
  </LocationContext.Provider>
);

export default NotFoundPage;
