import { Box, HStack, VStack } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import CustomTable from '../../components/CustomTable/CustomTable'
import CustomSmallTable from '../../components/CustomSmallTable/CustomSmallTable'
import CircularProgressDisplayer from '../../components/CircularProgessDiv/CircularProgressDisplayer'
import EnergySummery from '../../components/energySummery/EnergySummery'
import { useDispatch, useSelector } from 'react-redux'
import { getfoodProducts } from '../../redux/diary/diary.actions'
import { data } from './diary.data'

const Diarypage = () => {
  const { foodItemsInList, loading, error } = useSelector(
    (store) => store.diary,
  )
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getfoodProducts())
  }, [])
  if (foodItemsInList.products) {
    var { main, micro, vitamins, Major, Fat } = data(foodItemsInList)
  }

  return (
    <HStack w="1085px" h="1886px" margin="auto" mt="20px" align="flex-start">
      <Box w="300px" h="1704px" border="1px solid grey"></Box>
      <Box w="770px" h="1880px" display="flex" flexDirection="column" gap="7px">
        <CustomTable />
        <CircularProgressDisplayer />
        <EnergySummery />
        <HStack justify="space-between">
          <VStack>
            <CustomSmallTable title="Lipid" data={Fat} />
            <CustomSmallTable title="Major" data={Major} />
            <CustomSmallTable title="Vitamins" data={vitamins} />
          </VStack>
          <VStack>
            <CustomSmallTable title="Micro" data={micro} />
            <CustomSmallTable title="Main" data={main} />
          </VStack>
        </HStack>
      </Box>
    </HStack>
  )
}

export default Diarypage
