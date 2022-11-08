import { Box } from '@chakra-ui/react'
import React from 'react'
import { Outlet } from 'react-router-dom'
import AfterLoginPageNavbar from '../../components/AfterLoginPageNavbar'

const AfterLoginPage = () => {
  return (
    <Box>
      <AfterLoginPageNavbar />
      <Outlet />
    </Box>
  )
}

export default AfterLoginPage
