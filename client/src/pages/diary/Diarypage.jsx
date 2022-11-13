import { Box, Stack, VStack } from '@chakra-ui/react'
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
import AfterLoginPageNavbar from '../../components/AfterLoginPageNavbar'

const Diarypage = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { foodItemsInList } = useSelector((store) => store.diary)
  const { data:{token} } = useSelector((store) => store.auth)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getfoodProducts(token))
  }, [token])
  if (foodItemsInList) {
    var { main, micro, vitamins, Major, Fat } = data(foodItemsInList)
  }

  const toggleVisibility = () => setIsOpen((prev) => (prev = !prev))

  return (
    <VStack>
      <AfterLoginPageNavbar currentLink="dairy" />
      <Stack
        direction={{ base: 'column', lg: 'row' }}
        w={{ base: '98%', lg: '1100px' }}
        h={{ base: 'fit-content', lg: '1200px' }}
        margin="auto"
        mt="20px"
        align="flex-start"
      >
        <Box
          w={{ base: '98%', md: '', lg: '430px' }}
          h={{ base: 'fit-content', lg: '900px' }}
          overflow="hidden"
        >
          <Stack
            w="full"
            direction={{ base: 'column', md: 'row', lg: 'column' }}
          >
            <Chart title="Bar Representation" />
            <LineChart title="Line Representation" />
          </Stack>
        </Box>
        <Box
          w={{ base: '99%', lg: '730px' }}
          h={{ base: 'fit-content', lg: '1880px' }}
          display="flex"
          flexDirection="column"
          gap="7px"
        >
          <AddFoodItem toggleVisibility={toggleVisibility} />
          <CustomTable />
          <CircularProgressDisplayer />
          <EnergySummery />
          <Stack
            direction={{ base: 'column', md: 'row' }}
            justify="space-between"
          >
            <VStack>
              <CustomSmallTable title="Lipid" data={Fat} />
              <CustomSmallTable title="Major" data={Major} />
              <CustomSmallTable title="Vitamins" data={vitamins} />
            </VStack>
            <VStack>
              <CustomSmallTable title="Micro" data={micro} />
              <CustomSmallTable title="Main" data={main} />
            </VStack>
          </Stack>
          {isOpen && <AddItemWindow toggleVisibility={toggleVisibility} />}
        </Box>
      </Stack>
    </VStack>
  )
}

export default Diarypage
