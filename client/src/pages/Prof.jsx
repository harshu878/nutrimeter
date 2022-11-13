import { SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react";
import Footer from "../components/Footer";
import NavBar from "./NavBar";



function Prof(){
    return (
        <Box>
      <NavBar />
      <Box p={10} borderTop={"1px"} color={"gray.300"}>
        <Flex flexWrap={"wrap"} justifyContent={"space-between"}>
          <Flex m={5}>
            <Text
              fontSize={"15px"}
              letterSpacing={"1px"}
              color={"rgb(235,124,59)"}
            >
              Nutrimeter
            </Text>
            <Text color={"gray.500"} fontSize={"14px"} letterSpacing={"1px"}>
              {" >"} Professional Version
            </Text>
          </Flex>
          <Box pr={"50px"}>
            <InputGroup borderRadius={100}  m={"auto"} w={{base: "250px", md: "350px", lg: "370px", xl: "370px" }}>
              <InputLeftElement
                pointerEvents="none"
                children={<SearchIcon size color="gray.400" />}
              />
              <Input
              size={"md"}
              pl={10}
                borderRadius={100}
                type="text"
                borderColor={"gray.400"}
                placeholder="Search"
                bgColor={"white"}
              />
            </InputGroup>
          </Box>
        </Flex>
      </Box>

      {/* Next  */}
      <Stack pb={10} ml={{base:10,lg:200}} mr={{base:0,lg:200}}>
        <Box textAlign={"left"}>
          <Text fontSize={"30px"} mb={3}>
          Professional Version
          </Text>
          <Text color={"gray.600"} fontFamily={"sans-serif"}>
            User Manual for Nutrimeter on Pro
          </Text>
        </Box>
        {/* Second  */}
        <Flex flexWrap={"wrap"}>
        <Box mt={5} textAlign={"left"}>
            <Text mt={5} color={"gray.600"} mb={3} fontSize={"18px"} fontWeight={500}>
            Pro - Getting Started
            </Text>
            <Text mt={5} color={"gray.600"} fontSize={"16px"} fontWeight={400}>
            Professional Subscription Overview
            </Text>
          </Box>
          <Spacer/>
          <Box mt={5} mr={"56px"} textAlign={"left"}>
            <Text mt={5} color={"gray.600"} mb={3} fontSize={"18px"} fontWeight={500}>
            Pro Account Settings
            </Text>
            <Text mt={5} color={"gray.600"} fontSize={"16px"} fontWeight={400}>
            Pro-HIPAA
            </Text>
            <Text mt={5} color={"gray.600"} fontSize={"16px"} fontWeight={400}>
            Pro - Account
            </Text>
            <Text mt={5} color={"gray.600"} fontSize={"16px"} fontWeight={400}>
            Pro - Branding
            </Text>
            <Text mt={5} color={"gray.600"} fontSize={"16px"} fontWeight={400}>
            Pro - Listing
            </Text>
          </Box>
        </Flex>
        <Flex flexWrap={"wrap"}>
        <Box mt={5} textAlign={"left"}>
            <Text mt={5} color={"gray.600"} mb={3} fontSize={"18px"} fontWeight={500}>
            Clients
            </Text>
            <Text mt={5} color={"gray.600"} fontSize={"16px"} fontWeight={400}>
            Pro Messaging
            </Text>
            <Text mt={5} color={"gray.600"} fontSize={"16px"} fontWeight={400}>
            Pro - Clients Tab
            </Text>
            <Text mt={5} color={"gray.600"} fontSize={"16px"} fontWeight={400}>
            Pro - Client Profile
            </Text>
            <Text mt={5} color={"gray.600"} fontSize={"16px"} fontWeight={400}>
            Pro - Client Settings Menu
            </Text>
          </Box>
          <Spacer/>
          <Box mt={5} mr={140} textAlign={"left"}>
            <Text mt={5} color={"gray.600"} mb={3} fontSize={"18px"} fontWeight={500}>
            Foods Tab
            </Text>
            <Text mt={5} color={"gray.600"} fontSize={"16px"} fontWeight={400}>
            Foods
            </Text>
          </Box>
        </Flex>
      </Stack>
      <Footer/>
    </Box>
    )
}

export default Prof