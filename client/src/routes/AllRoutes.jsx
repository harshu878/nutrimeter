import React from 'react'
import { Route, Routes } from 'react-router-dom'
import BlogPage from '../pages/BlogPage/BlogPage'
import Diarypage from '../pages/diary/Diarypage'
import HomePage from '../pages/HomePage'
// import Trends from '../pages/Trends'
import About from '../pages/About'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import BodyMeasurement from '../pages/BodyMeasurement'
import CronoPro from '../pages/CronoPro'
import CategoryPage from '../pages/CategoryPage/CategoryPage'
import Blog from '../pages/Blog/Blog'
import Support from '../pages/Support'
import Prof from '../pages/Prof'
import Faq from '../pages/Faq'
import Web from '../pages/Web'
import Mobile from '../pages/Mobile'
import Help from '../pages/Help'
import Plan from '../pages/plan'
import AuthRoute from './AuthRoute'

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/blog" element={<BlogPage />} />

      <Route path="/blog/:blogName" element={<Blog />} />
      <Route path="/blog/category/:type" element={<CategoryPage />} />

      <Route path="/pro" element={<CronoPro />} />
      <Route path="/about" element={<About />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/bodyM" element={<BodyMeasurement />} />

      <Route path="/support" element={<Support />} />
      <Route path="/web_version" element={<Web />} />
      <Route path="/mob_version" element={<Mobile />} />
      <Route path="/professional_version" element={<Prof />} />
      <Route path="/faq" element={<Faq />} />

      <Route
        path="/checkCalories/"
        element={
          <AuthRoute>
            <Diarypage />
          </AuthRoute>
        }
      />
      {/* <Route path="/checkCalories/trends" element={<Trends />} /> */}
      <Route
        path="/checkCalories/help"
        element={
          <AuthRoute>
            <Help />
          </AuthRoute>
        }
      />
      <Route path="/checkCalories/plan" element={<Plan />} />
      {/* All Routes of AfterLogin page will come under this route so add them here */}
    </Routes>
  )
}

export default AllRoutes
