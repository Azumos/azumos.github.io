import React from "react";
import { Box, Image, Text, Button } from "@chakra-ui/core";

import { IMember } from "../../types";

interface IMemberCardComponentProps {
  memberData: IMember;
}

export const MemberCard: React.FC<IMemberCardComponentProps> = ({
  memberData,
}) => {
  const { name, role, picture } = memberData;

  return (
    <Box backgroundColor="text.primary" roundedBottom="md" m={5}>
      <Image src={picture} size={250} />
      <Box color="text.secondary" p={2}>
        <Text fontSize="xl">{name}</Text>
        <Text fontSize="l">{role}</Text>
        <Button
          p={2}
          backgroundColor="primary.500"
          size="sm"
          color="text.primary"
          _hover={{ backgroundColor: "primary.800" }}
        >
          read more
        </Button>
      </Box>
    </Box>
  );
};
