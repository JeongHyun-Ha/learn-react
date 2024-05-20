import React from "react";
import { Badge, Box, Button, ChakraProvider } from "@chakra-ui/react";

function App(props) {
  function handleButtonClick(e) {
    e.stopPropagation();
    console.log("버튼 클릭됨");
  }

  function handleBoxClick() {
    console.log("박스 클릭됨");
  }

  function handleBadgeClick(e) {
    e.stopPropagation();
    console.log("뱃지 클릭됨");
  }

  return (
    <ChakraProvider>
      <Box onClick={handleBoxClick} w={"100px"} h={"100px"} bgColor={"orange"}>
        <Button onClick={handleButtonClick}>
          클릭
          <Badge onClick={handleBadgeClick} ml={3}>
            new
          </Badge>
        </Button>
      </Box>
    </ChakraProvider>
  );
}

export default App;
