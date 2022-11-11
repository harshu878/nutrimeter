import React from 'react';
import { SiInstagram } from "react-icons/si";
import { BsFacebook,BsTwitter } from "react-icons/bs";
import { TfiYoutube } from "react-icons/tfi";
import {Box, Flex, Grid, GridItem, IconButton, Image, Container, Heading, HStack, Text, VStack} from "@chakra-ui/react"

const Footer = () => {
  return (
        <Box h="auto" bg="gray.700" mt="60px">
            {/* Social media icons section*/}
            <Grid w="300px" h="100px" m="auto"  templateColumns='repeat(4, 1fr)' gap={4}>
                <GridItem  w="auto" mt="50px">
                <IconButton isRound={true} bg="none" color="white" border="1px solid white" size="lg"  _hover={{bg:"orange.500"}} icon={<SiInstagram></SiInstagram>}></IconButton>
                </GridItem>
                <GridItem  w="auto" mt="50px">
                <IconButton isRound={true} bg="none" color="white" border="1px solid white" size="lg"  _hover={{bg:"orange.500"}} icon={<BsFacebook></BsFacebook>}></IconButton>
                </GridItem>
                <GridItem  w="auto" mt="50px">
                <IconButton isRound={true} bg="none" color="white" border="1px solid white" size="lg"  _hover={{bg:"orange.500"}} icon={<BsTwitter></BsTwitter>}></IconButton>
                </GridItem>
                <GridItem  w="auto" mt="50px">
                <IconButton isRound={true} bg="none" color="white" border="1px solid white" size="lg"  _hover={{bg:"orange.500"}} icon={<TfiYoutube></TfiYoutube>}></IconButton>
                </GridItem>
            </Grid>
            {/* social media icons section ends */}

            {/* google img section starts */}
            <Grid  w={{base:"200px", md:"300px", lg:"400px"}}
             h="100px"  m="auto" templateColumns='repeat(2, 1fr)' >
                <GridItem w={{base:"90px", md:"150px", lg:"180px"}} m="auto">
                    <Image  src="https://cdn1.cronometer.com/2021/landing/ios-icon.svg"></Image>
                </GridItem >
                <GridItem w={{base:"90px", md:"150px", lg:"180px"}} m="auto">
                <Image  src="https://cdn1.cronometer.com/2021/landing/android-icon.svg"></Image>
                </GridItem>
            </Grid>
            {/* google img section neds */}

            <Grid templateColumns='repeat(1, 1fr)' mt="40px">
          <GridItem  h='0.5' w="90%" bg='gray' m="auto" />
        </Grid>


      <Flex
        w={"100%"}
        p={5}
        flexDirection={{ base: "column", md: "row" }}
        gap={10}
        justifyContent={"space-around"}
        alignItems={{ base: "center", md: "flex-start" }}
      >
        <VStack alignItems={{ base: "center", md: "flex-start" }}>
          <Image w={{base:"200px", md:"200px", lg:"220px"}} src="https://cdn1.cronometer.com/2021/landing/crono-logo-white.svg"></Image>
        </VStack>

        {/* col 2 */}
        <VStack alignItems={{ base: "center", md: "flex-start" }} color="white">
          <Text as="b">Cronometer</Text>
          <Text _hover={{color:"orange.500"}}>For Individuals</Text>
          <Text _hover={{color:"orange.500"}}>For Professionals</Text>
          <Text _hover={{color:"orange.500"}}>Privacy</Text>
          <Text _hover={{color:"orange.500"}}>Terms</Text>
        </VStack>

        {/* col 3 */}
        <VStack alignItems={{ base: "center", md: "flex-start" }} color="white">
          <Text as="b">The Company</Text>
          <Text _hover={{color:"orange.500"}}>About Us</Text>
          <Text _hover={{color:"orange.500"}}>Crono Blog</Text>
          <Text _hover={{color:"orange.500"}}>Crono Forums</Text>
          <Text _hover={{color:"orange.500"}}>Jobs</Text>
          <Text _hover={{color:"orange.500"}}>Support</Text>
        </VStack>

        {/* col 4 */}
        <VStack alignItems={{ base: "center", md: "flex-start" }} color="white">
          <Text as="b">Partners & Affiliates</Text>
          <Text>Affilate Program</Text>
          <Text _hover={{color:"orange.500"}}>Media Kit</Text>
        </VStack>

       
        
      </Flex>
      <Flex m="auto" w="70%" textAlign={"center"}>
      <Text as="b"  color="white" m="auto">Copyright © 2011-2022<br/>
      All rights reserved</Text>
      </Flex>

      <Grid templateColumns='repeat(1, 1fr)' >
          <GridItem  h='100px' w="full" bg='gray.700' m="auto" />
        </Grid>

           
        

        
            
        </Box>
        
  )
}

export default Footer