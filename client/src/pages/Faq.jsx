import {
    Box,
    Flex,
    Input,
    InputGroup,
    InputLeftElement,
    SimpleGrid,
    Text,
    Stack,
    Spacer
  } from "@chakra-ui/react";
  import { SearchIcon } from "@chakra-ui/icons";
import Footer from "../components/Footer";
import NavBar from "./NavBar";
  


function Faq() {
  return (
    <Box>
      <Box>
       <NavBar/>
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
                {" >"}  FAQ
              </Text>
            </Flex>
            <Box pr={"50px"}>
              <InputGroup
                borderRadius={100}
                // m={"auto"}
                w={{ base: "250px", md: "350px", lg: "370px", xl: "370px" }}
              >
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
        <Stack pb={10} ml={{ base: 10, lg: 200 }} mr={{ base: 0, lg: 200 }}>
          <Box textAlign={"left"}>
            <Text fontSize={"30px"} mb={3}>
            FAQ
            </Text>
            <Text color={"gray.600"} fontFamily={"sans-serif"}>
            Nutrimeter Frequently Asked Questions
            </Text>
          </Box>
          {/* Second  */}
          <Flex flexWrap={"wrap"}>
            <Box mt={5} textAlign={"left"}>
              <Text
                mt={5}
                color={"gray.600"}
                mb={3}
                fontSize={"18px"}
                fontWeight={500}
              >
                General FAQ
              </Text>
              <Text
                mt={5}
                color={"gray.600"}
                fontSize={"16px"}
                fontWeight={400}
              >
                Accessibility for Visually Impaired
              </Text>
              <Text
                mt={5}
                color={"gray.600"}
                fontSize={"16px"}
                fontWeight={400}
              >
                Is Cronometer translated into different Languages?
              </Text>
              <Text
                mt={5}
                color={"gray.600"}
                fontSize={"16px"}
                fontWeight={400}
              >
                Accessibility for Visually Impaired
              </Text>
            </Box>
            <Spacer />
            <Box mt={5} mr={"56px"} textAlign={"left"}>
              <Text
                mt={5}
                color={"gray.600"}
                mb={3}
                fontSize={"18px"}
                fontWeight={500}
              >
                Nutrition Data FAQ
              </Text>
              <Text
                mt={5}
                color={"gray.600"}
                fontSize={"16px"}
                fontWeight={400}
              >
                Do I log my foods raw or cooked?
              </Text>
              <Text
                mt={5}
                color={"gray.600"}
                fontSize={"16px"}
                fontWeight={400}
              >
                Reading Nutrition Labels
              </Text>
              <Text
                mt={5}
                color={"gray.600"}
                fontSize={"16px"}
                fontWeight={400}
              >
               Are kcal the same as Calories?
              </Text>
              <Text
                mt={5}
                color={"gray.600"}
                fontSize={"16px"}
                fontWeight={400}
              >
               How do I track my water intake?
              </Text>
              <Text
                mt={5}
                color={"gray.600"}
                fontSize={"16px"}
                fontWeight={400}
              >
               Are there nutrients missing from Cronometer?
              </Text>
              <Text
                mt={5}
                color={"gray.600"}
                fontSize={"16px"}
                fontWeight={400}
              >
                How do I add a supplement to my diary?
              </Text>
            </Box>
          </Flex>
          <Flex flexWrap={"wrap"}>
            <Box mt={5} textAlign={"left"}>
              <Text
                mt={5}
                color={"gray.600"}
                mb={3}
                fontSize={"18px"}
                fontWeight={500}
              >
                Software FAQ
              </Text>
              <Text
                mt={5}
                color={"gray.600"}
                fontSize={"16px"}
                fontWeight={400}
              >
                 How do I make the text bigger in Cronometer   
              </Text>
              <Text
                mt={5}
                color={"gray.600"}
                fontSize={"16px"}
                fontWeight={400}
              >
                How do I cancel my Gold Subscription?
              </Text>
              <Text
                mt={5}
                color={"gray.600"}
                fontSize={"16px"}
                fontWeight={400}
              >
               How do I Unsubscribe from Emails?
              </Text>
              <Text
                mt={5}
                color={"gray.600"}
                fontSize={"16px"}
                fontWeight={400}
              >
               Subscription Types
              </Text>
              <Text
                mt={5}
                color={"gray.600"}
                fontSize={"16px"}
                fontWeight={400}
              >
              How do I Log out?
              </Text>
              <Text
                mt={5}
                color={"gray.600"}
                fontSize={"16px"}
                fontWeight={400}
              >
               Device Troubleshooting
              </Text>
            </Box>
            <Spacer />
           
          </Flex>
          
        </Stack>
      </Box>
      <Footer />
    </Box>
  );
}

export default Faq;
