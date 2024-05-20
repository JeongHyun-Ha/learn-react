import React from "react";
import {
  Center,
  ChakraProvider,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
} from "@chakra-ui/react";

function App(props) {
  return (
    <ChakraProvider>
      <Center>
        <FormControl>
          <FormLabel>Email address</FormLabel>
          <Input type="email" />
          <FormHelperText>We will never share your email.</FormHelperText>
        </FormControl>
      </Center>
    </ChakraProvider>
  );
}

export default App;
