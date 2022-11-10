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
  Image,
  Checkbox,
  Text
} from "@chakra-ui/react";
import { FaUserAlt, FaLock } from "react-icons/fa";

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

const Signup = () => {
  
    const [checkedItems, setCheckedItems] = useState([false, false])

  const allChecked = checkedItems.every(Boolean)
  const isIndeterminate = checkedItems.some(Boolean) && !allChecked
  return (
    <Flex
      flexDirection="column"
      width="100wh"
      height="100vh"
     backgroundColor='#FAFAFA'
      justifyContent="center"
      alignItems="center"
    >
          
        <Heading size='lg' p='10' >Create Your Free Account </Heading>
      <Stack
      boxShadow= 'rgba(0, 0, 0, 0.16) 0px 1px 4px'
           flexDir="column"
           m="3"
           p="3rem"
           justifyContent="center"
           alignItems="center"
           backgroundColor='#FEFFFF'
           width={'700px'}
      >
  
          {/* <Image width={'100%'} src='https://i.postimg.cc/y8LKTYmp/Color-logo-no-background.png' alt='Dan Abramov' /> */}
       
        <Box minW={{ base: "90%", md: "600px" }}>
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
             
           
            </Stack>
          </form>
        </Box>
      </Stack >
      <Stack   
       width={'700px'}
      boxShadow= 'rgba(0, 0, 0, 0.16) 0px 1px 4px'
           flexDir="column"
           m="3"
           p="3rem"
        //    justifyContent="center"
        //    alignItems="center"
           backgroundColor='#FEFFFF'>
           <Heading alignSelf={'center'} size='md' >Terms of Service & Privacy Settings</Heading>  

           <Checkbox
        isChecked={allChecked}
        isIndeterminate={isIndeterminate}
        onChange={(e) => setCheckedItems([e.target.checked, e.target.checked])}
        
  
      >
       Check All
      </Checkbox>
      <Text  fontSize='s' color={'gray.600'} as='b'>
                            By checking the box below you are indicating you have read and agree to our Terms of Service and Privacy Policy.
                        </Text>
      <Checkbox
          
          isChecked={checkedItems[0]}
          onChange={(e) => setCheckedItems([e.target.checked, checkedItems[1]])}
        >
           I agree to the cronometer.com Terms of Service
        </Checkbox>
        <Text  fontSize='s' color={'gray.600'}  as='b' >
                   In order to give you the best experience using Cronometer, we need certain data permissions. (These are optional and can be updated in your settings any time.)
                        </Text>
        <Checkbox
             isChecked={checkedItems[1]}
             onChange={(e) => setCheckedItems([checkedItems[0], e.target.checked])}
        >
          I agree to receive newsletters and promotional materials.
        </Checkbox>
      
</Stack>

<Flex mb='4' p='4'>  
    <Button colorScheme='green' size='lg' width={'650px'}>
    Create Account
  </Button>
  </Flex>
    </Flex>
  );
};

export default Signup;
