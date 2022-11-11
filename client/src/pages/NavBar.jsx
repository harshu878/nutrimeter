import React from "react";
import { GiAppleSeeds } from "react-icons/gi";
import { FaAppleAlt } from "react-icons/fa";
import { Button, Flex, Heading, Spacer, Box, Image, IconButton, useColorMode,
  Popover, PopoverTrigger,PopoverContent,PopoverHeader,PopoverArrow,PopoverCloseButton,PopoverBody,
   Link, useTheme, Text, useMediaQuery, HStack } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import DraewerNav from "./DraewerNav";


const NavBar = () => {
    const fontSize = { base: "10px", sm: "12px", md: "15px", lg: "18px" };


  const { colorMode, toggleColorMode } = useColorMode();

  const theme = useTheme();
  const [isMatch] = useMediaQuery("(max-width: 800px)");
  console.log("isMatch:", isMatch);

  console.log("theme:", theme);
  return (
    <Flex boxShadow="md" width="full" h={20} paddingInline={150} marginRight={4} justifyContent={"space-between"} alignItems={"center"} gap="5">
      <Box>
        <Link href="/">
          <Image
            width={{ base: "100px", md: "150px", lg: "196px" }} 
            src="/pic/logo.png"
          ></Image>
        </Link>
      </Box>
      {isMatch ? (
        <DraewerNav></DraewerNav>
      ) : (
        <HStack gap={3}>
          {/* <Box p="1" >
            <NavLink to="/">
              <Text  fontSize={fontSize} _hover={{color:"orange"}}>
                Products
              </Text>
            </NavLink>
          </Box> */}


          {/* pop over -------------- */}
          <Popover isLazy w="200px">
  <PopoverTrigger>
    <Button bg="none" color="black" _hover={{color:"orange.500"}} fontSize={fontSize} fontWeight="none">Products </Button>
  </PopoverTrigger>
  <PopoverContent>
    <PopoverHeader fontWeight='semibold'>Cronometer Products</PopoverHeader>
    <PopoverArrow />
    <PopoverCloseButton />
    <NavLink to="/">
    <PopoverBody _hover={{color:"orange"}}>
    <IconButton isRound={true} bg="green.300" color="red.500"  size="lg" mr="20px"  icon={<FaAppleAlt></FaAppleAlt>}>
    </IconButton>
      For Individuals.
    </PopoverBody>
    </NavLink>

    <NavLink to="/pro">
    <PopoverBody _hover={{color:"orange"}}>
    <IconButton isRound={true} bg="red.200" color="green.500"  size="lg" mr="20px"  icon={<FaAppleAlt></FaAppleAlt>}>
    </IconButton>
      For Healthcare Professionals.
    </PopoverBody>
    </NavLink>
  </PopoverContent>
</Popover>


          <Box p="1" >
            <NavLink to="/" >
              <Text  fontSize={fontSize} colorScheme="orange.500" _hover={{color:"orange"}}>
                Support
              </Text>
            </NavLink>
          </Box>
          <Box p="1">
            <NavLink to="/blog">
              <Text  fontSize={fontSize} _hover={{color:"orange"}}>
                Blog
              </Text>
            </NavLink>
          </Box>

          <Box p="1">
            <NavLink to="/">
              <Text  fontSize={fontSize} _hover={{color:"orange"}}>
                Forums
              </Text>
            </NavLink>
          </Box>

          <Box p="1">
            <NavLink to="/about">
              <Text  fontSize={fontSize} _hover={{color:"orange"}}>
                About
              </Text>
            </NavLink>
          </Box>
          
          <Box p="1">
              <NavLink to="/">
                <Button border="1px solid orange" bg={"white.400"} colorScheme="orange.500" color="orange.300">
                  <Text fontSize={fontSize} _hover={{color:"orange"}}>Login</Text>
                </Button>
              </NavLink>
          </Box>
        </HStack>
      )}
    </Flex>
  );
};

export default NavBar;