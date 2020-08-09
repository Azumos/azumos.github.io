import React from "react";
import { Heading, Text } from "@chakra-ui/core";

import { Layout, SEO, Home } from "../components";
import { LocationContext } from "../context/LocationContext";

const IndexPage: React.FC = ({ location }) => {
  return (
    <LocationContext.Provider value={location}>
      <Layout>
        <SEO title="Home" />
        <Home />
      </Layout>
    </LocationContext.Provider>
  );
};

export default IndexPage;
