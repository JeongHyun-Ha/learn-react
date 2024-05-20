import React from "react";
import { Box, ChakraProvider } from "@chakra-ui/react";

function App(props) {
  return (
    <ChakraProvider>
      <Box bgColor={"tomato"} m={1}>
        Lorem ipsum dolor.
      </Box>
      <Box bgColor={"tomato"} m={2}>
        Lorem ipsum dolor.
      </Box>
      <Box bgColor={"tomato"} m={10}>
        Ea, recusandae, sed.
      </Box>
      <Box bgColor={"tomato"} m={20}>
        Eaque, expedita, inventore!
      </Box>
    </ChakraProvider>
  );
}

export default App;
