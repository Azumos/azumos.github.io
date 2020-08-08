import React from "react";
import PropTypes from "prop-types";
import { Box } from "@chakra-ui/core";

import { Header } from "../header";

interface ILayoutComponentProps {
  children: React.ReactNode;
  location: any;
}

const Layout: React.FC<ILayoutComponentProps> = ({ children, location }) => {
  return (
    <Box backgroundColor="secondary.800" minHeight="100vh">
      <Header siteTitle={"Azumos"} location={location} />
      <Box m="0 auto" p="0 1.0875rem 1.45rem" maxWidth="960px">
        <Box minHeight="80vh">{children}</Box>
        <footer>
          © {new Date().getFullYear()}, Built with ❤️ in Hong Kong
        </footer>
      </Box>
    </Box>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export { Layout };
