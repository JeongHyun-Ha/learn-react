import React from "react";
import { Button, ChakraProvider } from "@chakra-ui/react";

function App(props) {
  return (
    <ChakraProvider>
      <Button
        sx={{ color: "orange", bg: "red", borderRadius: "30px" }}
        colorScheme={"blue"}
      >
        Lorem.
      </Button>
    </ChakraProvider>
  );
}

export default App;
