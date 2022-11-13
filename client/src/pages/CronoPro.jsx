import React from 'react'
import {NavLink} from "react-router-dom";
import NavBar from './NavBar';
import Footer from '../components/Footer';
import { Box, Flex, Link, Image,HStack, Icon, Text,Spacer,ButtonGroup,SimpleGrid,
  Button,Heading,Grid,GridItem, Highlight} from '@chakra-ui/react';

const fontSize = { base: "10px", sm: "12px", md: "15px", lg: "18px" };
const CronoPro = () => {
  return (
  <Box>
    {/* Navbar with humberger menu */}
        <NavBar/>

      {/* Section 1 of propage starts */}
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
           ml={"50px"} fontSize={{base: "25px", sm: "30px", md: "30px", lg: "35px"}} mt={{base:"30px"}}
           >
          Nutrition tracking software<br/> for health professionals
          </Heading>

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
            fontSize={{ base: 20, sm:20, md: 25, lg:30}} ml={"50px"} 
          >
            Sophisticated data for you, simplified<br/> diet tracking for your clients.
          </Text>
          <Text fontSize={{ base: 20, sm:20, md: 25, lg:30}} p="20px" ml={"40px"} color="green.400" fontWeight={"bold"} >
          Free 30-Day Trial
        </Text>
          
          <Box p="1" ml={"50px"}>
              <NavLink to="/">
                <Button bg={"green.400"} colorScheme="orange.600" color="white" h="60px" w="300px">
                  <Text fontSize={fontSize} p="25px" >Sign Up</Text>
                </Button>
              </NavLink>
                
          </Box>
        </Flex>
        <Box>
          <Image
            w={{ base: "300px", md: "300px", lg:"400px" }} mt={{base:"20px"}} 
            src={"https://raw.githubusercontent.com/harshu878/nutrimeter/b24e158e4f21902c1fe890e3fcec626ae022ebaf/client/public/Images/manExplain.svg"}
          ></Image>
        </Box>
      </Flex>
      {/* section 1 of propage ends here */}


      <Grid templateColumns='repeat(1, 1fr)' mt="40px">
          <GridItem  h='0.5' w="90%" bg='gray' m="auto" />
        </Grid>

      {/* section -3 starts */}
      <Flex mt="90px">
        <Text fontSize={{ base: "25px", md: "30px", lg: "40px" }} color="black.600" m={"auto"} fontWeight="bold">
        Adherence Meets Convenience
        </Text>
        </Flex>
        <Flex w={{base:"60%", md:"70%", lg:"50%"}} m="auto" textAlign={"center"} mt="15px">
        <Text fontSize={{ base: "18px", md: "20px", lg: "24px" }} color="black.600" m={"auto"}>
        Monitor your clients nutrition.        </Text>
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
          <Image src="https://raw.githubusercontent.com/harshu878/nutrimeter/b24e158e4f21902c1fe890e3fcec626ae022ebaf/client/public/Images/diaryApp.svg" w="100px" m="auto"></Image>
          <Heading  fontSize={25} color="gray.600">
          Client Food Diary App
          </Heading>
          <Text color={"text"} fontSize={20}>
          Clients log their meals, exercise and metrics with the Cronometer App.</Text>
        </GridItem>
        <GridItem w="80%" margin={"auto"} display={"grid"} gap={5}>
          <Image src="https://raw.githubusercontent.com/harshu878/nutrimeter/b24e158e4f21902c1fe890e3fcec626ae022ebaf/client/public/Images/hipaa.svg" w="100px" m="auto"></Image>
          <Heading  fontSize={25} color="gray.600">
          HIPAA Compliant
          </Heading>
          <Text color={"text"} fontSize={20}>
          We follow HIPAA standards with the option to sign a BAA.
          </Text>
        </GridItem>

        <GridItem w="80%" margin={"auto"} display={"grid"} gap={5}>
          <Image src="https://raw.githubusercontent.com/harshu878/nutrimeter/b24e158e4f21902c1fe890e3fcec626ae022ebaf/client/public/Images/clientNReport.svg" w="100px" m="auto"></Image>
          <Heading  fontSize={25} color="gray.600">
          Client Nutrition Reports
          </Heading>
          <Text color={"text"} fontSize={20}>
          Generate and download insightful reports to upload to EMR software.</Text>
        </GridItem>
      </Grid>
      {/* section 4 ends here */}


      <Flex mt="90px">
        <Text fontSize={{ base: "25px", md: "30px", lg: "40px" }} color="black.600" m={"auto"} fontWeight="bold">
        Eliminate Paper Food Diaries
        </Text>
        </Flex>
        <Flex w={{base:"60%", md:"70%", lg:"50%"}} m="auto" textAlign={"center"} mt="15px">
        <Text fontSize={{ base: "18px", md: "20px", lg: "24px" }} color="gray.600" m={"auto"}fontWeight="bold">
        Used by nutritionists, dietitians, research teams, schools, and hospitals worldwide.        </Text>
        </Flex>
              
              <Box w={"48%"} textAlign={"center"} m="auto">
        <Button fontSize={"xl"} _hover={{bg:"green.600",color:"white"}} m="auto" mt="30px" bg={"green.400"} h={14} w={{ base: "14rem", md: "16rem", lg: "20rem" }} color="white">
        Sign Up
      </Button>
      </Box>

      <Flex mt="90px">
        <Text fontSize={{ base: "25px", md: "30px", lg: "40px" }} color="black.600" m={"auto"} fontWeight="bold">
        Exceed Expectations
        </Text>
        </Flex>
        <Flex w={{base:"60%", md:"70%", lg:"50%"}} m="auto" textAlign={"center"} mt="15px">
        <Text fontSize={{ base: "18px", md: "20px", lg: "24px" }} color="gray.600" m={"auto"}fontWeight="bold">
        Deliver powerful results. </Text>
        </Flex>


        <Flex w="90%"  m="auto">
      <Grid w="100%" h="auto" gap="50px"
          borderRadius={"10px"} m="auto" mt="70px"
        justifyContent={"center"} 
        templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(1, 1fr)", lg: "repeat(2, 1fr)" }}
        textAlign="center"
        alignItems={"center"}
      >
        <GridItem w="auto" m="auto" mt="20px"  display={"grid"}>
          <Image w={{base:"500px", md:"500px", lg:"500px"}} mt="100px"  src="https://raw.githubusercontent.com/harshu878/nutrimeter/b24e158e4f21902c1fe890e3fcec626ae022ebaf/client/public/Images/graphReport.svg"></Image>
        </GridItem>
        <GridItem m="auto" w="80%" display={"grid"}>
          <Heading  fontSize={23} color="gray.600" mt='20px' textAlign={"start"}>
          Easy to set up and manage </Heading>
          <Text mt="20px" fontSize={{base:"20px", md:"22px", lg:"22px"}} textAlign="justify">
          Organize clients into groups; view and edit your clients' nutrition targets, settings and data.
           </Text>
           <Heading  fontSize={23} color="gray.600" mt='20px' textAlign={"start"}>
           Share foods and recipes </Heading>
          <Text mt="20px" fontSize={{base:"20px", md:"22px", lg:"22px"}} textAlign="justify">
          Easily share custom foods and recipes for your clients to use.           </Text>
           <Heading  fontSize={23} color="gray.600" mt='20px' textAlign={"start"}>
           Track your clients' progress</Heading>
          <Text mt="20px" fontSize={{base:"20px", md:"22px", lg:"22px"}} textAlign="justify">
          Educate, enable and empower your clients to live a healthy lifestyle.           </Text>
             
        </GridItem>
      </Grid>
      </Flex>

      <Flex w="90%"  m="auto">
      <Grid w="100%" h="auto" gap="50px"
          borderRadius={"10px"} m="auto" mt="70px"
        justifyContent={"center"} 
        templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(1, 1fr)", lg: "repeat(2, 1fr)" }}
        textAlign="center"
        alignItems={"center"}
      >
        
        <GridItem m="auto" w="80%" display={"grid"}>
          <Heading  fontSize={23} color="gray.600" mt='20px' textAlign={"start"}>
          In-app client messaging </Heading>
          <Text mt="20px" fontSize={{base:"20px", md:"22px", lg:"22px"}} textAlign="justify">
          Easily connect with your clients with our secure, in-app client messaging.
           </Text>
           <Heading  fontSize={23} color="gray.600" mt='20px' textAlign={"start"}>
           Customize the client view</Heading>
          <Text mt="20px" fontSize={{base:"20px", md:"22px", lg:"22px"}} textAlign="justify">
          Choose what the client can view as they log their nutrition with the Cronometer app.</Text>
          <Heading  fontSize={23} color="gray.600" mt='20px' textAlign={"start"}>
          Grow your practice</Heading>
          <Text mt="20px" fontSize={{base:"20px", md:"22px", lg:"22px"}} textAlign="justify">
          Feature your business in our professional directory and get discovered by other Cronometer app users.       </Text>
             
        </GridItem>

        <GridItem w="auto" m="auto" mt="20px"  display={"grid"}>
          <Image w={{base:"500px", md:"500px", lg:"500px"}} mt="100px"  src="https://raw.githubusercontent.com/harshu878/nutrimeter/b24e158e4f21902c1fe890e3fcec626ae022ebaf/client/public/Images/percent.svg"></Image>
        </GridItem>
      </Grid>
      </Flex>

      <Grid templateColumns='repeat(1, 1fr)' mt="40px">
          <GridItem  h='0.5' w="90%" bg='gray' m="auto" />
        </Grid>

        <Flex mt="90px">
        <Text fontSize={{ base: "25px", md: "30px", lg: "40px" }} color="black.600" m={"auto"} fontWeight="bold">
        Cronometer Pro Reviews
        </Text>
        </Flex>
        <Flex w={{base:"60%", md:"70%", lg:"50%"}} m="auto" textAlign={"center"} mt="15px">
        <Text fontSize={{ base: "18px", md: "20px", lg: "24px" }} color="gray.600" m={"auto"}fontWeight="bold">
        Client nutrition tracking software for any size company.</Text>
        </Flex>

        <Grid w="80%" h="auto" border="1px solid lightgray"
          borderRadius={"10px"} m="auto" mt="70px"
        justifyContent={"center"}
        templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)", lg: "repeat(2, 1fr)" }}
        gap={6}
        textAlign="center"
        alignItems={"center"}
      >
        <GridItem margin={"auto"} w="80%" display={"grid"} gap={5} >
            <Image src="https://github.com/harshu878/nutrimeter/blob/main/client/public/Images/standford.png?raw=true" w="380px" m="auto"></Image>
        </GridItem>

        <GridItem w="80%" margin={"auto"} display={"grid"} gap={5}>
          <Text color={"text"} fontSize={18} textAlign="justify">
          Cronometer has been a great tool for our dietary intervention studies.
           We can adjust the targets for any nutrient for each person,
            we can review their logs in real time to make timely recommendations,
             can keep other data (such as blood sugars or sleep time) in the same
              platform, and the export of data is easy. We also really like the charts
               and reports! On the participant’s side, entry of foods is easy with
                many shortcuts available and a robust food database with accurate nutrient information
          </Text>
          <Text color={"text"} fontSize={20} as="i">
          Stanford University<br/>
          Nutrition Studies Group
          </Text>
        </GridItem>
      </Grid>

      <Flex mt="90px">
        <Text fontSize={{ base: "25px", md: "30px", lg: "40px" }} color="black.600" m={"auto"} fontWeight="bold">
        Ready to Get Started?
        </Text>
        </Flex>
        <Flex w={{base:"60%", md:"70%", lg:"50%"}} m="auto" textAlign={"center"} mt="15px">
        <Text fontSize={{ base: "18px", md: "20px", lg: "24px" }} color="gray.600" m={"auto"}fontWeight="bold">
        Sign up today.</Text>
        </Flex>
        <Box w={"48%"} textAlign={"center"} m="auto">
        <Button fontSize={"xl"} _hover={{bg:"green.600",color:"white"}} m="auto" mt="30px" bg={"green.400"} h={14} w={{ base: "14rem", md: "16rem", lg: "20rem" }} color="white">
        Sign Up
      </Button>
      </Box>

      
        <Flex w={{base:"60%", md:"70%", lg:"50%"}} m="auto" textAlign={"center"} mt="15px">
        <Text fontSize={{ base: "18px", md: "20px", lg: "24px" }} color="black" m={"auto"}fontWeight="bold">
        Not sure if Cronometer Pro is right for you?<br/>Contact Us</Text>
        </Flex>
        
                
          <Footer></Footer>

    </Box>

  )
}

export default CronoPro;
