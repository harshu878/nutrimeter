import React from 'react'
import {NavLink} from "react-router-dom";
import NavBar from './NavBar';
import { Box, Flex, Link, Image,HStack, Icon, Text,Spacer,ButtonGroup,Button,Heading,Grid,GridItem, Highlight} from '@chakra-ui/react';

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


        {/* section-4 starts */}
        <Grid
        w={"90%"} m="auto" mt="70px"
        justifyContent={"center"}
        templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(1, 1fr)", lg: "repeat(3, 1fr)" }}
        gap={6}
        textAlign="center"
        alignItems={"center"}
      >
        <GridItem margin={"auto"} w="80%" display={"grid"} gap={5}>
          <Image src="https://cdn1.cronometer.com/2021/landing/community-icon.svg" w="100px" m="auto"></Image>
          <Heading  fontSize={25} color="gray.600">
          Over 5 million users
          </Heading>
          <Text color={"text"} fontSize={20}>
          Join the community to get tips and inspiration from other users on our forums and Facebook group.
          </Text>
          
        </GridItem>
        <GridItem w="80%" margin={"auto"} display={"grid"} gap={5}>
          <Image src="https://cdn1.cronometer.com/2021/landing/nutrition-icon.svg" w="100px" m="auto"></Image>
          <Heading  fontSize={25} color="gray.600">
          Accurate nutrition data
          </Heading>
          <Text color={"text"} fontSize={20}>
          Be confident that the food you log has the correct nutrition data. We verify every food submission
           for accuracy.
          </Text>
        </GridItem>

        <GridItem w="80%" margin={"auto"} display={"grid"} gap={5}>
          <Image src="https://cdn1.cronometer.com/2021/landing/security-icon.svg" w="100px" m="auto"></Image>
          <Heading  fontSize={25} color="gray.600">
          Data privacy & security
          </Heading>
          <Text color={"text"} fontSize={20}>
          We take the security of our users' accounts seriously - we will never sell your account data to third parties.
          </Text>
        </GridItem>
      </Grid>
      {/* section 4 ends here */}

      {/* section -5 starts */}
      <Flex mt="120px">
        <Text fontSize={{ base: "25px", md: "30px", lg: "40px" }} color="black.600" m={"auto"} fontWeight="bold">
        Develop healthy habits
        </Text>
        </Flex>
        <Flex w={{base:"60%", md:"70%", lg:"50%"}} m="auto" textAlign={"center"} mt="15px">
        <Text fontSize={{ base: "18px", md: "20px", lg: "24px" }} color="black.600" m={"auto"}>
        Count your calories, ensure you're meeting nutrient targets, and see your progress over time.</Text>
        </Flex>
        {/* section-5 ends here */}


        {/* section-6 starts */}
        <Grid
        w={"90%"} m="auto" mt="70px"
        justifyContent={"center"}
        templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }}
        templateRows={{ base: "repeat(6, 1fr)", md: "repeat(3, 1fr)", lg: "repeat(2, 1fr)" }}
        gap={6}
        textAlign="center"
        alignItems={"center"}
      >

          <GridItem w="80%" margin={"auto"} display={"grid"} gap={5}>
          <Image src="https://cdn1.cronometer.com/2021/landing/micronutrients-icon.svg" w="100px" m="auto"></Image>
          <Heading  fontSize={25} color="gray.600">
          Track up to 82 micronutrients
          </Heading>
          <Text color={"text"} fontSize={20}>
          Log your meals and track all your macro and micronutrients.
          </Text>
        </GridItem>

        <GridItem w="80%" margin={"auto"} display={"grid"} gap={5}>
          <Image src="https://cdn1.cronometer.com/2021/landing/diary-icon.svg" w="100px" m="auto"></Image>
          <Heading  fontSize={25} color="gray.600">
          Log meals, exercise and biometrics
          </Heading>
          <Text color={"text"} fontSize={20}>
          Plus, you can create custom foods, recipes, exercises and biometrics!
          </Text>
        </GridItem>

        <GridItem w="80%" margin={"auto"} display={"grid"} gap={5}>
          <Image src="https://cdn1.cronometer.com/2021/landing/reports-icon.svg" w="100px" m="auto"></Image>
          <Heading  fontSize={25} color="gray.600">
          Valuable reports and charts
          </Heading>
          <Text color={"text"} fontSize={20}>
          Learn how nutrients and biometrics correlate over time.
          </Text>
        </GridItem>

        <GridItem w="80%" margin={"auto"} display={"grid"} gap={5}>
          <Image src="https://cdn1.cronometer.com/2021/landing/scale-icon.svg" w="100px" m="auto"></Image>
          <Heading  fontSize={25} color="gray.600">
          Custom diet settings
          </Heading>
          <Text color={"text"} fontSize={20}>
          Set weight, macro & nutrient targets to meet your goals.
          </Text>
        </GridItem>

        <GridItem w="80%" margin={"auto"} display={"grid"} gap={5}>
          <Image src="https://cdn1.cronometer.com/2021/landing/fasting-icon.svg" w="100px" m="auto"></Image>
          <Heading  fontSize={25} color="gray.600">
          Fasting timer
          </Heading>
          <Text color={"text"} fontSize={20}>
          Track your intermittent fasts and see their effect over time.
          </Text>
        </GridItem>

        <GridItem w="80%" margin={"auto"} display={"grid"} gap={5}>
          <Image src="https://cdn1.cronometer.com/2021/landing/food-icon.svg" w="100px" m="auto"></Image>
          <Heading  fontSize={25} color="gray.600">
          Diet support
          </Heading>
          <Text color={"text"} fontSize={20}>
          Whether you’re Keto, Vegan, or on one recommended by your doctor.
          </Text>
        </GridItem>
        
      </Grid>
      {/* section-6 ends */}

      {/* section-7 starts here */}
      <Box w={"48%"} textAlign={"center"} m="auto">
        <Text fontSize={{ base: "22px", md: "24px", lg: "26px" }} mt="110px" mb="40px" fontWeight="bold" color="gray.600">
        Find out if you're getting the vitamins and minerals you need with our food diary app. </Text>
        <Button fontSize={"xl"} _hover={{bg:"orange.600",color:"white"}} m="auto" bg={"orange.400"} h={14} w={{ base: "14rem", md: "16rem", lg: "20rem" }} color="white">
        Sign Up - It's Free!
      </Button>
      </Box>
      {/* section-7 ends */}

      {/* section-8 starts */}
      <Flex mt="120px">
        <Text fontSize={{ base: "25px", md: "30px", lg: "40px" }} color="black.600" m={"auto"} fontWeight="bold">
        Sync with Apps and Devices
        </Text>
        </Flex>
        <Flex w={{base:"60%", md:"70%", lg:"50%"}} m="auto" textAlign={"center"} mt="15px">
        <Text fontSize={{ base: "18px", md: "20px", lg: "24px" }} color="black.600" m={"auto"}>
        Sync Cronometer with these activity trackers, Apple Health, Google Fit and Samsung Health.
        </Text>
        </Flex>


    </Box>

  )
}

export default HomePage;
