import React from "react";
import { Box, Heading } from "@chakra-ui/core";

export const Model: React.FC = () => {
  const autodeskModelUrl =
    "https://connect1412.autodesk360.com/g/shares/SH56a43QTfd62c1cd968cc25ec31e0c3693d?mode=embed";
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
