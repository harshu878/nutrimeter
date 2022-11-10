import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  IconButton,
  Image,
  Center,
  Stack,
  Text,
  useColorMode,
  useDisclosure,
  Flex,
} from "@chakra-ui/react";
import { FaSun, FaMoon, FaBars, FaUserCheck } from "react-icons/fa";
import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
const fontSize = { base: "10px", sm: "12px", md: "15px", lg: "18px" };

function DraewerNav() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [placement, setPlacement] = React.useState("top");


  return (
    <Box>
      <Button mL={"auto"} width={6} onClick={onOpen}>
        <IconButton icon={<FaBars></FaBars>}></IconButton>
      </Button>
      <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <Center w={2}>
          <DrawerContent  display={"Flex"} alignItems={"center"} justifyContent={"center"}>
            <Box ml={4}>
              <Image 
             
              width={{ base: "150px", md: "160px", lg: "190px" }}
              src="/pic/logo.png"
            ></Image>
            </Box>
            <DrawerBody>
              <Box p="1">
                <NavLink to="/">
                  <Text _hover={{color:"orange"}} fontWeight="bold">Products</Text>
                </NavLink>
              </Box>
              <Box p="1">
                <NavLink to="/">
                  <Text fontWeight="bold" _hover={{color:"orange"}}>Blog</Text>
                </NavLink>
              </Box>

              <Box p="1">
                <NavLink to="/">
                  <Text fontWeight="bold" _hover={{color:"orange"}}>Forums</Text>
                </NavLink>
              </Box>
              <Box p="1">
                  <NavLink to="/">
                    <Text fontWeight="bold" _hover={{color:"orange"}} >
                      About
                    </Text>
                  </NavLink>
                  
              </Box>
              <Box p="1">
                  <NavLink to="/">
                    <Text fontWeight="bold" _hover={{color:"orange"}}>
                      Support
                    </Text>
                  </NavLink>
                  
              </Box>
              <Box p="1">
                  {/* <Flex gap={2} alignItems={"center"}>
                    <IconButton isRound={true} size="md" alignSelf="flex-end" icon={<FaUserCheck></FaUserCheck>}></IconButton>
                    <Text color="red.500" fontWeight="bold" fontSize={fontSize}>
                    </Text>
                  </Flex> */}
                  <NavLink to="/">
                    <Button bg={"orange.400"} colorScheme="orange" color="white">
                      <Text fontSize={fontSize}>Login</Text>
                    </Button>
                  </NavLink>
              </Box>
            </DrawerBody>
          </DrawerContent>
        </Center>
      </Drawer>
    </Box>
  );
}
export default DraewerNav;