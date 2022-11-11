import { Box, Progress, Spacer, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { useSelector } from 'react-redux'
import { getTotalEnergy } from '../energySummery/energySummeryData'
import { colorOfBar, macroTargets } from './macroData'

const MacroTargets = () => {
  const { foodItemsInList, baseValue, loading } = useSelector(
    (state) => state.diary,
  )
  if (foodItemsInList) var { per } = getTotalEnergy(foodItemsInList, baseValue)

  if (foodItemsInList) var { targets } = macroTargets(foodItemsInList, per)

  return (
    <VStack w="full">
      <Text fontSize={14} fontWeight="600" w="full">
        Macronutrient Targets
      </Text>
      <Spacer />
      <VStack w="full">
        {targets.map(({ title, value }, ind) => (
          <Box
            key={ind}
            display="grid"
            gap="5px"
            w="full"
            alignItems="center"
            gridTemplateColumns="0.2fr 1fr"
          >
            <Text fontWeight="600" fontSize={14}>
              {title}
            </Text>
            <Progress
              colorScheme={colorOfBar(value)}
              isAnimated={!loading}
              isIndeterminate={loading}
              height="19.25px"
              value={value}
              borderRadius='3px'
              boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
            />
          </Box>
        ))}
      </VStack>
    </VStack>
  )
}

export default MacroTargets
