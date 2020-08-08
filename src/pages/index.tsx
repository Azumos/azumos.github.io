import React from "react";
import { Heading, Text } from "@chakra-ui/core";

import { Layout, SEO } from "../components";
import { LocationContext } from "../context/LocationContext";

const IndexPage: React.FC = ({ location }) => {
  return (
    <LocationContext.Provider value={location}>
      <Layout>
        <SEO title="Home" />
        <Heading as="h1">Home page</Heading>
      </Layout>
    </LocationContext.Provider>
  );
};

export default IndexPage;
