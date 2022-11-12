import {
  Box,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
// import Navbar from "../components/Navbar";
import fruits from "../images/fruits.png";
import { PhoneIcon, SearchIcon } from "@chakra-ui/icons";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import Finisher from "../components/footer";

function Support() {
  return (
    <Box>
      <Navbar />
      <Box
        mb={50}
        backgroundImage={fruits}
        bgPosition={"center"}
        h={310}
        // bgSize={"cover"}
        bgSize={"cover"}
        bgRepeat="no-repeat"
      >
        <Box pt={120}>
          <InputGroup
            w={{ base: "280px", md: "400px", lg: "500px", xl: "650px" }}
            m={"auto"}
          >
            <InputLeftElement
              pointerEvents="none"
              children={<SearchIcon color="gray.300" />}
            />
            <Input
              borderRadius={100}
              type="text"
              placeholder="Search"
              bgColor={"white"}
            />
          </InputGroup>
        </Box>
      </Box>

      {/* boxes */}
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }}  spacing={10} m={10}>
        <Link to={"/web_version"}>
          <Box
            p={5}
            borderRadius={5}
            border={"1px"}
            color={"rgb(235,124,59)"}
            transition={"0.2s"}
            _hover={{ color: "white", backgroundColor: "rgb(235,124,59)" }}
          >
            <Text fontWeight={"600"} fontSize={"16px"}>
              Web Version
            </Text>
            <Text fontSize={"14px"}>User Manual for Nutrimeter on Web</Text>
          </Box>
        </Link>

        <Link to={"/mob_version"}>
          <Box
            border={"1px"}
            color={"rgb(235,124,59)"}
            borderRadius={5}
            transition={"0.2s"}
            _hover={{ color: "white", backgroundColor: "rgb(235,124,59)" }}
          >
            <Text
              m={"12px"}
              // _hover={{ color: "white" ,backgroundColor:"orange"}}
              fontWeight={"600"}
              fontSize={"16px"}
              // color={"rgb(235,124,59)"}
            >
              Mobile App
            </Text>
            <Text m={"12px"} fontSize={"14px"}>
              User Manual for Nutrimeter on Web
            </Text>
          </Box>
        </Link>

        <Link to={"/professional_version"}>
          <Box
            color={"rgb(235,124,59)"}
            transition={"0.2s"}
            _hover={{ color: "white", backgroundColor: "rgb(235,124,59)" }}
            p={5}
            borderRadius={5}
            border={"1px"}
          >
            <Text fontWeight={"600"} fontSize={"16px"}>
              Professional Version
            </Text>
            <Text fontSize={"14px"}>User Manual for Nutrimeter on Web</Text>
          </Box>
        </Link>

        <Link to={"/faq"}>
          <Box
            p={5}
            border={"1px"}
            color={"rgb(235,124,59)"}
            transition={"0.2s"}
            borderRadius={5}
            _hover={{ color: "white", backgroundColor: "rgb(235,124,59)" }}
          >
            <Text
              fontWeight={"600"}
              fontSize={"16px"}
            >
              FAQ
            </Text>
            <Text fontSize={"14px"} >
              Nutrimeter Frequently Asked Questions
            </Text>
          </Box>
        </Link>
      </SimpleGrid>
      <Finisher/>
    </Box>
  );
}

export default Support;
