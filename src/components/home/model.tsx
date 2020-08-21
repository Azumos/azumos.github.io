import React from "react";
import { Box, Heading } from "@chakra-ui/core";

export const Model: React.FC = () => {
  const autodeskModelUrl = "https://a360.co/2FAF3dp";
  return (
    <Box textAlign="center">
      <Heading>Our facade model</Heading>
      <Box my={[5, 5, 10, 10]}>
        <iframe
          src={autodeskModelUrl}
          width="100%"
          height="480"
          allowFullScreen={true}
        ></iframe>
      </Box>
    </Box>
  );
};
