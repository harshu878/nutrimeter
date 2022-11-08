import { Box, HStack } from '@chakra-ui/react'
import React from 'react'
import CustomTable from '../../components/CustomTable/CustomTable'
import CustomSmallTable from '../../components/CustomSmallTable/CustomSmallTable'
import CircularProgressDisplayer from '../../components/CircularProgressDisplayer'

const Diarypage = () => {
  return (
    <HStack w="1085px" h="1886px" margin="auto" mt="20px" align="flex-start">
      <Box w="300px" h="1704px" border="1px solid grey"></Box>
      <Box w="770px" h="1880px">
        <CustomTable />
        <CustomSmallTable />
        <CircularProgressDisplayer />
      </Box>
    </HStack>
  )
}

export default Diarypage
