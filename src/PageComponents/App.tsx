import * as React from "react";
import {
  ChakraProvider,
  Flex,
  theme,
  Text
} from "@chakra-ui/react";
import { ContentContainer } from './ContentContainer'

export const App = () => (
  <ChakraProvider theme={theme}>
    <Flex textAlign="center" justify='center' height='100vh' direction='column' alignItems='center'>
      <Text fontFamily='sans-serif' textColor='black' fontSize='6xl' fontWeight='bold' marginBottom='40px'>
        Custom Form
      </Text>
      <ContentContainer/>
    </Flex>
  </ChakraProvider>
);
