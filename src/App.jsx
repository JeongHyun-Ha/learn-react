import React from "react";
import { Button, ChakraProvider } from "@chakra-ui/react";

function App(props) {
  return (
    <ChakraProvider>
      <div>
        <Button colorScheme={"gray"}>Gray</Button>
        <Button colorScheme={"red"}>Lorem.</Button>
        <Button colorScheme={"orange"}>Sapiente.</Button>
        <Button colorScheme={"yellow"}>Nemo.</Button>
        <Button colorScheme={"green"}>Amet!</Button>
        <Button colorScheme={"teal"}>Id!</Button>
        <Button colorScheme={"blue"}>Quaerat.</Button>
        <Button colorScheme={"cyan"}>Sequi.</Button>
        <Button colorScheme={"purple"}>Doloribus.</Button>
        <Button colorScheme={"pink"}>Quibusdam.</Button>
        <hr />
        <Button colorScheme={"red"} isLoading={true}>
          Lorem.
        </Button>
        <hr />
        <Button colorScheme={"red"} variant={"solid"}>
          Lorem.
        </Button>
        <Button colorScheme={"red"} variant={"outline"}>
          Deleniti?
        </Button>
        <Button colorScheme={"red"} variant={"ghost"}>
          Nostrum.
        </Button>
        <Button colorScheme={"blue"} variant={"link"}>
          Sed!
        </Button>
      </div>
    </ChakraProvider>
  );
}

export default App;
