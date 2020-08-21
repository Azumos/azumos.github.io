import React from "react";
import { Box, Heading, Text } from "@chakra-ui/core";

export const About: React.FC = () => {
  return (
    <Box textAlign="center">
      <Heading>About</Heading>
      <Box my={[5, 5, 10, 10]}>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
      </Box>
    </Box>
  );
};