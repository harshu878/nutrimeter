import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import SingleBlog from "../../components/SingleBlog/SingleBlog";
import blogStyles from "../BlogPage/BlogPage.module.css";
import NavBar from "../NavBar";

const GummyBears = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ width: "auto" }}>
      <NavBar />
      <Box className={blogStyles.orangeBackgroundBoxCurved}>
        <Heading size="2xl">A Look Into Sugar-Free Sensitivities</Heading>
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
        <SingleBlog imageSrc="https://raw.githubusercontent.com/amandk5/nutrimeterImages/main/nutrition/Blog-Img-Gummy-Bears.png" />
      </Flex>
      <br />
      <Box width={{ base: "90%", md: "60%", xl: "60%" }} margin="auto">
        <Heading size="2xl" fontWeight="400">
          Breaking Down Sugar Alternatives
        </Heading>
        <br />
        <Text fontSize="lg">
          Isn’t it great that we’ve now come into a world where we can enjoy our
          guilty pleasure snacks, guilt-free? Many products these days are
          touting zero calorie alternatives to our original goal busting
          options. From coke zero to sugar-free options of our favourite candy,
          it seems we can now enjoy treats without blowing our diet.
          <br />
          <br />
          Some people may not be as lucky, though. It seems like many people are
          experiencing sensitivities to many commonly used artificial
          sweeteners. We were scrolling Amazon the other day when a sugar-free
          candy alternative caught our eye. Many reviewers raved about these
          candies stating:
          <br />
          <br />
          <Text borderLeft="5px solid silver" paddingLeft="15px">
            "They taste just like the original!"
          </Text>
          <br />
          <Text borderLeft="5px solid silver" paddingLeft="15px">
            "So soft and fresh!"
          </Text>
          <br />
          Yum. And then… dun dun dun. Scroll down a little bit further and a
          different truth comes out:
          <br />
          <br />
          <Text borderLeft="5px solid silver" paddingLeft="15px">
            "Doubles as an effective colon cleanse. You will almost certainly
            have explosive diarrhea if you eat more than a serving or two.
            Thinking about going for a run after a delicious snack? Don't."
          </Text>
          <br />
          <Text borderLeft="5px solid silver" paddingLeft="15px">
            "DO. NOT. BUY. ! I’ve been unable to move off the toilet for 24
            hours."
          </Text>
          <br />
          So, maybe not-so sweet then?
          <br />
          While the reviews gave us a chuckle – we’re laughing with these
          reviewers, not at them. We wanted to do some research as to what could
          cause such gastric distress. Which is when we learned that different
          sweeteners affect your digestive tract differently.
        </Text>
        <br />
        <br />
        <Heading size="xl" fontWeight="400">
          Mostly Gut Friendly Sweeteners
        </Heading>
        <br />
        <Text fontSize="lg">
          These sweeteners are touted for being the easiest on the vast majority
          of tummies and are most easily absorbed into our digestive tracts.
          <br />
          <ul style={{ paddingLeft: "50px" }}>
            <li>Glucose</li>
            <li>Sucrose (white sugar, table sugar, cane syrup, maple syrup)</li>
            <li>Maltose (brown rice syrup)</li>
            <li>Stevia</li>
            <li>Monkfruit extract</li>
            <li>Aspartame</li>
          </ul>
        </Text>
        <br />
        <Heading size="xl" fontWeight="400">
          Potentially Triggering
        </Heading>
        <br />
        <Text fontSize="lg">
          <ul style={{ paddingLeft: "50px" }}>
            <li>Sorbitol</li>
            <li>Maltitol</li>
            <li>Mannitol</li>
            <li>Xylitol</li>
            <li>Lactitol</li>
            <li>Maltodextrin</li>
          </ul>
          <br />
          Alrighty then! These sweeteners, often simply labelled as “sugar
          alcohols” may wreak havoc on our digestive system because they are
          difficult for our guts to absorb. The reason they are used so readily
          today is because they are a low-calorie option to sugar – if we can’t
          absorb them, then we can’t access their calories. The larger quantity
          you’re consuming the more likely you are to realize the negative
          impacts.
          <br />
          If you’re on a low-carbohydrate diet or looking to cut back on sugar
          then reading the ingredient list can go a long way to making sure
          you’re maximizing taste and minimizing trips to the bathroom.
        </Text>
      </Box>
      <Footer />
    </div>
  );
};

export default GummyBears;
