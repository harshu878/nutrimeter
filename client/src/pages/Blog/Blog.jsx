import { useParams } from "react-router-dom";
import BlogPage from "../BlogPage/BlogPage.jsx";
import Avocado from "./Avocado";
import FiberBlog from "./FiberBlog";
import GummyBears from "./GummyBears";

const Blog = () => {
  const { blogName } = useParams();
  switch (blogName) {
    case "fiber":
      return <FiberBlog />;
    case "sugar-free-sensitivities":
      return <GummyBears />;
    case "ways-to-ease-digestion":
      return <Avocado />;
    default:
      return <BlogPage />;
  }
};

export default Blog;
