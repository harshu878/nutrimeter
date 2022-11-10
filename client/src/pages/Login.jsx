import { useState } from "react";
import {
  Flex,
  Heading,
  Input,
  Button,
  InputGroup,
  Stack,
  InputLeftElement,
  chakra,
  Box,
  Link,
  Avatar,
  FormControl,
  FormHelperText,
  InputRightElement,
  Image
} from "@chakra-ui/react";
import { FaUserAlt, FaLock } from "react-icons/fa";

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

const Login = () => {
 
  return (
    <Flex
      flexDirection="column"
      width="100wh"
      height="100vh"
     
      justifyContent="center"
      alignItems="center"
    >
      <Stack
        flexDir="column"
        mb="2"
        justifyContent="center"
        alignItems="center"
        p="2rem"
        backgroundColor="whiteAlpha.900"
        boxShadow="md"
      >
        {/* <Avatar bg="teal.500" />
        <Heading color="teal.400">Welcome</Heading> */}
          {/* <Image width={'100%'} src='https://i.postimg.cc/y8LKTYmp/Color-logo-no-background.png' alt='Dan Abramov' /> */}
          <img src="https://i.postimg.cc/7hV5qrzC/Color-logo-no-background.png" width="280" height="auto" alt="Cronometer"></img>
        <Box minW={{ base: "90%", md: "468px" }}>
          <form>
            <Stack
              spacing={4}
            
            >
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<CFaUserAlt color="gray.300" />}
                  />
                  <Input type="email" placeholder="Email Address" />
                </InputGroup>
              </FormControl>
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    color="gray.300"
                    children={<CFaLock color="gray.300" />}
                  />
                  <Input
                    type="password"
                    placeholder="Password"
                  />
                  <InputRightElement width="4.5rem">
                 
                  </InputRightElement>
                </InputGroup>
             
              </FormControl>
              <Button
                borderRadius={0}
                type="submit"
                // variant="solid"
                // colorScheme="teal"
                width="full"
              >
                LOGIN
              </Button>
              <Flex justifyContent= 'space-between'>
      <Box >
      New to us?{' '} 
        <Link color="tomato" href="#">
       Sign Up Now
        </Link>
        </Box>
                  <Link color="tomato" >Forgot password?</Link>
               
      </Flex>
            </Stack>
          </form>
        </Box>
      </Stack>
    
    </Flex>
  );
};

export default Login;
