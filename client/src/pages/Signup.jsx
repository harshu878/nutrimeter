import { useEffect, useState } from "react";

import { useNavigate} from 'react-router-dom'
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
import axios from 'axios'
import { useDispatch, useSelector } from "react-redux";
import { SignupApi } from "../redux/auth/auth.actions";
import Footer from "../components/Footer";
import NavBar from "./NavBar";
const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);
const Signup = () => {
  const {error}=useSelector(s=>s.auth)
  const {loading}=useSelector(s=>s.auth)
  const {bool}=useSelector(s=>s.auth)
  
  const [formData, setFormData] = useState({
		name: "",
		email: "",
		password: "",
	});
  const dispatch=useDispatch()

  const navigate=useNavigate()
  
	const { name, email, password} = formData;

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
  }
  useEffect(()=>{
    if(bool){
       navigate("/bodyM")
    }
 },[bool])
  const handleSubmit =  (e) => {
    //  console.log({ name, email, password })
		e.preventDefault();
    dispatch(SignupApi({ name, email, password }))
  }

   
    const [checkedItems, setCheckedItems] = useState([false, false])

  const allChecked = checkedItems.every(Boolean)
  const isIndeterminate = checkedItems.some(Boolean) && !allChecked
  return (
    <>
    <NavBar/>
    <Flex
      flexDirection="column"
      // width="100wh"
      // height="100vh"
    
     
     backgroundColor='#FAFAFA'
      justifyContent="center"
      alignItems="center"
    >
          
        <Heading size='lg' p='10' >Create Your Free Account </Heading>
        <form onSubmit={handleSubmit}>
      <Stack
       width={'70vw'}
      boxShadow= 'rgba(0, 0, 0, 0.16) 0px 1px 4px'
           flexDir="column"
           m="3"
           p="3rem"
           justifyContent="center"
           alignItems="center"
           backgroundColor='#FEFFFF'
           
      >
  
          {/* <Image width={'100%'} src='https://i.postimg.cc/by8LKTYmp/Color-logo-no-background.png' alt='Dan Abramov' /> */}
       
        <Box minW={{ base: "90%", md: "600px" }}>
        
            <Stack
              spacing={4}
              width={'60vw'}
            >
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<CFaUserAlt color="gray.300" />}
                  />
                  <Input  name="email"
              onChange={handleChange}
              value={formData.email}
              required type="email" placeholder="Email Address" />
                </InputGroup>
              </FormControl>
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<CFaUserAlt color="gray.300" />}
                  />
                  <Input  name="name"
              onChange={handleChange}
              value={formData.name}
              required type="text" placeholder="Name" />
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
                    name="password"
                    minlength="6"
                    onChange={handleChange}
                    value={formData.password}
                    required
                    type="password"
                    placeholder="Password"
                  />
                  <InputRightElement width="4.5rem">
                 
                  </InputRightElement>
                </InputGroup>
             
              </FormControl>
             
           
            </Stack>
      
        </Box>
      </Stack >
      <Stack   
      width={'70vw'}
      boxShadow= 'rgba(0, 0, 0, 0.16) 0px 1px 4px'
           flexDir="column"
           m="3"
           p="3rem"
        //    justifyContent="center"
        //    alignItems="center"
           backgroundColor='#FEFFFF'>
           <Heading alignSelf={'center'} size='md' >Terms of Service & Privacy Settings</Heading>  

           <Checkbox
           required
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
           I agree to the nutrimeter.com Terms of Service
        </Checkbox>
        <Text  fontSize='s' color={'gray.600'}  as='b' >
                   In order to give you the best experience using Nutrimeter, we need certain data permissions. (These are optional and can be updated in your settings any time.)
                        </Text>
        <Checkbox
             isChecked={checkedItems[1]}
             onChange={(e) => setCheckedItems([checkedItems[0], e.target.checked])}
        >
          I agree to receive newsletters and promotional materials.
        </Checkbox>
      
</Stack>
{error &&<Stack   
      
      boxShadow= 'rgba(0, 0, 0, 0.16) 0px 1px 4px'
           flexDir="column"
           m="3"
         textAlign={'center'}
        //    justifyContent="center"
        //    alignItems="center"
        backgroundColor={'red.100'}>
        
        <Text as='b'>Error! A user for that e-mail address already exists. Please enter a different e-mail address.</Text>
</Stack>}
<Flex alignItems={'center'} justifyContent="center" mb='4' p='4' >  
    <Button type="submit"  isLoading={loading} colorScheme='green' width={'60vw'} size='lg'  >
    Create Account
  </Button>
  </Flex>
  </form>
    </Flex>
    <Footer/>
    </>
  );
};

export default Signup;
