import React from 'react'
import {NavLink} from "react-router-dom";
import NavBar from './NavBar';
import Footer from '../components/Footer';
import { Box, Flex, Link, Image,HStack, Icon, Text,Spacer,ButtonGroup,SimpleGrid,
  Button,Heading,Grid,GridItem, Highlight} from '@chakra-ui/react';

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
              <NavLink to="/signup">
                <Button bg={"orange.500"} colorScheme="orange.500" color="white" h="60px">
                  <Text fontSize={fontSize} p="25px" >Sign Up - It's Free!</Text>
                </Button>
              </NavLink>
                <Text fontSize={fontSize} p="20px" ml="-20px">
                  Already have an account? <NavLink to="/login" _hover={{color:"orange.500", fontWeight:"bold"}}>Login.</NavLink>
                </Text>
          </Box>
        </Flex>
        <Box>
          <Image
            w={{ base: "300px", md: "400px", lg:"550px" }} mt={{base:"20px"}} ml={{base:"-50px", sm:"-30px", md:"-30px"}}
            src="https://raw.githubusercontent.com/harshu878/nutrimeter/b24e158e4f21902c1fe890e3fcec626ae022ebaf/client/public/Images/mobile.svg"
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
        <Image w={{ base: "100px", md: "140px", lg:"170px" }} mt={{base:"20px"}} src="https://raw.githubusercontent.com/harshu878/nutrimeter/b24e158e4f21902c1fe890e3fcec626ae022ebaf/client/public/Images/womenshealth.svg"></Image>

        <Image w={{ base: "100px", md: "140px", lg:"170px" }} mt={{base:"20px"}} src="https://raw.githubusercontent.com/harshu878/nutrimeter/b24e158e4f21902c1fe890e3fcec626ae022ebaf/client/public/Images/lifehacker.svg"></Image>

        <Image w={{ base: "100px", md: "140px", lg:"170px" }} mt={{base:"20px"}} src="https://raw.githubusercontent.com/harshu878/nutrimeter/b24e158e4f21902c1fe890e3fcec626ae022ebaf/client/public/Images/mensjournal.svg"></Image>
      </Flex>

      <Flex mt="40px">
        <Text fontSize={{ base: "20px", md: "22px", lg: "25px" }} color="primary" m={"auto"}>
        Available on Web, iOS and Android
        </Text>
        </Flex>

        <Flex flexWrap={"wrap"} w={"90%"} gap={{base:3, md:3, lg:30}} justifyContent={"center"} m={"auto"} mt="10px">
        <Image w={{ base: "100px", md: "140px", lg:"170px" }} mt={{base:"20px"}} src="https://raw.githubusercontent.com/harshu878/nutrimeter/b24e158e4f21902c1fe890e3fcec626ae022ebaf/client/public/Images/appstore.svg"></Image>

        <Image w={{ base: "100px", md: "140px", lg:"170px" }} mt={{base:"20px"}} src="https://raw.githubusercontent.com/harshu878/nutrimeter/b24e158e4f21902c1fe890e3fcec626ae022ebaf/client/public/Images/googlePlay.svg"></Image>
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
          <Image src="https://raw.githubusercontent.com/harshu878/nutrimeter/b24e158e4f21902c1fe890e3fcec626ae022ebaf/client/public/Images/5million.svg" w="100px" m="auto"></Image>
          <Heading  fontSize={25} color="gray.600">
          Over 5 million users
          </Heading>
          <Text color={"text"} fontSize={20}>
          Join the community to get tips and inspiration from other users on our forums and Facebook group.
          </Text>
          
        </GridItem>
        <GridItem w="80%" margin={"auto"} display={"grid"} gap={5}>
          <Image src="https://raw.githubusercontent.com/harshu878/nutrimeter/b24e158e4f21902c1fe890e3fcec626ae022ebaf/client/public/Images/nutData.svg" w="100px" m="auto"></Image>
          <Heading  fontSize={25} color="gray.600">
          Accurate nutrition data
          </Heading>
          <Text color={"text"} fontSize={20}>
          Be confident that the food you log has the correct nutrition data. We verify every food submission
           for accuracy.
          </Text>
        </GridItem>

        <GridItem w="80%" margin={"auto"} display={"grid"} gap={5}>
          <Image src="https://raw.githubusercontent.com/harshu878/nutrimeter/b24e158e4f21902c1fe890e3fcec626ae022ebaf/client/public/Images/privacy.svg" w="100px" m="auto"></Image>
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
          <Image src="https://raw.githubusercontent.com/harshu878/nutrimeter/b24e158e4f21902c1fe890e3fcec626ae022ebaf/client/public/Images/logMeals.svg" w="100px" m="auto"></Image>
          <Heading  fontSize={25} color="gray.600">
          Track up to 82 micronutrients
          </Heading>
          <Text color={"text"} fontSize={20}>
          Log your meals and track all your macro and micronutrients.
          </Text>
        </GridItem>

        <GridItem w="80%" margin={"auto"} display={"grid"} gap={5}>
          <Image src="https://raw.githubusercontent.com/harshu878/nutrimeter/b24e158e4f21902c1fe890e3fcec626ae022ebaf/client/public/Images/logMeals.svg" w="100px" m="auto"></Image>
          <Heading  fontSize={25} color="gray.600">
          Log meals, exercise and biometrics
          </Heading>
          <Text color={"text"} fontSize={20}>
          Plus, you can create custom foods, recipes, exercises and biometrics!
          </Text>
        </GridItem>

        <GridItem w="80%" margin={"auto"} display={"grid"} gap={5}>
          <Image src="https://raw.githubusercontent.com/harshu878/nutrimeter/b24e158e4f21902c1fe890e3fcec626ae022ebaf/client/public/Images/report.svg" w="100px" m="auto"></Image>
          <Heading  fontSize={25} color="gray.600">
          Valuable reports and charts
          </Heading>
          <Text color={"text"} fontSize={20}>
          Learn how nutrients and biometrics correlate over time.
          </Text>
        </GridItem>

        <GridItem w="80%" margin={"auto"} display={"grid"} gap={5}>
          <Image src="https://raw.githubusercontent.com/harshu878/nutrimeter/b24e158e4f21902c1fe890e3fcec626ae022ebaf/client/public/Images/customDiet.svg" w="100px" m="auto"></Image>
          <Heading  fontSize={25} color="gray.600">
          Custom diet settings
          </Heading>
          <Text color={"text"} fontSize={20}>
          Set weight, macro & nutrient targets to meet your goals.
          </Text>
        </GridItem>

        <GridItem w="80%" margin={"auto"} display={"grid"} gap={5}>
          <Image src="https://raw.githubusercontent.com/harshu878/nutrimeter/b24e158e4f21902c1fe890e3fcec626ae022ebaf/client/public/Images/fasting.svg" w="100px" m="auto"></Image>
          <Heading  fontSize={25} color="gray.600">
          Fasting timer
          </Heading>
          <Text color={"text"} fontSize={20}>
          Track your intermittent fasts and see their effect over time.
          </Text>
        </GridItem>

        <GridItem w="80%" margin={"auto"} display={"grid"} gap={5}>
          <Image src="https://raw.githubusercontent.com/harshu878/nutrimeter/b24e158e4f21902c1fe890e3fcec626ae022ebaf/client/public/Images/dietFruits.svg" w="100px" m="auto"></Image>
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
          <NavLink to='/signup'>
        Sign Up - It's Free!
        </NavLink>
      </Button>
      </Box>
      {/* section-7 ends */}

      {/* section-8 starts */}
      <Flex mt="120px">
        <Text fontSize={{ base: "25px", md: "30px", lg: "37px" }} color="gray.600" m={"auto"} fontWeight="bold">
        Sync with Apps and Devices
        </Text>
        </Flex>
        <Flex w={{base:"60%", md:"70%", lg:"50%"}} m="auto" textAlign={"center"} mt="15px">
        <Text fontSize={{ base: "18px", md: "20px", lg: "24px" }} color="black.600" m={"auto"}>
        Sync Cronometer with these activity trackers, Apple Health, Google Fit and Samsung Health.
        </Text>
        </Flex>
        <Flex>
        <Image m="auto" mt="30px" src="https://github.com/harshu878/nutrimeter/blob/main/client/public/Images/devices.png?raw=true"></Image>
        </Flex>
        {/* section-8 ends */}

        <Grid templateColumns='repeat(1, 1fr)' mt="40px">
          <GridItem  h='0.5' w="90%" bg='gray' m="auto" />
        </Grid>

         {/* section-9 starts */}
        <Flex mt="100px">
        <Text fontSize={{ base: "25px", md: "30px", lg: "37px" }} color="gray.600" m={"auto"} fontWeight="bold">
        Cronometer Reviews
        </Text>
        </Flex>
        <Flex w={{base:"60%", md:"70%", lg:"50%"}} m="auto" textAlign={"center"} mt="15px">
        <Text fontSize={{ base: "18px", md: "20px", lg: "24px" }} color="black.600" m={"auto"}>
        Check us out in your app store.
        </Text>
        </Flex>

      {/* section-10 of 3 divisions with img */}
      <Grid w="80%" h="auto" border="1px solid lightgray"
          borderRadius={"10px"} m="auto" mt="70px"
        justifyContent={"center"}
        templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)", lg: "repeat(2, 1fr)" }}
        gap={6}
        textAlign="center"
        alignItems={"center"}
      >
        <GridItem margin={"auto"} w="80%" display={"grid"} gap={5}>
          <Heading  fontSize={27} color="orange.500" textAlign="justify" mt={{base:"0px",md:"-350px",lg:"0px"}}>
            <Image w="60px" mb="-22px" ml="-12px" src="https://cdn1.cronometer.com/2021/landing/quote-icon.svg"></Image>
          I wasn't the only one concerned about the unreliability of the macros in both MyFitnessPal and Carb Manager.
          </Heading>
        </GridItem>

        <GridItem w="80%" margin={"auto"} display={"grid"} gap={5}>
          <Text color={"text"} fontSize={20} textAlign="justify">
          I started Keto in July. MyFitnessPal seemed pretty cool. Spent hours setting
           it up and entering recipes only to discover the macros were not reliable
            due to all the contributions by the community. I was so frustrated. Then
             I found a review of several apps (on the Keto Mojo website) and discovered
            I wasn't the only one concerned about unreliability of the macros
               on both MFP and CarbManager (tried that too). Behold Cronometer!
                I love this app. It draws from nutrition databases with minimal
                 community contributions so much, much more reliability.
                  There are many more free features. The user interface
                   is easy to navigate. I'm very happy with Cronometer.
          </Text>
          <Text color={"text"} fontSize={20} as="i">
          iOS Review
          September 23, 2019
          </Text>
        </GridItem>

        <GridItem w="80%" margin={"auto"} display={"grid"} gap={5} mt={{base:"0px",md:"-500px",lg:"-150px"}}>
          <Image src="https://raw.githubusercontent.com/harshu878/nutrimeter/b24e158e4f21902c1fe890e3fcec626ae022ebaf/client/public/Images/appstore.svg" w="180px" m="auto"></Image>
        </GridItem>
      </Grid>
      {/* section-10 ends */}

