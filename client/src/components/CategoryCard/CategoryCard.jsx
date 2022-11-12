import { Box, Heading, Image, Text } from "@chakra-ui/react";

const CategoryCard = ({ image, heading, date, description }) => {
  return (
    <>
      <Box
        width={{ base: "auto", md: "47%", xl: "47%" }}
        py="10px"
        // height={{base:"auto",md:"785px",xl:"785px"}}
        boxShadow="lg"
        margin="auto"
        borderRadius="0.5rem"
      >
        <Image
          src={image}
          objectFit="cover"
          width="100%"
          //   width={{ base: "auto", md: "520px", xl: "520px" }}
          height={{ base: "auto", md: "512px", xl: "512px" }}
          margin="auto"
          borderRadius="0.5rem"
        />
        <br />
        <Box padding="5" mb="3" 
            height={{ base: "auto", md: "200px", xl: "200px" }}
        
        >
          <Heading fontSize={{ base: "auto", md: "2xl", xl: "2xl" }}>
            {heading}
          </Heading>
          <br />
          <Text mb="3">{description}</Text>
        </Box>
        <hr />
        <Text paddingX="5" paddingY="2">{date}</Text>
      </Box>
    </>
  );
};

export default CategoryCard;
