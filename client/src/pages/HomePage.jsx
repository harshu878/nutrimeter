import React from 'react'
import {NavLink} from "react-router-dom";
import NavBar from './NavBar';
import { Box, Flex, Link, Image,HStack, Icon, Text,Spacer,ButtonGroup,Button,Heading, Highlight} from '@chakra-ui/react';

const fontSize = { base: "10px", sm: "12px", md: "15px", lg: "18px" };
const HomePage = () => {
  return (
  <Box>
    {/* Navbar with humberger menu */}
        <NavBar/>

      {/* Section 1 of homepage starts */}
     <Flex
        w={"90%"}
        flexDirection={{
          base: "column",
          md: "row",
          lg: "row",
        }}
        gap={1}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Flex
          gap={4}
          flexDirection={{
            base: "column",
            md: "column",
          }}
          w={{
            base: "90%",
            md: "50%",
          }}
        >
          <Heading color={"gray.600"}
           ml={"100px"} fontSize={{base: "25px", sm: "30px", md: "35px", lg: "50px"}} mt={{base:"30px"}}
           >Eat smarter.<br/>
          Live better.</Heading>

          <Text
            marginTop={{
              base: 0,
              md: 5,
              lg:0
            }}
            marginBottom={{
              base: 0,
              md: 5,
              lg:10
            }}
            fontSize={{ base: 20, sm:20, md: 25, lg:30}} ml={"100px"} 
          >
            Track your calories, exercise,<br/> biometrics and health data.
          </Text>
          
          <Box p="1" ml={"100px"}>
              <NavLink to="/">
                <Button bg={"orange.500"} colorScheme="orange.500" color="white" h="60px">
                  <Text fontSize={fontSize} p="25px" >Sign Up - It's Free!</Text>
                </Button>
              </NavLink>
                <Text fontSize={fontSize} p="20px" ml="-20px">
                  Already have an account? <Link href="/" _hover={{color:"orange.500", fontWeight:"bold"}}>Login.</Link>
                </Text>
          </Box>
        </Flex>
        <Box>
          <Image
            w={{ base: "300px", md: "400px", lg:"550px" }} mt={{base:"20px"}} ml={{base:"-80px", sm:"-50px", md:"-30px"}}
            src={"https://cdn1.cronometer.com/2021/landing/cronometer-hero-graphic.svg"}
          ></Image>
        </Box>
      </Flex>
      {/* section 1 of homepage ends here */}


       {/* Setction - 2*/}
        <Flex mt="40px">
        <Text fontSize={{ base: "20px", md: "22px", lg: "25px" }} color="primary" m={"auto"} >
        As Seen On
        </Text>
        </Flex>
      

      <Flex flexWrap={"wrap"} w={"90%"} gap={{base:10, md:100, lg:130}} justifyContent={"center"} m={"auto"} mt="30px">
        <Image w={{ base: "100px", md: "140px", lg:"170px" }} mt={{base:"20px"}} src="https://cdn1.cronometer.com/2021/landing/media-mention-2.svg"></Image>

        <Image w={{ base: "100px", md: "140px", lg:"170px" }} mt={{base:"20px"}} src="https://cdn1.cronometer.com/2021/landing/media-mention-1.svg"></Image>

        <Image w={{ base: "100px", md: "140px", lg:"170px" }} mt={{base:"20px"}} src="https://cdn1.cronometer.com/2021/landing/media-mention-3.svg"></Image>
      </Flex>

      <Flex mt="40px">
        <Text fontSize={{ base: "20px", md: "22px", lg: "25px" }} color="primary" m={"auto"}>
        Available on Web, iOS and Android
        </Text>
        </Flex>

        <Flex flexWrap={"wrap"} w={"90%"} gap={{base:3, md:3, lg:30}} justifyContent={"center"} m={"auto"} mt="10px">
        <Image w={{ base: "100px", md: "140px", lg:"170px" }} mt={{base:"20px"}} src="https://cdn1.cronometer.com/2021/landing/ios-icon.svg"></Image>

        <Image w={{ base: "100px", md: "140px", lg:"170px" }} mt={{base:"20px"}} src="https://cdn1.cronometer.com/2021/landing/android-icon.svg"></Image>
      </Flex>
      {/* Setction - 2 ends here*/}


      {/* section -3 starts */}
      <Flex mt="90px">
        <Text fontSize={{ base: "25px", md: "30px", lg: "40px" }} color="black.600" m={"auto"} fontWeight="bold">
        Discover your nutrition
        </Text>
        </Flex>
        <Flex w={{base:"60%", md:"70%", lg:"50%"}} m="auto" textAlign={"center"} mt="15px">
        <Text fontSize={{ base: "18px", md: "20px", lg: "24px" }} color="black.600" m={"auto"}>
        Cronometer encourages you to not just count your<br/> calories but to focus on your nutrition as a whole.
        </Text>
        </Flex>
        {/* section-3 ends here */}


    </Box>

  )
}

export default HomePage;
