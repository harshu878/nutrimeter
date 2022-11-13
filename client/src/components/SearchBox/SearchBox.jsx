import {
  Box,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import blogStyles from "../../pages/BlogPage/BlogPage.module.css";
import { HiSearch } from "react-icons/hi";
import { useState } from "react";

const SearchBox = () => {
  const [text, setText] = useState("");
  const navigate = useNavigate();

  const search = () => {
    if (text.includes("nutrition")) {
      navigate("/blog/category/Nutrition");
    } else if (text.includes("fitness")) {
      navigate("/blog/category/Fitness");
    } else if (text.includes("features")) {
      navigate("/blog/category/Features");
    } else if (text.includes("recipes")) {
      navigate("/blog/category/Recipes");
    } else if (text.includes("app updates")) {
      navigate("/blog/category/app-updates");
    }
  };

  const onKeyEnter = (e) => {
    if (e.key === "Enter") {
      search();
    }
  };

  return (
    <Box textAlign="center" py="60px" className={blogStyles.grayBackground}>
      <Heading size="2xl">Browse the Archives</Heading>
      <br />
      <br />
      <Flex
        justifyContent="space-evenly"
        className={blogStyles.orangeColor}
        fontSize="xl"
        fontWeight="600"
        wrap="wrap"
        gap={{ base: "3" }}
      >
        <Link
          to="/blog/category/Nutrition"
          style={{ textDecoration: "none" }}
          _hover={{ color: "#e56836" }}
        >
          Nutrition
        </Link>
        <Link
          to="/blog/category/Fitness"
          style={{ textDecoration: "none" }}
          _hover={{ color: "#e56836" }}
        >
          Fitness
        </Link>
        <Link
          to="/blog/category/Features"
          style={{ textDecoration: "none" }}
          _hover={{ color: "#e56836" }}
        >
          Features
        </Link>
        <Link
          to="/blog/category/Recipes"
          style={{ textDecoration: "none" }}
          _hover={{ color: "#e56836" }}
        >
          Recipes
        </Link>
        <Link
          to="/blog/category/app-updates"
          style={{ textDecoration: "none" }}
          _hover={{ color: "#e56836" }}
        >
          App Updates
        </Link>
      </Flex>
      <br />
      <br />
      <InputGroup width="88%" margin="auto" borderRadius="0.5rem">
        <InputRightElement
          //   pointerEvents="none"
          cursor="pointer"
          children={<HiSearch color="white" size="20px" onClick={search} />}
          className={blogStyles.orangeBackground}
          h="100%"
          w="60px"
          borderRightRadius="0.5rem"
        />
        <Input
          onKeyUp={onKeyEnter}
          value={text}
          onChange={({ target }) => setText(target.value)}
          type="tel"
          placeholder="Search Blog Posts"
          background="white"
          py="28px"
          fontSize="lg"
          focusBorderColor="none"
        />
      </InputGroup>
      <br />
    </Box>
  );
};

export default SearchBox;
