import { HStack } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getfoodProducts } from '../../redux/diary/diary.actions'
import ProgressCircle from '../ProgressCircle'
import { nutrientsData } from './data'

const CircularProgressDisplayer = () => {
  const dispatch = useDispatch()
  const { foodItemsInList } = useSelector((store) => store.diary)
  useEffect(() => {
    // dispatch(getfoodProducts())
  }, [])
  const items = nutrientsData(foodItemsInList)
  return (
    <HStack
      w="full"
      h="111.2px"
      boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
      px={5}
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
