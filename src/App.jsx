import React from "react";
import { Box, ChakraProvider } from "@chakra-ui/react";

function App(props) {
  return (
    <ChakraProvider>
      <Box p={"10px"} borderRadius={"md"} bg={"tomato"}>
        Lorem ipsum dolor.
      </Box>
      <Box bgColor={"orange.800"}>Lorem ipsum dolor.</Box>
      <hr />
      <Box m={"10px"} bgColor={"yellow"}>
        Lorem ipsum dolor.
      </Box>
      <Box mt={"10px"} bgColor={"yellow"}>
        Molestias repudiandae, velit!
      </Box>
      <Box ml={"10px"} bgColor={"yellow"}>
        At, culpa impedit.
      </Box>
      <hr />
      <Box border={"1px solid red"} p={"10px"}>
        Lorem ipsum dolor.
      </Box>
      <Box border={"1px solid red"} pt={"10px"}>
        Aliquam, fugit, harum.
      </Box>
      <Box border={"1px solid red"} pb={"10px"}>
        Corporis maxime, quisquam?
      </Box>
      <Box border={"1px solid red"} pl={"10px"}>
        Ea nobis, similique.
      </Box>
      <Box border={"1px solid red"} pr={"10px"}>
        Corporis, dignissimos tempore!
      </Box>
      <Box border={"1px solid red"} px={"10px"}>
        Aliquam, eius quos!
      </Box>
      <Box border={"1px solid red"} py={"10px"}>
        Delectus, dolorum, hic.
      </Box>
      <hr />
      <Box w={"500px"} border={"1px solid red"}>
        Lorem ipsum dolor.
      </Box>
      <Box h={"500px"} border={"1px solid red"}>
        Possimus, sed temporibus?
      </Box>
    </ChakraProvider>
  );
}

export default App;
