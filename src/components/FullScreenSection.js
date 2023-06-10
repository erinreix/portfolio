import * as React from "react";
import { VStack } from "@chakra-ui/react";

/**
 * Illustrates the use of children prop and spread operator
 */
const FullScreenSection = ({ children, isDarkBackground, ...boxProps }) => {
  return (
    <VStack
      backgroundColor={boxProps.backgroundColor}
      bgGradient={boxProps.bgGradient}
      color={isDarkBackground ? "white" : "black"}
      {...boxProps}
      minHeight="100vh" // Spread the boxProps on the outer VStack
    >
      <VStack maxWidth="1280px" width="100%">
        {children}
      </VStack>
    </VStack>
  );
};

export default FullScreenSection;
