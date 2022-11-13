import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import NavBar from "../NavBar";
import blogStyles from "../BlogPage/BlogPage.module.css";
import Footer from "../../components/Footer";
import SingleBlog from "../../components/SingleBlog/SingleBlog";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const FiberBlog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ width: "auto" }}>
      <NavBar />
      <Box className={blogStyles.orangeBackgroundBoxCurved}>
        <Heading size="2xl">Digest This: Tracking Fiber In Cronometer</Heading>
      </Box>
      <Flex
        position="relative"
        top="-14"
        justifyContent="space-between"
        // padding={{ base: "20px", md: "50px", xl: "50px" }}
        paddingX={{ base: "20px", md: "50px", xl: "50px" }}
        wrap="wrap"
        textAlign="left"
        alignItems="center"
        rowGap="10"
      >
        <SingleBlog imageSrc="https://raw.githubusercontent.com/amandk5/nutrimeterImages/main/nutrition/Fiber.png" />
      </Flex>
      <br />
      <Box width={{ base: "90%", md: "60%", xl: "60%" }} margin="auto">
        <Heading size="2xl" fontWeight="400">
          All About Fiber
        </Heading>
        <br />
        <Text fontSize="lg">
          Making sure you’re getting enough fiber in your diet can help{" "}
          <Link to="" className={blogStyles.orangeColor}>
            ease digestion
          </Link>{" "}
          and even appears to lower the risk of developing certain conditions
          such as heart disease and diabetes (1). Read on as we take a deeper
          dive into fiber’s function in your body.{" "}
        </Text>
        <br />
        <Heading size="xl" fontWeight="400">
          Its Function
        </Heading>
        <br />
        <Text fontSize="lg">
          Fiber are chains and branches of sugars linked together in a way that
          you can’t digest, so these types of carbohydrates provide little
          energy. Instead, they pass through the digestive system without being
          broken down. They hold onto water which helps you feel full and
          regulates bowel movements. Fiber helps regulate the body’s use of
          sugars, helping to keep hunger and blood sugar in check.
          <br />
          <br />
          There are two types of fiber, soluble and insoluble which are both
          beneficial to your health. Soluble fiber, dissolves in water and can
          help lower glucose levels as well as help lower blood cholesterol.
          Insoluble fiber does not dissolve in water and can help food move
          through your digestive system, promoting regularity and helping
          prevent constipation.
        </Text>
        <br />
        <Heading size="xl" fontWeight="400">
          Fiber & Your Diet
        </Heading>
        <br />
        <Text fontSize="lg">
          Children and adults need at least 25 to 35 grams of fiber per day for
          good health, but most Americans get only about 15 grams a day (1). As
          you increase your fiber intake, it is important to drink lots of
          water. Good sources of fiber include legumes, like yellow beans, navy
          beans, black beans, whole grains and cereals like bran, oats and
          vegetables and fruits, like artichokes and raspberries.
        </Text>
        <br />
        <Heading size="xl" fontWeight="400">
          Tracking Fiber In Cronometer
        </Heading>
        <br />
        <Text fontSize="lg">
          To make sure you’re getting enough fiber in your diet, if you’re not
          already, start tracking your food in Cronometer!
          <br />
          <br />
          In the mobile app, navigate to your{" "}
          <Link to="/" className={blogStyles.orangeColor}>
            Daily Report
          </Link>{" "}
          and you should see your fiber intake under the carbohydrates section.
          You can also click on this to edit your targets, see your top sources
          and to learn more information about fiber in general.
          <br />
          <br />
          On the web app, you can scroll down on your{" "}
          <Link to="/" className={blogStyles.orangeColor}>
            Diary Screen
          </Link>{" "}
          (main page) to see fiber listed under the carbohydrates section. You
          can hover over to learn more information or click to edit your targets
          and view your top sources.
        </Text>
        <br />
        <Heading size="xl" fontWeight="400">
          Resources
        </Heading>
        <br />
        <Text fontSize="lg">
          1. The Nutrition Source, Harvard T.H. Chan School of Public Health.
          &nbsp;
          <a
            href="https://www.hsph.harvard.edu/nutritionsource/carbohydrates/fiber/"
            className={blogStyles.orangeColor}
          >
            Link
          </a>
        </Text>
      </Box>
      <Footer />
    </div>
  );
};

export default FiberBlog;
