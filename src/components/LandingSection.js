import React from "react";
import './LandingSection.css'
import { Avatar, Heading, VStack, Text, useBreakpointValue } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import { TypeAnimation } from 'react-type-animation';

const greeting = "Hello, I am Erin!";
const bio1 = "A frontend developer";

const LandingSection = () => {
  const avatarSize = useBreakpointValue({ base: "lg", sm: "lg", md: "2xl" });
  const greetingSize = useBreakpointValue({ base: "sm", sm: "sm", md: "md" });
  const bioFontSize = useBreakpointValue({ base: "3xl", sm: "4xl", md: "6xl" });
  const typeAnimationFontSize = useBreakpointValue({ base: "2xl", sm: "3xl", md: "5xl" })

  return (
    <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    bgGradient="radial-gradient(ellipse at center, rgba(0,0,0,1) 0%, rgba(9,9,121,1) 100%)"
  >
    <VStack spacing={16}>
      <VStack spacing={4} alignItems="center">
        <Avatar
          src=""
          size={avatarSize}
          name="Erin Lin"
        />
        <Heading as="h4" size={greetingSize} noOfLines={1} fontWeight="normal">
          {greeting}
        </Heading>
      </VStack>
      <VStack spacing={6}>
        <Text
          bgGradient='linear(to-l, #7928CA, #FF0080)'
          bgClip='text'
          fontSize={bioFontSize}
          fontWeight='extrabold'
          fontFamily="Montserrat, Sans-serif"
        >
          {bio1}
        </Text>
        <Text
          fontSize={typeAnimationFontSize}
          fontWeight='extrabold'
          fontFamily="Montserrat, Sans-serif"
          display="block"
        >
          specialized in {' '}
          <TypeAnimation
            sequence={[
              'React',
              2000,
              'UI/UX',
              2000,
              'Figma',
              2000,
              'web dev',
              2000,
            ]}
            repeat={Infinity}
          />
        </Text>
      </VStack>
    </VStack>
  </FullScreenSection>
);


}

export default LandingSection;
