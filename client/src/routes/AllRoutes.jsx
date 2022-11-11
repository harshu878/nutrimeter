import React from "react";
import { Route, Routes } from "react-router-dom";
import AfterLoginPage from "../pages/afterLoginPage/AfterLoginPage";
import BlogPage from "../pages/BlogPage/BlogPage";
import CategoryPage from "../pages/CategoryPage/CategoryPage";
import Diarypage from "../pages/diary/Diarypage";
import HomePage from "../pages/HomePage";
import Trends from "../pages/Trends";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/blog/category/:type" element={<CategoryPage />} />
      <Route path="/checkCalories" element={<AfterLoginPage />}>
        <Route path="/checkCalories" element={<Diarypage />} />
        <Route path="trends" element={<Trends />} />
        {/* All Routes of AfterLogin page will come under this route so add them here */}
      </Route>
    </Routes>
  );
};

export default AllRoutes;
