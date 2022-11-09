import React from 'react'
import {NavLink} from "react-router-dom";
import NavBar from './NavBar';
import { Box, Flex, Link, Image,HStack, Icon, Text,Spacer,ButtonGroup,Button,Heading, Highlight} from '@chakra-ui/react';

const fontSize = { base: "10px", sm: "12px", md: "15px", lg: "18px" };
const HomePage = () => {
  return (
  <Box>
        <NavBar/>

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
                <Highlight fontSize={fontSize} query={["Login."]} styles={{ py: "1", fontWeight: "bold", color: "orange.500" }}>
                Already have an account? Login.
          </Highlight>
                </Text>
          </Box>
        </Flex>
        <Box>
          <Image
            w={{ base: "100%", md: "300px", lg:"500px" }} mt={{base:"20px"}} ml={{base:"-80px", sm:"-50px", md:"-30px"}}
            src={"https://cdn1.cronometer.com/2021/landing/cronometer-hero-graphic.svg"}
          ></Image>
        </Box>
      </Flex>
    </Box>

  )
}

export default HomePage;
