import React from "react";
import { Box, Flex, Heading } from "@chakra-ui/core";

import { membersList } from "./membersList";
import { MemberCard } from "./membercard";

export const Team: React.FC = () => {
  return (
    <Flex direction="column" align="center">
      <Heading>Meet our team</Heading>
      <Flex
        my={[5, 5, 10, 10]}
        direction="row"
        wrap="wrap"
        align="center"
        justify="center"
      >
        {membersList.map((memberData, index) => (
          <MemberCard key={index} memberData={memberData} />
        ))}
      </Flex>
    </Flex>
  );
};
