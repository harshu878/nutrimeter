import React from "react";
import { Button, Flex, Heading, Spacer, Box, Image, IconButton, useColorMode, Link, useTheme, Text, useMediaQuery, HStack } from "@chakra-ui/react";
import { FaSun, FaMoon, FaUserCheck } from "react-icons/fa";
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
        <Link href="/home">
          <Image
            width={{ base: "100px", md: "150px", lg: "196px" }} 
            src="https://i.postimg.cc/y8LKTYmp/Color-logo-no-background.png"
          ></Image>
        </Link>
      </Box>
      {isMatch ? (
        <DraewerNav></DraewerNav>
      ) : (
        <HStack gap={3}>
          <Box p="1" >
            <NavLink to="/">
              <Text  fontSize={fontSize} _hover={{color:"orange"}}>
                Products
              </Text>
            </NavLink>
          </Box>
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
              <NavLink to="/login">
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