{/* section 11 starts */}

      <Grid w="80%" h="auto" border="1px solid lightgray"
          borderRadius={"10px"} m="auto" mt="70px"
        justifyContent={"center"}
        templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)", lg: "repeat(2, 1fr)" }}
        gap={6}
        textAlign="center"
        alignItems={"center"}
      >
        

        <GridItem w="80%" margin={"auto"} display={"grid"} gap={5}>
          <Text color={"text"} fontSize={20} textAlign="justify">
          This app is my dream! I've been on the hunt for something that can
          track my daily nutritional needs and the majority of apps seem to
          think that only means macros. This tracks EVERYTHING! Getting my 
          daily vitamins through food is so important to me and this has 
          taken a HUGE load off of my plate. I bought gold within minutes.
           This is set up great, easy to use, links with my FitBit.
            I could go on and on. 
            Android Review
            November 23, 2020
          </Text>
          <Text color={"text"} fontSize={20} as="i">
          Android Review<br/>
          November 23, 2020
          </Text>
        </GridItem>
        <GridItem margin={"auto"} w="80%" display={"grid"} gap={5}>
          <Heading  fontSize={27} color="orange.500" textAlign="justify" mt={{base:"0px",md:"-210px",lg:"0px"}}>
            <Image w="60px" mb="-22px" ml="-33px" src="https://cdn1.cronometer.com/2021/landing/quote-icon.svg"></Image>
            Cronometer will track EVERYTHING! ... It's easy to use and links with my FitBit.          </Heading>
            <Image src="https://raw.githubusercontent.com/harshu878/nutrimeter/b24e158e4f21902c1fe890e3fcec626ae022ebaf/client/public/Images/googlePlay.svg" w="180px" m="auto"></Image>
        </GridItem>
      </Grid>

