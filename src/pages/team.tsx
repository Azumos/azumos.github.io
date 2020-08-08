import React from "react";
import { Heading, Text } from "@chakra-ui/core";

import { Layout, SEO, Team } from "../components";

const TeamPage: React.FC = ({ location }) => {
  return (
    <Layout location={location}>
      <SEO title="Team" />
      <Team />
    </Layout>
  );
};

export default TeamPage;
