import React from "react";
import {
  Button,
  ChakraProvider,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";

function App(props) {
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <ChakraProvider>
      <Button onClick={onOpen}>Trigger</Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Hello Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>Lorem ipsum.</ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
            <Button colorScheme={"blue"}>저장</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </ChakraProvider>
  );
}

export default App;
