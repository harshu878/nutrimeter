import { HStack } from '@chakra-ui/react'
import React from 'react'
import { useSelector } from 'react-redux'
import ProgressCircle from '../ProgressCircle'
import { nutrientsData } from './data'

const CircularProgressDisplayer = () => {
  const { foodItemsInList } = useSelector((store) => store.diary)
  const items = nutrientsData(foodItemsInList)
  return (
    <HStack
      w="full"
      h={{ base: 'fit-content', lg: '111.2px' }}
      boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
      px={{ base: 'auto', lg: 5 }}
      flexWrap={{ base: 'wrap', lg: 'nowrap' }}
      justify="space-evenly"
    >
      <ProgressCircle value={items.calcium} name="Calcium" />
      <ProgressCircle value={items.iron} name="Iron" />
      <ProgressCircle value={items.magnesium} name="Magnesium" />
      <ProgressCircle value={items.sodium} name="Sodium" />
      <ProgressCircle value={items.vitaminA} name="VitaminA" />
      <ProgressCircle value={items.fiber} name="Fiber" />
      <ProgressCircle value={items.protein} name="Protein" />
      <ProgressCircle value={items.cholesterol} name="Cholesterol" />
    </HStack>
  )
}

export default CircularProgressDisplayer
