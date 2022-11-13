import { useEffect, useState } from "react";
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
 
  Avatar,
  FormControl,
  FormHelperText,
  InputRightElement,
  Image,
  Text
} from "@chakra-ui/react";

import { FaUserAlt, FaLock } from "react-icons/fa";
import Footer from "../components/Footer";
import NavBar from './NavBar';
import { Link, useNavigate } from "react-router-dom";
import { LoginApi } from "../redux/auth/auth.actions";
import { useDispatch, useSelector } from "react-redux";
const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

const Login = () => {
  const {isAuthenticated}=useSelector(s=>s.auth.data)
  const {error}=useSelector(s=>s.auth)
  const {loading}=useSelector(s=>s.auth)
  const {token}=useSelector(s=>s.auth.data)
  const [formData, setFormData] = useState({
    email: "",
    password: "",
});
const dispatch=useDispatch()
const navigate=useNavigate()
const { email, password} = formData;
const handleChange=(e)=>{
	setFormData({ ...formData, [e.target.name]: e.target.value });

}

useEffect(()=>{

   if(isAuthenticated){
      navigate("/checkCalories")
   }
},[isAuthenticated])


const handleSubmit=(e)=>{
    console.log(formData)
  e.preventDefault()
  dispatch(LoginApi(formData))
}

  return (
    <>
<NavBar/>
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
          <form  onSubmit={handleSubmit}>
            <Stack
              spacing={4}
            
            >
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<CFaUserAlt color="gray.300" />}
                  />
                  <Input required   value={formData.email} name='email' onChange={handleChange} type="email" placeholder="Email Address" />
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
                  name='password'
                  value={formData.password}
                  required
                  minlength="6"
                  onChange={handleChange}
                    type="password"
                    placeholder="Password"
                  />
                  <InputRightElement width="4.5rem">
                 
                  </InputRightElement>
                </InputGroup>
             
              </FormControl>
              {error && <Box textAlign={'center'}  backgroundColor={'red.100'} > <Text as='b'>Wrong credentials! invalid username or password.</Text></Box>}
            
              <Button
                borderRadius={0}
                type="submit"
                // variant="solid"
                // colorScheme="teal"
                isLoading={loading}
          
                width="full"
              >
                LOGIN
              </Button>
              <Flex direction={{ base: 'column-reverse', md: 'row' }} justifyContent= 'space-between'>
      <Box >
      New to us?{' '} 
        <Link to="/signup" style={{color:'#ff763f'}} >
       Sign Up Now
        </Link>
        </Box>
                  <Link to="#" style={{color:'#ff763f'}} >Forgot password?</Link>
               
      </Flex>
            </Stack>
          </form>
        </Box>
      </Stack>
    
    </Flex>
    <Footer/>
    </>
  );
};

export default Login;
