import { Box, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";

export default function BlogCard({ image, heading, date, description }) {
  return (
    <Box
      width={{ base: "auto", md: "48%", xl: "48%" }}
      py="10px"
      px="15px"
      boxShadow="lg"
      borderTop="1px solid white"
      margin="auto"
      borderRadius="0.5rem"
    >
      <Image
        src={image}
        objectFit="cover"
        width="100%"
        //   width={{ base: "auto", md: "520px", xl: "520px" }}
        height={{ base: "auto", md: "312px", xl: "312px" }}
        margin="auto"
        borderRadius="0.5rem"
      />
      <br />
      <Box padding="2" mb="3">
        <Heading fontSize={{ base: "auto", md: "2xl", xl: "2xl" }}>
          {heading}
        </Heading>
        <br />
        <Text mb="3">{date}</Text>
        <Text>{description}</Text>
      </Box>
    </Box>
  );
}
