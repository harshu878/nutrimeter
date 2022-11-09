import {
  Box,
  CircularProgress,
  CircularProgressLabel,
  HStack,
  Text,
  VStack,
} from '@chakra-ui/react'
import React from 'react'
import MacroTargets from '../macroTargets/MacroTargets'
import { StyledBox } from './energySummery.styles'

const EnergySummery = () => {
  return (
    <Box
      w="full"
      h="175px"
      boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
      display="grid"
      gridTemplateColumns="1.1fr 1fr"
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
              thickness="12px"
              value={40}
              color="blue.600"
            >
              <CircularProgressLabel
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <p style={{ fontSize: '15px', fontWeight: 'bold' }}>40%</p>
                <p style={{ fontSize: '11px', color: 'gray' }}>Fiber</p>
              </CircularProgressLabel>
            </CircularProgress>
            <Text fontSize="11px" fontWeight="bold">
              CONSUMED
            </Text>
          </VStack>
          <VStack spacing={0} h="115px">
            <CircularProgress
              size="100px"
              thickness="12px"
              value={40}
              color="red.600"
            >
              <CircularProgressLabel
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <p style={{ fontSize: '15px', fontWeight: 'bold' }}>40%</p>
                <p style={{ fontSize: '11px', color: 'gray' }}>Fiber</p>
              </CircularProgressLabel>
            </CircularProgress>
            <Text fontSize="11px" fontWeight="bold">
              BURNED
            </Text>
          </VStack>
          <StyledBox>
            <div className="topBox">1582</div>
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
    </Box>
  )
}

export default EnergySummery
