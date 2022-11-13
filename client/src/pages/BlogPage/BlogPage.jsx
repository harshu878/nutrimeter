import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SearchBox from "../../components/SearchBox/SearchBox.jsx";

import { CgPlayButtonO } from "react-icons/cg";
import { BiRightArrowAlt } from "react-icons/bi";
import { HiSearch } from "react-icons/hi";

import blogStyles from "./BlogPage.module.css";
import BlogCard from "../../components/BlogCard/BlogCard";
import NavBar from "../NavBar";
import Footer from "../../components/Footer";

const BlogPage = () => {
  const [isClicked, setClicked] = useState(false);
  const navigate = useNavigate();

  return (
    <div style={{ width: "auto" }}>
      <NavBar />
      <Box className={blogStyles.orangeBackgroundBoxCurved}>
        <Heading size="2xl">The Cronometer Blog</Heading>
        <Text>App Updates, Nutrition Tips & Inspiration</Text>
      </Box>
      <Flex
        position="relative"
        top="-14"
        justifyContent="center"
        wrap="wrap"
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
                  src="https://raw.githubusercontent.com/amandk5/nutrimeterImages/main/Images/blogPageFirstImage.png"
                  objectFit="cover"
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
                  <CgPlayButtonO
                    size="100px"
                    color="white"
                    top="50px"
                    onClick={() => setClicked(!isClicked)}
                  />
                </Box>
              </Box>
            </>
          )}
          <br />
          <Heading size="2xl">Eat Smarter. Live Better.</Heading>
          <br />
          <Text fontSize="lg">
            Get to know the eating habits that make your body thrive. The
            Cronometer app lets you easily track your nutrition, helping you to
            live a healthier, happier life.{" "}
          </Text>
          <br />
          <Button
            cursor="pointer"
            onClick={() => navigate("/")}
            className={blogStyles.orangeButton}
            fontSize="xl"
          >
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
          <Flex
            justifyContent="space-between"
            cursor="pointer"
            onClick={() => navigate("/blog/sugar-free-sensitivities")}
          >
            <Image
              src="https://raw.githubusercontent.com/amandk5/nutrimeterImages/main/Images/Blog-Img-Gummy-Bears.png"
              objectFit="cover"
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
          <Flex
            justifyContent="space-between"
            cursor="pointer"
            onClick={() => navigate("/blog/fiber")}
          >
            <Image
              src="https://raw.githubusercontent.com/amandk5/nutrimeterImages/main/Images/Fiber.png"
              objectFit="cover"
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
          <Flex
            justifyContent="space-between"
            cursor="pointer"
            onClick={() => navigate("/blog/ways-to-ease-digestion")}
          >
            <Image
              src="https://raw.githubusercontent.com/amandk5/nutrimeterImages/main/Images/Blog-Image-Avocado.png"
              objectFit="cover"
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
          <Flex
            justifyContent="end"
            alignItems="center"
            cursor="pointer"
            onClick={() => navigate("/blog/category/Nutrition")}
          >
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
      <br />
      <br />
      {/* search section  */}
      <SearchBox />
      {/* tips and tricks  */}
      <Flex
        padding={{ base: "20px", md: "50px 100px", xl: "50px 100px" }}
        justifyContent="space-between"
        alignItems="center"
        wrap="wrap"
        textAlign={{ base: "center", md: "left", xl: "left" }}
        rowGap={{ base: "5" }}
      >
        <Box width={{ base: "auto", md: "60%", xl: "60%" }}>
          <Text fontSize={{ base: "auto", md: "xl", xl: "xl" }}>
            ----<span className={blogStyles.orangeColor}>Crono Hacks</span>
          </Text>
          <br />
          <Heading size={{ base: "auto", md: "2xl", xl: "2xl" }}>
            Cronometer Tips & Tricks
          </Heading>
          <br />
          <Text fontSize="lg">
            Whether you’re a new or longtime user, here are some helpful tips to
            make the most of your nutrition tracking.
          </Text>
          <br />
          <Button
            className={blogStyles.orangeButton}
            fontSize={{ base: "auto", md: "xl", xl: "xl" }}
            cursor="pointer"
            onClick={() => navigate("/")}
          >
            Get the Tips
          </Button>
        </Box>
        <Box>
          <Image
            src="https://raw.githubusercontent.com/amandk5/nutrimeterImages/main/Images/rocket.png"
            width={{ base: "80%", md: "367px", xl: "367px" }}
            margin="auto"
          />
        </Box>
      </Flex>
      {/* latest updates  */}
      <Flex
        padding={{ base: "20px", md: "50px 100px", xl: "50px 100px" }}
        justifyContent="space-between"
        alignItems="center"
        wrap="wrap"
        textAlign={{ base: "center", md: "left", xl: "left" }}
      >
        <Box width={{ base: "auto", md: "55%", xl: "55%" }}>
          <Image src="https://raw.githubusercontent.com/amandk5/nutrimeterImages/main/Images/apple_tree.jpg" />
        </Box>
        <Box width={{ base: "auto", md: "40%", xl: "40%" }}>
          <Text fontSize={{ base: "auto", md: "xl", xl: "xl" }}>
            ----<span className={blogStyles.orangeColor}>App Updates</span>
          </Text>
          <br />
          <Heading size={{ base: "auto", md: "2xl", xl: "2xl" }}>
            New & Improved: The Latest Updates
          </Heading>
          <br />
          <br />
          <Text fontSize={{ base: "auto", md: "lg", xl: "lg" }}>
            Get up to date on all of the latest Cronometer updates, including
            cool new features like our Recipe Importer or Target Scheduler!
          </Text>
          <br />
          <br />
          <Button
            className={blogStyles.orangeButton}
            fontSize={{ base: "auto", md: "xl", xl: "xl" }}
            cursor="pointer"
            onClick={() => navigate("/blog/category/app-updates")}
          >
            Read More
          </Button>
        </Box>
      </Flex>
      {/* orange banner  */}
      <Flex
        padding={{ base: "20px", md: "75px", xl: "75px" }}
        className={blogStyles.gradientOrangeBackground}
        color="white"
        justifyContent={{
          base: "center",
          md: "space-between",
          xl: "space-between",
        }}
        alignItems="center"
        wrap="wrap"
        // textAlign={{ base: "center" }}
        rowGap={{ base: "5" }}
      >
        <Box width={{ base: "auto", md: "60", xl: "60%" }}>
          <Heading size={{ base: "auto", md: "2xl", xl: "2xl" }}>
            Eat smarter. Live better.
          </Heading>
          <br />
          <Text fontSize={{ base: "auto", md: "2xl", xl: "2xl" }}>
            Track your foods, exercise,
          </Text>
          <Text fontSize={{ base: "auto", md: "2xl", xl: "2xl" }}>
            and health data with the Cronometer app.
          </Text>
        </Box>
        <Box width={{ base: "auto", md: "30%", xl: "30%" }}>
          <Button
            className={blogStyles.whiteButton}
            fontSize={{ base: "auto", md: "xl", xl: "xl" }}
            fontWeight="bold"
            cursor="pointer"
            onClick={() => navigate("/signup")}
          >
            Sign Up - It's Free
          </Button>
        </Box>
      </Flex>
      {/* stories section  */}
      <Flex
        className={blogStyles.grayBackground}
        padding={{ base: "20px", md: "80px", xl: "80px" }}
        justifyContent="space-between"
        wrap="wrap"
      >
        <Box width={{ base: "auto", md: "60", xl: "60%" }}>
          <Text fontSize={{ base: "auto", md: "xl", xl: "xl" }}>
            ----<span className={blogStyles.orangeColor}>On Trend</span>
          </Text>
          <br />
          <Heading size={{ base: "auto", md: "2xl", xl: "2xl" }}>
            Popular Stories
          </Heading>
        </Box>
        <Box width={{ base: "auto", md: "30%", xl: "30%" }}>
          <Flex justifyContent="flex-end" alignItems="flex-end" height="100%">
            <Text
              fontSize={{ base: "auto", md: "lg", xl: "lg" }}
              float="right"
              className={blogStyles.orangeColor}
              cursor="pointer"
              onClick={() => navigate("/")}
            >
              Explore More
            </Text>
            <BiRightArrowAlt className={blogStyles.orangeColor} size="25px" />
          </Flex>
        </Box>
      </Flex>

      {/* stories card  */}

      <Flex
        className={blogStyles.grayBackground}
        padding={{ base: "20px", md: "0px 60px", xl: "0px 60px" }}
        justifyContent="center"
        alignItems="center"
        // gap="10"
        wrap="wrap"
      >
        <BlogCard
          image="https://raw.githubusercontent.com/amandk5/nutrimeterImages/main/Images/eczema.png"
          heading="Dietitians Discuss Diet And Eczema"
          date="April 27, 2022"
          description="Registered Dietitians Discuss The Link Between Diet And Eczema Eczema is a common, chronic and complex skin disease that arises"
        />
        <BlogCard
          image="https://raw.githubusercontent.com/amandk5/nutrimeterImages/main/Images/acne.jpg"
          heading="How Can Diet & Nutrition Affect Acne"
          date="April 26, 2022"
          description="How Can Diet And Nutrition Affect Acne Acne is a chronic, multifactorial skin condition that is estimated to affect 9.4%"
        />
      </Flex>

      {/* features section  */}

      <Flex
        className={blogStyles.grayBackground}
        padding={{ base: "20px", md: "80px", xl: "80px" }}
        justifyContent="space-between"
        wrap="wrap"
      >
        <Box width={{ base: "auto", md: "60", xl: "60%" }}>
          <Text fontSize={{ base: "auto", md: "xl", xl: "xl" }}>
            ----<span className={blogStyles.orangeColor}>App Updates</span>
          </Text>
          <br />
          <Heading size={{ base: "auto", md: "2xl", xl: "2xl" }}>
            New Features
          </Heading>
        </Box>
        <Box width={{ base: "auto", md: "30%", xl: "30%" }}>
          <Flex justifyContent="flex-end" alignItems="flex-end" height="100%">
            <Text
              fontSize={{ base: "auto", md: "lg", xl: "lg" }}
              float="right"
              className={blogStyles.orangeColor}
              cursor="pointer"
              onClick={() => navigate("/blog/category/app-updates")}
            >
              Explore More
            </Text>
            <BiRightArrowAlt className={blogStyles.orangeColor} size="25px" />
          </Flex>
        </Box>
      </Flex>

      {/* features card  */}

      <Flex
        className={blogStyles.grayBackground}
        padding={{
          base: "20px",
          md: "0px 60px 30px 60px",
          xl: "0px 60px 30px 60px",
        }}
        justifyContent="center"
        alignItems="center"
        rowGap="10"
        wrap="wrap"
      >
        <BlogCard
          image="https://raw.githubusercontent.com/amandk5/nutrimeterImages/main/Images/Suunto.png"
          heading="New Device Integration: Suunto"
          date="June 14, 2022"
          description="Sync Suunto Data Into Your Cronometer Account Today, we are thrilled to announce that we have partnered with Suunto to"
        />
        <BlogCard
          image="https://raw.githubusercontent.com/amandk5/nutrimeterImages/main/Images/Heart-rate-symbol.png"
          heading="How To: Track Your Heart Rate Over Time"
          date="June 6, 2022"
          description="Recent Improvements To Biometric Tracking Allow You To Track Heart Rate Over Time We have made some big improvements to"
        />
        <BlogCard
          image="https://raw.githubusercontent.com/amandk5/nutrimeterImages/main/Images/Apple-watch.jpeg"
          heading="Now Available: Cronometer On Your Apple Watch"
          date="June 1, 2022"
          description="Introducing Cronometer On Apple Watch Since its introduction in 2014, the Apple Watch has gained its fair share of the"
        />
        <BlogCard
          image="https://raw.githubusercontent.com/amandk5/nutrimeterImages/main/Images/nutrition_score.jpg"
          heading="Introducing Men’s Health Nutrition Score"
          date="May 31, 2022"
          description="New Nutrition Score Focuses on Men’s Health Available To Male Free Users For The Month Of June It’s no surprise"
        />
      </Flex>

      {/* community section  */}

      <Box
        padding={{ base: "20px", md: "700px", xl: "70px" }}
        className={blogStyles.grayBackground}
      >
        <Text fontSize={{ base: "auto", md: "xl", xl: "xl" }}>
          ----<span className={blogStyles.orangeColor}>Community</span>
        </Text>
        <br />
        <Image
          src="https://raw.githubusercontent.com/amandk5/nutrimeterImages/main/Images/know_yourself.png"
          borderRadius="0.5rem"
        />
        <br />
        <Heading size={{ base: "auto", md: "2xl", xl: "2xl" }}>
          Eat smarter. Go farther.
        </Heading>
        <br />
        <Text fontSize={{ base: "auto", md: "2xl", xl: "2xl" }}>
          Cronometer has helped millions to get to know their bodies better and
          discover their nutrition. Learn about the features and read the
          stories that will inspire you to crush your health goals.
        </Text>
        <br />
        <br />
        <Button
          className={blogStyles.orangeButton}
          fontSize={{ base: "auto", md: "xl", xl: "xl" }}
          cursor="pointer"
          onClick={() => navigate("/about")}
        >
          Get To Know Yourself
        </Button>
      </Box>

      {/* community cards  */}

      <Box>
        <Flex
          className={blogStyles.grayBackground}
          padding={{ base: "20px", md: "0px 60px", xl: "0px 60px" }}
          justifyContent="center"
          alignItems="center"
          // gap="10"
          wrap="wrap"
        >
          <BlogCard
            image="https://raw.githubusercontent.com/amandk5/nutrimeterImages/main/Images/nutrition_Therapist.jpeg"
            heading="Meet Aaron Day: Nutritional Therapist & Know Yourself Ambassador"
          />
          <BlogCard
            image="https://raw.githubusercontent.com/amandk5/nutrimeterImages/main/Images/nutrition_coach.jpeg"
            heading="Meet Alex Marshall: Nutrition Coach & Know Yourself Ambassador
            "
          />
        </Flex>
      </Box>
      {/* explore more link  */}
      <Flex
        justifyContent="flex-end"
        padding={{ base: "20px", md: "30px 70px", xl: "30px 70px" }}
        cursor="pointer"
        onClick={() => navigate("/about")}
      >
        <Text
          fontSize={{ base: "auto", md: "lg", xl: "lg" }}
          float="right"
          className={blogStyles.orangeColor}
        >
          Explore More
        </Text>
        <BiRightArrowAlt className={blogStyles.orangeColor} size="25px" />
      </Flex>

      {/* Footer  */}

      <Flex
        padding={{ base: "20px", md: "50px 80px", xl: "70px 70px" }}
        justifyContent={{
          base: "center",
          md: "space-between",
          xl: "space-between",
        }}
        alignItems="center"
        wrap="wrap"
        textAlign="center"
        rowGap="10"
      >
        <Box width={{ base: "auto", md: "45%", xl: "45%" }}>
          <Image
            src="https://raw.githubusercontent.com/amandk5/nutrimeterImages/329696b37f995e056527958003965c238d38ce40/Images/cronometer-hero-graphic.svg"
            width="100%"
          />
        </Box>
        <Box width={{ base: "auto", md: "50%", xl: "50%" }}>
          <Heading size={{ base: "auto", md: "2xl", xl: "2xl" }}>
            Track your food, exercise and health metrics with our app.
          </Heading>
          <br />
          <br />
          <Button
            className={blogStyles.orangeButton}
            fontSize={{ base: "auto", md: "xl", xl: "xl" }}
            cursor="pointer"
            onClick={() => navigate("/signup")}
          >
            Sign Up - It's Free
          </Button>
          <br />
          <br />
          <Link textDecoration="underline" to="/">
            <Text fontSize="xl">Learn More</Text>
          </Link>
        </Box>
      </Flex>
      <Footer />
    </div>
  );
};

export default BlogPage;
// postimage.com
