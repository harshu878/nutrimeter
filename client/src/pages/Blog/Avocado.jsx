import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import NavBar from "../NavBar";
import blogStyles from "../BlogPage/BlogPage.module.css";
import Footer from "../../components/Footer";
import SingleBlog from "../../components/SingleBlog/SingleBlog";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const Avocado = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ width: "auto" }}>
      <NavBar />
      <Box className={blogStyles.orangeBackgroundBoxCurved}>
        <Heading size="2xl">Ways To Ease Digestion</Heading>
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
        <SingleBlog imageSrc="https://raw.githubusercontent.com/amandk5/nutrimeterImages/main/nutrition/Blog-Image-Avocado.png" />
      </Flex>
      <br />
      <Box width={{ base: "90%", md: "60%", xl: "60%" }} margin="auto">
        <Heading size="2xl" fontWeight="400">
          Digestion Problems? Here's What To Keep An Eye On.
        </Heading>
        <br />
        <Text fontSize="lg">
          Digestion issues. We’ve all been there. From bloating and cramping to
          full blown sprinting to the bathroom. Not having an optimal digestion
          system can leave you grumpy, frumpy and just straight up exhausted.
          Read on to see what nutrients you can keep an eye on to help your body
          digest your food with ease.
        </Text>
        <br />
        <Heading size="xl" fontWeight="400">
          Fiber
        </Heading>
        <br />
        <Text fontSize="lg">
          Fiber helps regulate the body’s use of sugars, helping to keep hunger
          and blood sugar in check, hence why it’s touted to help with weight
          management and digestive health. Fiber is crucial for regular bowel
          movements, helping you feel full and for feeding your gut microbiome.
          <br />
          <br />
          Make sure you’re getting enough fiber in your diet by tracking and
          then taking a look at either your ,
          <Link to="/" className={blogStyles.orangeColor}>
            Daily Report
          </Link>{" "}
          or your{" "}
          <Link to="/" className={blogStyles.orangeColor}>
            Nutrition Report
          </Link>{" "}
          in the app!
        </Text>
        <br />
        <Heading size="xl" fontWeight="400">
          Water
        </Heading>
        <br />
        <Text fontSize="lg">
          Water helps move substances through the digestive tract smoothly and
          provides the base for digestive juices (saliva in the mouth – contains
          enzymes that get things started; lubricates the food to move more
          easily through the esophagus and into the stomach; gastric juices in
          the stomach contain acid to start breaking larger bits of food into
          smaller bits). It also helps form the mucous layer to protect the
          stomach from being digested by the acid produced there.
          <br />
          <br />
          <Link to="/" className={blogStyles.orangeColor}>
            Tracking water in Cronometer
          </Link>{" "}
          is easy! Just search for water when you go to add a food. Your food
          entries can also contain water content so you don’t have to strictly
          rely on drinking H2O to hit your targets.
        </Text>
        <br />
        <Heading size="xl" fontWeight="400">
          Vitamins & Minerals
        </Heading>
        <br />
        <Text fontSize="lg">
          Zinc, Selenium, Magnesium, Vitamin C and Vitamin E all support
          immunity and help maintain the digestive tract which controls nutrient
          absorption as well as prevents the invasion of harmful bacteria in our
          guts.
          <br />
          <br />
          Check out the immune system{" "}
          <Link to="/" className={blogStyles.orangeColor}>
            Nutrition Score
          </Link>{" "}
          if you’re a Gold subscriber or just keep an eye on these nutrients in
          your{" "}
          <Link to="/" className={blogStyles.orangeColor}>
            Daily Report
          </Link>{" "}
          or your{" "}
          <Link to="/" className={blogStyles.orangeColor}>
            Nutrition Report
          </Link>{" "}
          in the app.
        </Text>
        <br />
        <Heading size="xl" fontWeight="400">
          Protein
        </Heading>
        <br />
        <Text fontSize="lg">
          We know that protein is crucial for your muscles, but rarely do we
          think about the muscles of our digestive system. Protein is also
          needed for the muscular bits that move food into smaller pieces and
          push it through your intestines in rhythmic contractions.
        </Text>
        <br />
        <Heading size="xl" fontWeight="400">
          Fat
        </Heading>
        <br />
        <Text fontSize="lg">
          Fat is an important macronutrient as it aids absorption of fat soluble
          nutrients like Vitamin E. Keep an eye on your fat intake in Cronometer
          – we even break down your intake into saturated, trans-fat,
          monounsaturated and polyunsaturated (omega-3 vs. omega-6).
          <br />
          <br />
          Well, there you have it. A list of nutrients to keep an eye on if your
          bowel movements are irregular. If you’re looking for suggestions on
          what to eat to help you hit your targets in the above mentioned
          nutrients, try avocados or lentils which are both packed with fiber.
          Did you also know you can track your stool in Cronometer, which might
          help you identify food sensitivities or allergies.
        </Text>
      </Box>
      <Footer />
    </div>
  );
};

export default Avocado;
