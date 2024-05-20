import React from "react";
import { Button, ChakraProvider } from "@chakra-ui/react";
import { EmailIcon } from "@chakra-ui/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faApple } from "@fortawesome/free-brands-svg-icons";

function App(props) {
  return (
    <ChakraProvider>
      <Button leftIcon={<EmailIcon />}>Email</Button>
      <FontAwesomeIcon icon={faApple} />
    </ChakraProvider>
  );
}

export default App;
