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


function Web() {
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
              {" >"} Web Version
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
            Web Version
          </Text>
          <Text color={"gray.600"} fontFamily={"sans-serif"}>
            User Manual for Nutrimeter on Web
          </Text>
        </Box>
        {/* Second  */}
        <Flex flexWrap={"wrap"}>
        <Box mt={5} textAlign={"left"}>
            <Text mt={5} color={"gray.600"} mb={3} fontSize={"18px"} fontWeight={500}>
            Web - Quick Start Guide
            </Text>
            <Text mt={5} color={"gray.600"} fontSize={"16px"} fontWeight={400}>
            Web - Quick Start Guide
            </Text>
          </Box>
          <Spacer/>
          <Box mt={5} mr={"56px"} textAlign={"left"}>
            <Text mt={5} color={"gray.600"} mb={3} fontSize={"18px"} fontWeight={500}>
            Diary
            </Text>
            <Text mt={5} color={"gray.600"} fontSize={"16px"} fontWeight={400}>
            Diary Overview
            </Text>
            <Text mt={5} color={"gray.600"} fontSize={"16px"} fontWeight={400}>
            Add a Food
            </Text>
            <Text mt={5} color={"gray.600"} fontSize={"16px"} fontWeight={400}>
            Add an Exercise
            </Text>
            <Text mt={5} color={"gray.600"} fontSize={"16px"} fontWeight={400}>
            Add a Biometric
            </Text>
            <Text mt={5} color={"gray.600"} fontSize={"16px"} fontWeight={400}>
            Custom Biometrics
            </Text>
            <Text mt={5} color={"gray.600"} fontSize={"16px"} fontWeight={400}>
            Add a Note
            </Text>
            <Text mt={5} color={"gray.600"} fontSize={"16px"} fontWeight={400}>
            Add an Exercise
            </Text>
          </Box>
        </Flex>
        <Flex flexWrap={"wrap"}>
        <Box mt={5} textAlign={"left"}>
            <Text mt={5} color={"gray.600"} mb={3} fontSize={"18px"} fontWeight={500}>
            Trend
            </Text>
            <Text mt={5} color={"gray.600"} fontSize={"16px"} fontWeight={400}>
            Trends Overview
            </Text>
            <Text mt={5} color={"gray.600"} fontSize={"16px"} fontWeight={400}>
            Charts
            </Text>
            <Text mt={5} color={"gray.600"} fontSize={"16px"} fontWeight={400}>
            Charts - Chart Library
            </Text>
            <Text mt={5} color={"gray.600"} fontSize={"16px"} fontWeight={400}>
            Charts - Custom Charts
            </Text>
            <Text mt={5} color={"gray.600"} fontSize={"16px"} fontWeight={400}>
            Charts - Glucose Ketone Index (GKI)
            </Text>
            <Text mt={5} color={"gray.600"} fontSize={"16px"} fontWeight={400}>
            Charts - Blood Pressure + Heart Rate
            </Text>
            <Text mt={5} color={"gray.600"} fontSize={"16px"} fontWeight={400}>
            Add an Exercise
            </Text>
          </Box>
          <Spacer/>
          <Box mt={5} textAlign={"left"}>
            <Text mt={5} color={"gray.600"} mb={3} fontSize={"18px"} fontWeight={500}>
            Foods
            </Text>
            <Text mt={5} color={"gray.600"} fontSize={"16px"} fontWeight={400}>
            Foods Overview
            </Text>
            <Text mt={5} color={"gray.600"} fontSize={"16px"} fontWeight={400}>
            Create a Custom Food
            </Text>
            <Text mt={5} color={"gray.600"} fontSize={"16px"} fontWeight={400}>
            Create Custom Recipe
            </Text>
            <Text mt={5} color={"gray.600"} fontSize={"16px"} fontWeight={400}>
            Set Cooked Recipe Weight
            </Text>
            <Text mt={5} color={"gray.600"} fontSize={"16px"} fontWeight={400}>
            Search Food
            </Text>
            <Text mt={5} color={"gray.600"} fontSize={"16px"} fontWeight={400}>
            Ask The Oracle
            </Text>
            <Text mt={5} color={"gray.600"} fontSize={"16px"} fontWeight={400}>
            Add an Exercise
            </Text>
          </Box>
        </Flex>
      </Stack>
    <Footer />
    </Box>
  );
}

export default Web;
