import { Box, Flex, Image, Text } from "@chakra-ui/react";
import blogStyles from "../../pages/BlogPage/BlogPage.module.css";

import { AiFillApple } from "react-icons/ai";
import { IoLogoAndroid } from "react-icons/io";
import { GiArrowCursor } from "react-icons/gi";
import { Link } from "react-router-dom";

const SingleBlog = ({imageSrc}) => {
  return (
    <Box margin="auto">
      <Image
        src={imageSrc}
        borderRadius="1rem"
      />
      <br />
      <Flex justifyContent="space-evenly">
        <Text>Don’t have a Cronometer account? <Link to="/signup" className={blogStyles.orangeColor}>Sign up here</Link> – it’s free!</Text>
        <Flex justifyContent="space-between" columnGap="5" >
          <AiFillApple size="27px" className={blogStyles.orangeColor}/>
          <IoLogoAndroid size="27px" className={blogStyles.orangeColor}/>
          <GiArrowCursor size="27px" className={blogStyles.orangeColor}/>
        </Flex>
      </Flex>
    </Box>
  );
};

export default SingleBlog;
