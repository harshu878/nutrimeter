import { Box, HStack, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import CustomTable from '../../components/CustomTable/CustomTable'
import CustomSmallTable from '../../components/CustomSmallTable/CustomSmallTable'
import CircularProgressDisplayer from '../../components/CircularProgessDiv/CircularProgressDisplayer'
import EnergySummery from '../../components/energySummery/EnergySummery'
import { useDispatch, useSelector } from 'react-redux'
import { getfoodProducts } from '../../redux/diary/diary.actions'
import { data } from './diary.data'
import Chart from '../../components/chart/Chart'
import LineChart from '../../components/chart/LineChart'
import AddFoodItem from '../../components/AddFoodItemNav'
import AddItemWindow from '../../components/AddItemWindow'

const Diarypage = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { foodItemsInList } = useSelector((store) => store.diary)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getfoodProducts())
  }, [dispatch])
  if (foodItemsInList) {
    var { main, micro, vitamins, Major, Fat } = data(foodItemsInList)
  }

  const toggleVisibility = () => setIsOpen((prev) => (prev = !prev))

  return (
    <HStack w="1100px" h="1200px" margin="auto" mt="20px" align="flex-start">
      <Box w="430px" h="900px" overflow="hidden">
        <VStack w="full">
          <Chart title="Bar Representation" />
          <LineChart title="Line Representation" />
        </VStack>
      </Box>
      <Box w="730px" h="1880px" display="flex" flexDirection="column" gap="7px">
        <AddFoodItem toggleVisibility={toggleVisibility} />
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
        {isOpen && <AddItemWindow toggleVisibility={toggleVisibility} />}
      </Box>
    </HStack>
  )
}

export default Diarypage
