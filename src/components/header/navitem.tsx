import React, { FunctionComponent } from "react";
import { Text, Flex } from "@chakra-ui/core";
import { Link } from "gatsby";

interface NavItemComponentProps {
  route: string;
  text: string;
  isActive: boolean;
}

export const NavItem: FunctionComponent<NavItemComponentProps> = ({
  route,
  text,
  isActive,
}) => {
  return (
    <Link to={`${route}`}>
      <Text
        color={isActive ? "secondary.900" : "text.primary"}
        px={[1, 1, 2, 2]}
        fontSize={["sm", "md", "lg", "xl"]}
      >
        {text}
      </Text>
    </Link>
  );
};
