import React from "react";
import { Heading, Text } from "@chakra-ui/core";

import { Layout, SEO, Team } from "../components";
import { LocationContext } from "../context/LocationContext";

const TeamPage: React.FC = ({ location }) => {
  return (
    <LocationContext.Provider value={location}>
      <Layout>
        <SEO title="Team" />
        <Team />
      </Layout>
    </LocationContext.Provider>
  );
};

export default TeamPage;
