import React, { useState, useRef } from "react";
import {
  Box,
  Image,
  Text,
  Button,
  Scale,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
} from "@chakra-ui/core";

import { IMember } from "../../types";

interface IMemberCardComponentProps {
  memberData: IMember;
}

export const MemberCard: React.FC<IMemberCardComponentProps> = ({
  memberData,
}) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const modalRef = useRef();
  const { name, role, picture, description, responsibility } = memberData;

  return (
    <Box backgroundColor="text.primary" roundedBottom="md" m={5}>
      <Scale in={isModalOpen}>
        {styles => (
          <Modal
            finalFocusRef={modalRef}
            isOpen={isModalOpen}
            onClose={() => setModalOpen(false)}
            size={"min(90%, 600px)"}
          >
            <ModalOverlay />
            <ModalContent
              backgroundColor="text.primary"
              color="text.secondary"
              borderRadius={5}
              {...styles}
            >
              <ModalHeader
                backgroundColor="primary.500"
                color="text.primary"
                roundedTop={5}
              >
                {name}
              </ModalHeader>
              <ModalCloseButton />
              <ModalBody>{description ?? ""}</ModalBody>
              <ModalBody>{responsibility ?? ""}</ModalBody>
            </ModalContent>
          </Modal>
        )}
      </Scale>

      <Image src={picture} size={250} />
      <Box color="text.secondary" p={2}>
        <Text fontSize="xl">{name}</Text>
        <Text fontSize="l">{role}</Text>
        <Button
          px={2}
          py={0}
          backgroundColor="primary.500"
          size="sm"
          color="text.primary"
          _hover={{ backgroundColor: "primary.800" }}
          onClick={() => setModalOpen(true)}
        >
          read more
        </Button>
      </Box>
    </Box>
  );
};