{/* section-12 green image */}
<Flex w="full" bg="gray.200" m="auto" mt="40px">
      <Grid w="70%" h="auto"
          borderRadius={"10px"} m="auto" mt="70px"
        justifyContent={"center"}
        templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)", lg: "repeat(2, 1fr)" }}
        textAlign="center"
        alignItems={"center"}
      >
        <GridItem w="80%" m="auto" mt="20px"  display={"grid"}>
          <Image src="https://raw.githubusercontent.com/harshu878/nutrimeter/b24e158e4f21902c1fe890e3fcec626ae022ebaf/client/public/Images/manExplain.svg"></Image>
        </GridItem>
        <GridItem m="auto" w="100%" display={"grid"}>
        <Image w="260px"  m="auto" src="https://github.com/harshu878/nutrimeter/blob/main/client/public/Images/Color%20logo%20-%20no%20background.png?raw=true"></Image>
          <Heading  fontSize={23} color="gray.600" mt='20px'>
          Are you a healthcare professional?  </Heading>
          <Text mt="20px" fontSize={{base:"20px", md:"22px", lg:"22px"}}>Check out our software designed for nutritionists, dietitians,
             research teams, schools, and hospitals.</Text>
             <Button bg={"white.500"} colorScheme="white.500"  border="2px solid green" color="green" h="60px" w="300px" m="auto" mt="20px">
                  <Text fontSize={fontSize} p="25px" >Learn Abou Pro</Text>
              </Button>
        </GridItem>
      </Grid>
      </Flex>


      <Flex mt="100px">
        <Text fontSize={{ base: "25px", md: "30px", lg: "37px" }} color="gray.600" m={"auto"} fontWeight="bold">
        We are Canadian
        </Text>
        </Flex>
        <Flex w={{base:"60%", md:"70%", lg:"50%"}} m="auto" textAlign={"center"} mt="15px">
        <Text fontSize={{ base: "18px", md: "20px", lg: "24px" }} color="black.600" m={"auto"}>
        Independently owned and operated by people who care about their users' nutrition.
        </Text>
        </Flex>

        <Flex w="70%" m="auto" mt="40px">
          <Image src="https://github.com/harshu878/nutrimeter/blob/main/client/public/Images/members.jpeg?raw=true"></Image>
        </Flex>
        <Text m="auto" mt="30px" w="70%" fontSize={{base:"15px", md:"18px", lg:"20px"}} textAlign="center">
          Our headquarters are based in the idyllic mountain town of Revelstoke, BC, Canada.
           We are a team of over 25 professionals brought together by a love of nutrition,
            skiing, biking and the great outdoors.
          </Text>
          <Flex>
          <Button bg={"white.500"} colorScheme="white.500"  border="2px solid orange" color="orange" h="60px" w="300px" m="auto" mt="20px">
                  <Text fontSize={fontSize} p="25px" >Learn Abou Pro</Text>
          </Button>
          </Flex>

          <Grid templateColumns='repeat(1, 1fr)' mt="40px">
          <GridItem  h='0.5' w="90%" bg='gray' m="auto" />
        </Grid>

        <Flex w="70%" m="auto" mt="40px">
        </Flex>
        <Text m="auto" mt="30px" w="70%" fontSize={{base:"15px", md:"18px", lg:"20px"}} textAlign="center">
        Help us spread the good word about nutrition and become an affiliate.
          </Text>
          <Flex>
          <Button bg={"white.500"} colorScheme="white.500"  border="2px solid orange" color="orange" h="60px" w="300px" m="auto" mt="20px">
                  <Text fontSize={fontSize} p="25px" >Become an Affiliate</Text>
          </Button>
          </Flex>

          {/* Homepage footer */}
          <Footer></Footer>

    </Box>

  )
}

export default HomePage;
