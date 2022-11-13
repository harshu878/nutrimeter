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
  useDisclosure, Popover, PopoverTrigger,PopoverContent,PopoverHeader,PopoverArrow,PopoverCloseButton,PopoverBody,
  Flex,
} from "@chakra-ui/react";
import {  FaBars } from "react-icons/fa";
import { FaAppleAlt } from "react-icons/fa";
import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
const fontSize = { base: "10px", sm: "12px", md: "15px", lg: "18px" };

function DraewerNav() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [placement, setPlacement] = React.useState("top");


  return (
    <Box marginRight={5}>
      <Button mL={"auto"} width={6} onClick={onOpen}>
        <IconButton _hover={{bg:"orange.400", color:"white"}} icon={<FaBars></FaBars>}></IconButton>
      </Button>
      <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <Center w={2}>
          <DrawerContent  display={"Flex"} alignItems={"center"} justifyContent={"center"}
          >
            <Box ml={4}>
              <Image 
             
              width={{ base: "150px", md: "160px", lg: "190px" }}
              src="https://i.postimg.cc/7hV5qrzC/Color-logo-no-background.png"
            ></Image>
            </Box>
            <DrawerBody>
              <Popover isLazy w="200px">
                <PopoverTrigger>
                  <Button bg="none" color="black" _hover={{color:"orange.500"}} fontSize="16px" fontWeight="bold" ml="-12px">Products </Button>
                  {/* <Button bg="none" color="black" _hover={{color:"orange.500"}} fontSize={fontSize} fontWeight="none" ml="-12px">Products </Button> */}

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


              <Box p="1">
                <NavLink to="/blog">
                  <Text fontWeight="bold" _hover={{color:"orange"}}>Blog</Text>
                </NavLink>
              </Box>

              <Box p="1">
                <NavLink to="/">
                  <Text fontWeight="bold" _hover={{color:"orange"}}>Forums</Text>
                </NavLink>
              </Box>
              <Box p="1">
                  <NavLink to="/about">
                    <Text fontWeight="bold" _hover={{color:"orange"}} >
                      About
                    </Text>
                  </NavLink>
                  
              </Box>
              <Box p="1">
                  <NavLink to="/support">
                    <Text fontWeight="bold" _hover={{color:"orange"}}>
                      Support
                    </Text>
                  </NavLink>
                  
              </Box>
              <Box p="1">
                  <NavLink to="/login">
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