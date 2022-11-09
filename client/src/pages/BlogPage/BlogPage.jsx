import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { useState } from "react";

import { CgPlayButtonO } from "react-icons/cg";
import { BiRightArrowAlt } from "react-icons/bi";
import blogPageFirstImage from "./Images/blogPageFirstImage.png";
import blogImgGummyBears from "./Images/Blog-Img-Gummy-Bears.png";
import blogImgFiber from "./Images/Fiber.png";
import blogImgAvocado from "./Images/Blog-Image-Avocado.png";

import blogStyles from "./BlogPage.module.css";

const BlogPage = () => {
  const [isClicked, setClicked] = useState(false);

  const backgroundBox = {
    padding: "80px 0 140px",
    backgroundColor: "transparent",
    backgroundImage: "linear-gradient(80deg,#ff763f 0%,#ffb56b 100%)",
    color: "white",
    borderRadius: "100%/0 0 60px 60px",
    textAlign: "center",
  };
  return (
    <>
      <Box style={backgroundBox}>
        <Heading>The Cronometer Blog</Heading>
        <Text>App Updates, Nutrition Tips & Inspiration</Text>
      </Box>
      <Flex
        position="relative"
        top="-14"
        justifyContent="center"
        flexWrap="wrap"
        columnGap="10"
        textAlign="left"
      >
        <Box
          p="5"
          w={{ base: "95%", md: "55%", xl: "55%" }}
          borderRadius="0.5rem"
          boxShadow="xl"
          bg="white"
        >
          {isClicked ? (
            <iframe
              style={{ margin: "auto" }}
              title="blog"
              src="https://www.youtube.com/embed/R49fLnhMhIE"
              width="100%"
              height="375px"
            ></iframe>
          ) : (
            <>
              <Box position="relative">
                <Image
                  src={blogPageFirstImage}
                  alt="image"
                  width="100%"
                  height="375px"
                  onClick={() => setClicked(!isClicked)}
                  cursor="pointer"
                />
                <Box
                  position="absolute"
                  top="50%"
                  left="50%"
                  transform="translate(-50%,-50%)"
                  cursor="pointer"
                >
                  <CgPlayButtonO size="100px" color="white" top="50px" />
                </Box>
              </Box>
            </>
          )}

          <br />
          <Heading>Eat Smarter. Live Better.</Heading>
          <br />
          <Text fontSize="lg">
            Get to know the eating habits that make your body thrive. The
            Cronometer app lets you easily track your nutrition, helping you to
            live a healthier, happier life.{" "}
          </Text>
          <br />
          <Button className={blogStyles.orangeButton} fontSize="xl">
            Get Started
          </Button>
        </Box>
        <Box
          p="5"
          w={{ base: "95%", md: "30%", xl: "30%" }}
          borderRadius="0.5rem"
          boxShadow="xl"
          bg="white"
        >
          <Text fontSize="xl">
            ----<span className={blogStyles.orangeColor}>Recent Posts</span>
          </Text>
          <br />
          <Flex justifyContent="space-between">
            <Image
              src={blogImgGummyBears}
              w="35%"
              borderRadius="0.5rem"
              height={{ base: "auto", md: "128px", xl: "128px" }}
            />
            <Box w="55%">
              <Text fontSize="xl" fontWeight="bold">
                A Look Into Sugar-Free Sensitivities
              </Text>
              <Text fontSize="xs">October 27, 2022</Text>
            </Box>
          </Flex>
          <br />
          <br />
          <Flex justifyContent="space-between">
            <Image
              src={blogImgFiber}
              w="35%"
              borderRadius="0.5rem"
              height={{ base: "auto", md: "128px", xl: "128px" }}
            />
            <Box w="55%">
              <Text fontSize="xl" fontWeight="bold">
                Digest This: Tracking Fiber In Cronometer
              </Text>
              <Text fontSize="xs">October 26, 2022</Text>
            </Box>
          </Flex>
          <br />
          <br />
          <Flex justifyContent="space-between">
            <Image
              src={blogImgAvocado}
              w="35%"
              borderRadius="0.5rem"
              height={{ base: "auto", md: "128px", xl: "128px" }}
            />
            <Box w="55%">
              <Text fontSize="xl" fontWeight="bold">
              Ways To Ease Digestion
              </Text>
              <Text fontSize="xs">October 24, 2022</Text>
            </Box>
          </Flex>
          <br />
          <br />
          <Flex justifyContent="end" alignItems="center">
            <Text
              fontSize="md"
              float="right"
              className={blogStyles.orangeColor}
            >
              Explore More
            </Text>
            <BiRightArrowAlt className={blogStyles.orangeColor} size="25px" />
          </Flex>
        </Box>
      </Flex>
    </>
  );
};

export default BlogPage;
