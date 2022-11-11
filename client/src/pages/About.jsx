import React from 'react';
import NavBar from './NavBar';
import Footer from '../components/Footer';

import { Box,Flex,Text,Image,Button } from '@chakra-ui/react';
const fontSize = { base: "10px", sm: "12px", md: "15px", lg: "18px" };

const About = () => {
  return (
    <Box>
    <NavBar></NavBar>
    <Flex w={{base:"60%", md:"70%", lg:"50%"}} m="auto" textAlign={"center"} mt="15px">
        <Text fontSize={{ base: "18px", md: "20px", lg: "24px" }} color="orange.500" m={"auto"} mt="40px" fontWeight="bold">
        CRONOMETER
        </Text>
        </Flex>
        <Flex >
    <Text fontSize={{ base: "25px", md: "30px", lg: "40px" }} color="gray.700" m={"auto"} fontWeight="bold">
    About the Company
        </Text>
        </Flex>

        {/* text about company */}
        <Flex w={{base:"60%", md:"70%", lg:"90%"}} m="auto" textAlign={"center"} mt="15px">
        <Text fontSize={{ base: "18px", md: "20px", lg: "20px" }} color="gray.600" m={"auto"} mt="40px" textAlign={"justify"}
         >
        Cronometer is the most accurate, comprehensive nutrition tracking app on earth. Unlike
         other apps on the market, our nutritional 
         data is curated from verified, accurate sources. 
         We aim to provide a complete solution – no matter 
         what diet you choose to be on.
        </Text>
        </Flex>

        

        <Flex w={{base:"60%", md:"70%", lg:"90%"}} m="auto" textAlign={"center"} >
        <Text fontSize={{ base: "18px", md: "20px", lg: "20px" }} color="gray.600" m={"auto"} mt="40px" textAlign={"justify"}
         >
            Our CEO, Aaron Davidson, built Cronometer as a side project in 2005.
         He was following the CRON diet (Calorie Restriction with Optimal Nutrition)
          and being the nutrition nerd/software developer that he is, decided to build
           an app to track his diet. Thus, Cronometer was born. It was several
            years later before he came to the conclusion that maybe he was onto
             something and quit his six-figure corporate job to focus on improving Cronometer.
        </Text>
        </Flex>

        

        <Flex w={{base:"60%", md:"70%", lg:"90%"}} m="auto" textAlign={"center"} >
        <Text fontSize={{ base: "18px", md: "20px", lg: "20px" }} color="gray.600" m={"auto"} mt="40px" textAlign={"justify"}
         >
            Cronometer's success has hinged entirely on positive word-of-mouth from its users. The company is still – and plans to continue being – a bootstrap startup to this day.
        </Text>
        </Flex>

        <Flex w="80%" m="auto" textAlign={"center"} mt="30px">
        <Image src="https://cdn1.cronometer.com/2021/landing/cronometer-staff-3-p-1600.jpeg"></Image>
        </Flex>

        <Flex w={{base:"60%", md:"70%", lg:"50%"}} m="auto" textAlign={"center"} mt="15px">
        <Text fontSize={{ base: "18px", md: "20px", lg: "24px" }} color="orange.500" m={"auto"} mt="40px" fontWeight="bold">
        CRONOMETER
        </Text>
        </Flex>
        <Flex >
    <Text fontSize={{ base: "25px", md: "30px", lg: "40px" }} color="gray.700" m={"auto"} fontWeight="bold">
    Who We Are
        </Text>
        </Flex>

        <Flex w={{base:"60%", md:"70%", lg:"90%"}} m="auto" textAlign={"center"} mt="15px">
        <Text fontSize={{ base: "18px", md: "20px", lg: "20px" }} color="gray.600" m={"auto"} mt="40px" textAlign={"justify"}
         >
        While our staff spans the globe our headquarters is based in the small-town
         of Revelstoke, British Columbia, Canada. Revelstoke is a health-centric
          mountain town brimming with endless options for staying active and a
           growing tech community – the perfect combination to call home.
        </Text>
        </Flex>

        

        <Flex w={{base:"60%", md:"70%", lg:"90%"}} m="auto" textAlign={"center"} >
        <Text fontSize={{ base: "18px", md: "20px", lg: "20px" }} color="gray.600" m={"auto"} mt="40px" textAlign={"justify"}
         >
            We are an eclectic mix of web developers, designers, nutrition scientists,
             business majors and personal trainers brought together by a love of nutrition.
              While our company has grown our mission and values have remained the same;
               we believe full spectrum nutrition is the best way to understand your diet’s
                effect on your health. We also believe in empowering everyone by ensuring
                 they have access to accurate and comprehensive data to make informed decisions.
        </Text>
        </Flex>

        

        <Flex w={{base:"60%", md:"70%", lg:"90%"}} m="auto" textAlign={"center"} >
        <Text fontSize={{ base: "18px", md: "20px", lg: "20px" }} color="gray.600" m={"auto"} mt="40px" textAlign={"justify"}
         >
            Our goal is to build the best software for people and professionals to manage their nutrition.
             And we have the passion to make that happen;
             amazing data paired with awesome customer support truly are the Cronometer difference.
        </Text>
        </Flex>


        <Text m="auto" mt="30px" w="70%" fontSize={{base:"15px", md:"18px", lg:"20px"}} textAlign="center">
        Help us spread the good word about nutrition and become an affiliate.
          </Text>
          <Flex>
          <Button bg={"white.500"} colorScheme="white.500"  border="2px solid orange" color="orange" h="60px" w="300px" m="auto" mt="20px">
                  <Text fontSize={fontSize} p="25px" >Become an Affiliate</Text>
          </Button>
          </Flex>

        <Footer></Footer>




        

    </Box>
  )
}

export default About