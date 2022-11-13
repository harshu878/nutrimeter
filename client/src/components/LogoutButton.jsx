import { Box, Button, Text } from "@chakra-ui/react";
import React from "react";
import { useDispatch } from "react-redux";

import { LogOut } from "../redux/auth/auth.actions";
const LogoutButton = () => {
  const dispatch = useDispatch();



  const handleClick = () => {
    dispatch(LogOut());
  };

  return (
    <>
      {" "}
      <Box p="1">
        <Button
          onClick={handleClick}
          border="1px solid orange"
          bg={"white.400"}
          colorScheme="orange.500"
          color="orange.300"
        >
          <Text  _hover={{ color: "orange" }}>
            Logout
          </Text>
        </Button>
      </Box>
    </>
  );
};

export default LogoutButton;
