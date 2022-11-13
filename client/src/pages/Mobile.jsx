import { SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  Container,
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



function Mobile(){
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
              {" >"} Mobile App
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
          Mobile App
          </Text>
          <Text color={"gray.600"} fontFamily={"sans-serif"}>
            User Manual for Nutrimeter on Mobile App
          </Text>
        </Box>
        {/* Second  */}
        <Flex flexWrap={"wrap"}>
        <Box mt={5} textAlign={"left"}>
            <Text mt={5} color={"gray.600"} mb={3} fontSize={"18px"} fontWeight={500}>
            Mobile App - Quick Start Guide
            </Text>
            <Text mt={5} color={"gray.600"} fontSize={"16px"} fontWeight={400}>
            Mobile App - Quick Start Guide
            </Text>
          </Box>
          <Spacer/>
          <Box mt={5} mr={"56px"} textAlign={"left"}>
            <Text mt={5} color={"gray.600"} mb={3} fontSize={"18px"} fontWeight={500}>
            Diary
            </Text>
            <Text mt={5} color={"gray.600"} fontSize={"16px"} fontWeight={400}>
            Mobile App - Diary Overview
            </Text>
            <Text mt={5} color={"gray.600"} fontSize={"16px"} fontWeight={400}>
            Mobile App - Add a Food
            </Text>
            <Text mt={5} color={"gray.600"} fontSize={"16px"} fontWeight={400}>
            Mobile App - Barcode Scanner
            </Text>
            <Text mt={5} color={"gray.600"} fontSize={"16px"} fontWeight={400}>
            Mobile App - Add Exercise
            </Text>
            <Text mt={5} color={"gray.600"} fontSize={"16px"} fontWeight={400}>
            Mobile App - Add a Biometric
            </Text>
            <Text mt={5} color={"gray.600"} fontSize={"16px"} fontWeight={400}>
            Mobile App - Add a Note
            </Text>
          </Box>
        </Flex>
        <Flex flexWrap={"wrap"}>
        <Box mt={5} textAlign={"left"}>
            <Text mt={5} color={"gray.600"} mb={3} fontSize={"18px"} fontWeight={500}>
            Trend
            </Text>
            <Text mt={5} color={"gray.600"} fontSize={"16px"} fontWeight={400}>
            Mobile - Charts
            </Text>
            <Text mt={5} color={"gray.600"} fontSize={"16px"} fontWeight={400}>
            Mobile - Chart Library
            </Text>
            <Text mt={5} color={"gray.600"} fontSize={"16px"} fontWeight={400}>
            Mobile - Custom Charts
            </Text>
            <Text mt={5} color={"gray.600"} fontSize={"16px"} fontWeight={400}>
            Mobile - Nutrition Report
            </Text>
          </Box>
          <Spacer/>
          <Box mt={5} textAlign={"left"}>
            <Text mt={5} color={"gray.600"} mb={3} fontSize={"18px"} fontWeight={500}>
            Foods
            </Text>
            <Text mt={5} color={"gray.600"} fontSize={"16px"} fontWeight={400}>
            Mobile - Foods Overview
            </Text>
            <Text mt={5} color={"gray.600"} fontSize={"16px"} fontWeight={400}>
            Mobile - Create a Custom Food
            </Text>
            <Text mt={5} color={"gray.600"} fontSize={"16px"} fontWeight={400}>
            Mobile - Create a Custom Recipe
            </Text>
            <Text mt={5} color={"gray.600"} fontSize={"16px"} fontWeight={400}>
            Mobile - Recipe Importer
            </Text>
            <Text mt={5} color={"gray.600"} fontSize={"16px"} fontWeight={400}>
            Mobile - Set a Cooked Recipe Weight
            </Text>
            <Text mt={5} color={"gray.600"} fontSize={"16px"} fontWeight={400}>
            Mobile - Ask the Oracle
            </Text>
          </Box>
        </Flex>
        <Flex flexWrap={"wrap"}>
        <Box mt={5} textAlign={"left"}>
            <Text mt={5} color={"gray.600"} mb={3} fontSize={"18px"} fontWeight={500}>
            Settings
            </Text>
            <Text mt={5} color={"gray.600"} fontSize={"16px"} fontWeight={400}>
            Mobile - Settings Overview
            </Text>
            <Text mt={5} color={"gray.600"} fontSize={"16px"} fontWeight={400}>
            Mobile - Account
            </Text>
            <Text mt={5} color={"gray.600"} fontSize={"16px"} fontWeight={400}>
            Mobile - Two-Factor Authentication
            </Text>
            <Text mt={5} color={"gray.600"} fontSize={"16px"} fontWeight={400}>
            Mobile - Profile
            </Text>
            <Text mt={5} color={"gray.600"} fontSize={"16px"} fontWeight={400}>
            Mobile - Targets
            </Text>
            <Text mt={5} color={"gray.600"} fontSize={"16px"} fontWeight={400}>
            Mobile - Target Scheduler
            </Text>
          </Box>
          <Spacer/>
          <Box mt={5} textAlign={"left"}>
            <Text mt={5} color={"gray.600"} mb={3} fontSize={"18px"} fontWeight={500}>
            Widgets
            </Text>
            <Text mt={5} color={"gray.600"} fontSize={"16px"} fontWeight={400}>
            Android Home Screen Widgets
            </Text>
            <Text mt={5} color={"gray.600"} fontSize={"16px"} fontWeight={400}>
            iOS Home Screen Widgets
            </Text>
            <Text mt={5} color={"gray.600"} fontSize={"16px"} fontWeight={400}>
            Wear OS Watch App
            </Text>
          </Box>
        </Flex>
      </Stack>
      <Footer />
    </Box>
    )
}

export default Mobile