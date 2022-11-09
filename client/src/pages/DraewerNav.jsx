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
    <Box marginRight={5}>
      <Button mL={"auto"} width={6} onClick={onOpen}>
        <IconButton icon={<FaBars></FaBars>}></IconButton>
      </Button>
      <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <Center w={2}>
          <DrawerContent display={"Flex"} alignItems={"flex-end"} justifyContent={"center"}>
            <Box ml={4}>
              {/* <Image 
             
              width={{ base: "100px", md: "120px", lg: "156px" }}
              src="https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/5fd37c83dfa3ccb0d2d9836f_myhours-logo.svg"
            ></Image> */}
            </Box>
            <DrawerBody>
              <Box p="1">
                <NavLink to="/usecases">
                  <Text fontWeight="bold">Use Cases</Text>
                </NavLink>
              </Box>
              <Box p="1">
                <NavLink to="/pricing">
                  <Text fontWeight="bold">Pricing</Text>
                </NavLink>
              </Box>

              <Box p="1">
                <NavLink to="/support">
                  <Text fontWeight="bold">Support</Text>
                </NavLink>
              </Box>
              {/* Sign in */}
              <Box p="1">
                  <Link>
                    <Text fontWeight="bold" >
                      Log Out
                    </Text>
                  </Link>
                  <NavLink to="/singin">
                    <Text fontWeight="bold">Sign In</Text>
                  </NavLink>
              </Box>
              {/* Sign Up */}
              <Box p="1">
                  <Flex gap={2} alignItems={"center"}>
                    <IconButton isRound={true} size="md" alignSelf="flex-end" icon={<FaUserCheck></FaUserCheck>}></IconButton>
                    <Text color="red.500" fontWeight="bold" fontSize={fontSize}>
                    </Text>
                  </Flex>
                  <NavLink to="/signup">
                    <Button bg={"blue.400"} colorScheme="teal" color="white">
                      <Text fontSize={fontSize}>Get My Hours Free</Text>
                    </Button>
                  </NavLink>
              </Box>
              <Box>
                <IconButton
                  onClick={toggleColorMode}
                  isRound={true}
                  size="sm"
                  alignSelf="flex-end"
                  icon={colorMode === "light" ? <FaSun /> : <FaMoon />}
                ></IconButton>
              </Box>
            </DrawerBody>
          </DrawerContent>
        </Center>
      </Drawer>
    </Box>
  );
}
export default DraewerNav;