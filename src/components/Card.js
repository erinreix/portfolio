import React from "react";
import { Button, Heading, HStack, Image, Text, VStack, Spacer } from "@chakra-ui/react";

const Card = ({ title, description, imageSrc, url }) => {
  return (
    <VStack
      color="black"
      backgroundColor="white"
      borderRadius="xl"
      height="100%"
      overflow="hidden"
      display="flex"
      flexDirection="column"
    >
      <Image
        borderRadius="xl"
        src={imageSrc}
        alt={title}
        objectFit="cover"
        width="100%"
        height="200px"
      />
      <VStack
        spacing={4}
        p={4}
        alignItems="flex-start"
        flexGrow={1}
        width="100%"
      >
        <Heading as="h3" size="md">
          {title}
        </Heading>
        <Text color="#64748b" fontSize="md" >
          {description}
        </Text>
        <Spacer />
        <HStack justifyContent="flex-end" width="100%">
          <a href={url} target="_blank" rel="noopener noreferrer">
            <Button colorScheme="blue" variant="ghost">
              See more
            </Button>
          </a>
        </HStack>
      </VStack>
    </VStack>
  );
};

export default Card;
