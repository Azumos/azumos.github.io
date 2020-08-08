import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import { Heading, Flex } from "@chakra-ui/core";

import { routes } from "./routes";
import { NavItem } from "./navitem";

interface IHeaderComponentProps {
  siteTitle: string;
  location: any;
}

const Header: React.FC<IHeaderComponentProps> = ({ siteTitle, location }) => (
  <Flex
    as="nav"
    align="center"
    p={[2, 2, 4, 4]}
    w="100vw"
    backgroundColor={"primary.700"}
    opacity={0.8}
    zIndex={1}
  >
    <Flex flex={1}>
      <Link to="">
        <Heading as="h3">{siteTitle}</Heading>
      </Link>
    </Flex>
    <Flex>
      {routes.map(({ route, text }, index) => (
        <NavItem
          key={index}
          route={route}
          text={text}
          isActive={location.pathname === route}
        ></NavItem>
      ))}
    </Flex>
  </Flex>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export { Header };
