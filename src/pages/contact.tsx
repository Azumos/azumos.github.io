import React from "react";
import { Heading, Text } from "@chakra-ui/core";

import { Layout, SEO } from "../components";
import { LocationContext } from "../context/LocationContext";

const ContactPage: React.FC = ({ location }) => {
  return (
    <LocationContext.Provider value={location}>
      <Layout>
        <SEO title="Contact" />
        <Heading as="h1">Contact page</Heading>
      </Layout>
    </LocationContext.Provider>
  );
};

export default ContactPage;
