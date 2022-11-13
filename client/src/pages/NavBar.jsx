import React, { useContext } from "react";
import { GiAppleSeeds } from "react-icons/gi";
import { FaAppleAlt } from "react-icons/fa";
import { Button, Flex, Heading, Spacer, 
  Box, Image,  Text, useMediaQuery, HStack, IconButton, useColorMode,
  Popover, PopoverTrigger,PopoverContent,PopoverHeader,PopoverArrow,PopoverCloseButton,PopoverBody,
   Link, useTheme} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import DraewerNav from "./DraewerNav";

const fontSize = { base: "10px", sm: "12px", md: "15px", lg: "18px" };

const NavBar = () => {


  const { colorMode, toggleColorMode } = useColorMode();

  const theme = useTheme();
  const [isMatch] = useMediaQuery("(max-width: 800px)");
  // console.log("isMatch:", isMatch);

  // console.log("theme:", theme);
  return (
    <Flex boxShadow="md" width="full" h={20} paddingInline={5} marginRight={4} justifyContent={"space-between"} alignItems={"center"} gap="2">
      <Box>
        <NavLink to="/">
          <Image
            width={{ base: "100px", md: "150px", lg: "196px" }} 
            src="https://i.postimg.cc/7hV5qrzC/Color-logo-no-background.png"
          ></Image>
        </NavLink>
      </Box>
      {isMatch ? (
        <DraewerNav></DraewerNav>
      ) : (
        <HStack gap={3}>
         
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
            <NavLink to="/support" >
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