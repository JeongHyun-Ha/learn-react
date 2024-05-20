import React from "react";
import {
  Box,
  Center,
  ChakraProvider,
  Checkbox,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Radio,
  RadioGroup,
  Switch,
  Textarea,
} from "@chakra-ui/react";

function App(props) {
  return (
    <ChakraProvider>
      <FormControl>
        <Center>
          <Box>
            <FormLabel>Email address</FormLabel>
            <Input type="email" />
            <FormHelperText>We will never share your email.</FormHelperText>
          </Box>
        </Center>
      </FormControl>
      <hr />
      <Checkbox>Lorem.</Checkbox>
      <Checkbox>Id!</Checkbox>
      <Checkbox>Quis?</Checkbox>
      <hr />
      <RadioGroup>
        <Radio value="1">1</Radio>
        <Radio value="2">2</Radio>
        <Radio value="3">3</Radio>
      </RadioGroup>
      <hr />
      <Switch />
      <hr />
      <Textarea></Textarea>
    </ChakraProvider>
  );
}

export default App;
