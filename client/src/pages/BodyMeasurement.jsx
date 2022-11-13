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
  Avatar,
  FormControl,
  FormHelperText,
  InputRightElement,
  Image,
  Text,
  VStack,
  HStack
} from "@chakra-ui/react";

import { FaUserAlt, FaLock } from "react-icons/fa";
import Footer from "../components/Footer";
import NavBar from './NavBar';
import { Link, useNavigate } from "react-router-dom";
const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

const BodyMeasurement = () => {
    //to fetch the data let bodyMeasurement = JSON.parse(localStorage.getItem('bodyMeasurement')) || []

    const navigate=useNavigate()
    const [data, setData] = useState({
    
       
        born: "",
        gender:'Male',
        height:'',
        weight:'',
      });
 
    const handleChange = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value });
      };
      
      const handleSubmit = async (e) => {
        e.preventDefault()
       
        localStorage.setItem("bodyMeasurement", JSON.stringify(data));
        navigate("/login")
      };
  return (
    <>
<NavBar/>
    <Flex
      flexDirection="column"
      minH={'100vh'}
  
      alignItems="center"
    >
      <Stack
        flexDir="column"
        m="2"
        justifyContent="center"
        alignItems="center"
        p="2rem"
        mt={'8rem'}
        mb='8rem'
        backgroundColor="whiteAlpha.900"
        boxShadow="md"
      >
        {/* <Avatar  src="https://i.postimg.cc/d1df0QB8/Color-logo-with-out-text-no-background.png" bg="teal.500" /> */}
        <Heading  m="4" color="tomato">Your Body Type</Heading>
      
       
        <Box minW={{ base: "90%", md: "468px" }}>
          <form onSubmit={handleSubmit}>
 
            
<VStack  spacing={'1'} >
<Stack   spacing={'2'} direction='row'>
<Text mr='2'>Gender:{' '}</Text>
  <select required value={data.gender} style={{width:'9.4rem'}}  onChange={handleChange} name="gender">
                {/* Male,Female, Prefer Not to Say */}
                <option>Male</option>
                <option>Female</option>
             
              </select>
              </Stack>
{/* <RadioGroup
 onChange={setGen} value={gen}
  name='gender'
required
    >
  <Stack   spacing={'2'} direction='row'>
    <Text mr='2'>Gender:{' '}</Text>
    <Radio colorScheme='green' value='male'>
   Male
    </Radio>
    <Radio colorScheme='green' value='female'>
     Female
    </Radio>
  </Stack>
</RadioGroup> */}
   <HStack>
<Text mr='2'>Born:{' '}</Text>
<Input
name="born"
onChange={handleChange}
value={data.born}
required
 placeholder="Born: "
 size="md"
 type="date"
/>

</HStack>

<HStack>
<Text mr='2'>Height:</Text>
<Input name="height"
onChange={handleChange}
value={data.height}
required type='number' size="md" placeholder="Height in CM"/>
</HStack>
<HStack>
<Text mr='2'>Weight:</Text>
<Input  name="weight"
onChange={handleChange}
value={data.weight}
required type='number' size="md" placeholder="Weight in KG"/>
</HStack>
</VStack>
<Button
                borderRadius={2}
                type="submit"
                // variant="solid"
                // colorScheme="teal"
                width="full"
                mr='2'
                mt='6'
              >
                Submit
              </Button>
</form>
        </Box>
      </Stack>
    
    </Flex>
    <Footer/>
    </>
  );
};

export default BodyMeasurement;
