import { HStack } from '@chakra-ui/react'
import React from 'react'
import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react'

const CircularProgressDisplayer = () => {
  return (
    <HStack
      w="full"
      h="111.2px"
      boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
      px={5}
      justify="space-evenly"
    >
      {new Array(8).fill(0).map((_, ind) => (
        <CircularProgress
          key={ind}
          size="79px"
          thickness="7px"
          value={40}
          color="green.400"
        >
          <CircularProgressLabel
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <p style={{ fontSize: '15px' }}>40%</p>
            <p style={{ fontSize: '10px' }}>Fiber</p>
          </CircularProgressLabel>
        </CircularProgress>
      ))}
    </HStack>
  )
}

export default CircularProgressDisplayer
