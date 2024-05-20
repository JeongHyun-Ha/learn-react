import React, { useEffect, useState } from "react";
import { ChakraProvider, useDisclosure, useToast } from "@chakra-ui/react";

function App(props) {
  // useXxx() : hook
  const [count, setCount] = useState();
  useEffect(() => {}, []);
  const toast = useToast();
  const { isOpen, onClose, onOpen } = useDisclosure();

  // if / for 내에서 사용하지 말 것
  /**
   * if (true) {
   *  const [text, setText] = useState("");
   * }
   */
  // 안전한 사용 방법 : 컴포넌트 가장 상단에 순서대로 작성할 것

  return (
    <ChakraProvider>
      <div></div>
    </ChakraProvider>
  );
}

export default App;
