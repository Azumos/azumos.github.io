import { useContext } from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import { Heading, Flex, Link as ChakraLink, Text } from "@chakra-ui/core";

import { routes } from "./routes";
import { NavItem } from "./navitem";
import { LocationContext } from "../../context/LocationContext";

interface IHeaderComponentProps {
  siteTitle: string;
}

const Header: React.FC<IHeaderComponentProps> = ({ siteTitle }) => {
  const location = useContext(LocationContext);

  return (
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
        <Link to="/">
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
        <ChakraLink href="/assets/infographic.pdf" color="white" _hover={{}}>
          <Text px={[1, 1, 2, 2]} fontSize={["sm", "md", "lg", "xl"]}>
            Infographic
          </Text>
        </ChakraLink>
      </Flex>
    </Flex>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export { Header };
