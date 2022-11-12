import { PhoneIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Spacer,
  Text,
} from "@chakra-ui/react";
import logo from "../images/logo.png";

function Navbar() {
  return (
    <Flex justifyContent={"space-between"} textAlign="center">
      <Box ml={4}>
        <Image width={150} src={logo} />
      </Box>
      <Spacer />
      <Box
        m={{ base: 0, md: 4, lg: 4 }}
        textAlign={"left"}
        ml={{ base: "120px" }}
      >
        <Text
          width={"110px"}
          fontSize={{ base: "11px", md: "15px", lg: "14px" }}
          color={"rgb(235,124,59)"}
          mt={{base:2}}
        >
          Submit a request
        </Text>
      </Box>
    </Flex>
  );
}

export default Navbar;
