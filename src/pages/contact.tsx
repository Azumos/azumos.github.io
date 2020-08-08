import React from "react";
import { Heading, Text } from "@chakra-ui/core";

import { Layout, SEO } from "../components";

const ContactPage: React.FC = ({ location }) => {
  return (
    <Layout location={location}>
      <SEO title="Contact" />
      <Heading as="h1">Contact page</Heading>
    </Layout>
  );
};

export default ContactPage;
