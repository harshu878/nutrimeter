import {
  CircularProgress,
  CircularProgressLabel,
  HStack,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react'
import React from 'react'
import MacroTargets from '../macroTargets/MacroTargets'
import { StyledBox } from './energySummery.styles'
import { useSelector } from 'react-redux'
import { colorOfCircle, getTotalEnergy } from './energySummeryData'

const EnergySummery = () => {
  const { foodItemsInList, baseValue, loading } = useSelector(
    (store) => store.diary,
  )

  return (
    <Stack
      w="full"
      h={{ base: 'fit-content', lg: '175px' }}
      boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
      display={{ base: 'flex', lg: 'grid' }}
      gridTemplateColumns="1.1fr 1fr"
      direction={{ base: 'column', lg: 'row' }}
    >
      <VStack
        h="full"
        borderRight="1px solid #d6d4d4"
        px="8px"
        justifyContent="center"
        alignItems="center"
        spacing={4}
      >
        <Text fontSize={14} pl="5px" fontWeight="600" w="full">
          Energy Summery
        </Text>
        <HStack>
          <VStack spacing={0} h="115px">
            <CircularProgress
              size="100px"
              thickness="15px"
              value={getTotalEnergy(foodItemsInList, baseValue).per}
              isIndeterminate={loading}
              color={colorOfCircle(
                getTotalEnergy(foodItemsInList, baseValue).per,
              )}
            >
              <CircularProgressLabel
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <p style={{ fontSize: '15px', fontWeight: 'bold' }}>
                  {getTotalEnergy(foodItemsInList, baseValue).total.toFixed(0)}
                </p>
                <p style={{ fontSize: '11px', color: 'gray' }}>kcal</p>
              </CircularProgressLabel>
            </CircularProgress>
            <Text fontSize="11px" fontWeight="bold">
              CONSUMED
            </Text>
          </VStack>
          <VStack spacing={0} h="115px">
            <CircularProgress
              size="100px"
              thickness="15px"
              value={getTotalEnergy(foodItemsInList, baseValue).remPer}
              isIndeterminate={loading}
              color={colorOfCircle(
                getTotalEnergy(foodItemsInList, baseValue).per,
              )}
            >
              <CircularProgressLabel
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <p style={{ fontSize: '15px', fontWeight: 'bold' }}>
                  {getTotalEnergy(foodItemsInList, baseValue).remaining.toFixed(
                    0,
                  )}
                </p>
                <p style={{ fontSize: '11px', color: 'gray' }}>kcal</p>
              </CircularProgressLabel>
            </CircularProgress>
            <Text fontSize="11px" fontWeight="bold">
              BURNED
            </Text>
          </VStack>
          <StyledBox>
            <div className="topBox">
              {getTotalEnergy(foodItemsInList, baseValue).remaining.toFixed(0)}
            </div>
            <div className="bottomBox">Calories remaining</div>
            <Text fontSize="11px" color="black" fontWeight="bold">
              BUDGET
            </Text>
          </StyledBox>
        </HStack>
      </VStack>
      <HStack h="full" px="8px" justifyContent="center" alignItems="center">
        <MacroTargets />
      </HStack>
    </Stack>
  )
}

export default EnergySummery
