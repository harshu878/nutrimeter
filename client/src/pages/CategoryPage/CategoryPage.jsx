import { Box, Flex, Heading } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import NavBar from "../NavBar";
import blogStyles from "../BlogPage/BlogPage.module.css";
import CategoryCard from "../../components/CategoryCard/CategoryCard";

import { nutritionData } from "../../data/Category/nutrition";
import { featuresData } from "../../data/Category/features";
import { appUpdatesData } from "../../data/Category/appUpdates";
import { fitnessData } from "../../data/Category/fitness";
import { recipesData } from "../../data/Category/recipes";
import Footer from "../../components/Footer";

const CategoryPage = () => {
  const { type } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    switch (type) {
      case "Nutrition":
        setData(nutritionData);
        break;
      case "Features":
        setData(featuresData);
        break;
      case "app-updates":
        setData(appUpdatesData);
        break;
      case "Fitness":
        setData(fitnessData);
        break;
      case "Recipes":
        setData(recipesData);
        break;
      default:
        return data;
    }
  }, [data]);

  return (
    <div style={{ width: "auto" }}>
      <NavBar />
      <Box className={blogStyles.orangeBackgroundBoxCurved}>
        <Heading size="2xl">
          Category: {type === "app-updates" ? "App Updates" : type}
        </Heading>
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
        {/* <CategoryCard
          image="https://raw.githubusercontent.com/amandk5/nutrimeterImages/main/Images/eczema.png"
          heading="Dietitians Discuss Diet And Eczema"
          date="April 27, 2022"
          description="Registered Dietitians Discuss The Link Between Diet And Eczema Eczema is a common, chronic and complex skin disease that arises"
        />
        <CategoryCard
          image="https://raw.githubusercontent.com/amandk5/nutrimeterImages/main/Images/eczema.png"
          heading="Dietitians Discuss Diet And Eczema"
          date="April 27, 2022"
          description="Registered Dietitians Discuss The Link Between Diet And Eczema Eczema is a common, chronic and complex skin disease that arises"
        /> */}
        {data.map((data) => (
          <CategoryCard
            image={data.image}
            heading={data.heading}
            date={data.date}
            description={data.description}
          />
        ))}
      </Flex>
      <Footer />
    </div>
  );
};

export default CategoryPage;
