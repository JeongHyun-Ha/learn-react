import React from "react";
import { Box, Center, ChakraProvider, Flex, Spacer } from "@chakra-ui/react";

function App(props) {
  return (
    <ChakraProvider>
      <Flex justify={"space-evenly"}>
        <Box w={"100px"} bgColor={"blue"}>
          1
        </Box>
        <Box w={"100px"} bgColor={"orange"}>
          2
        </Box>
        <Box w={"100px"} bgColor={"yellow"}>
          3
        </Box>
      </Flex>
      <hr />
      <Flex>
        <Box bgColor={"gray"}>Lorem.</Box>
        <Box bgColor={"gold"}>Nobis.</Box>
        <Spacer />
        <Box bgColor={"green"}>Necessitatibus.</Box>
      </Flex>
      <hr />
      <Center>
        <Box>Lorem.</Box>
      </Center>
      <hr />
      <Center w={{ base: "50%", md: "600px" }} bgColor={"linen"}>
        <Box>contents</Box>
      </Center>
    </ChakraProvider>
  );
}

export default App;
