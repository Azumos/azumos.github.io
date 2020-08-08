import React from "react";
import { Heading, Text } from "@chakra-ui/core";

import { Layout, SEO } from "../components";

const TeamPage: React.FC = ({ location }) => {
  return (
    <Layout location={location}>
      <SEO title="Team" />
      <Heading as="h1">Team page</Heading>
    </Layout>
  );
};

export default TeamPage;
