import { Box, Progress, Spacer, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const MacroTargets = () => {
  return (
    <VStack w="full">
      <Text fontSize={14} fontWeight="600" w="full">
        Macronutrient Targets
      </Text>
      <Spacer />
      <VStack w="full">
        {new Array(4).fill(0).map((_, ind) => (
          <Box
            key={ind}
            display="grid"
            gap="5px"
            w="full"
            alignItems="center"
            gridTemplateColumns="0.2fr 1fr"
          >
            <Text fontWeight="600" fontSize={14}>
              Energy
            </Text>
            <Progress
              //   bg="#ffffff"
              colorScheme="yellow"
              height="19.25px"
              value={20}
              boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
            />
          </Box>
        ))}
      </VStack>
    </VStack>
  )
}

export default MacroTargets
