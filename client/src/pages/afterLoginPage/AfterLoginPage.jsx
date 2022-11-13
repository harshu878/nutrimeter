import { Box } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Outlet } from 'react-router-dom'
import AfterLoginPageNavbar from '../../components/AfterLoginPageNavbar'
import { getfoodProducts } from '../../redux/diary/diary.actions'

const AfterLoginPage = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getfoodProducts())
  }, [dispatch])
  return (
    <Box>
      <AfterLoginPageNavbar />
      <Outlet />
    </Box>
  )
}

export default AfterLoginPage
