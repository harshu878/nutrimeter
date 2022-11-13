import { HStack, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { FaWalking } from 'react-icons/fa'
import { GiHealthNormal } from 'react-icons/gi'
import { BiNotepad } from 'react-icons/bi'

const AddFoodItem = ({ toggleVisibility }) => {
  return (
    <HStack
      w={{ base: '100%', md: '770px' }}
      h="30px"
      mb="6px"
      spacing={{ base: 1, md: 4 }}
    >
      <HStack
        _hover={{ cursor: 'pointer', bg: '#fbf2f2', borderRadius: '13px' }}
        padding="7px"
        onClick={toggleVisibility}
      >
        <Image src="/Images/appleImage.png" w="14px" />
        <Text
          fontSize={{ base: 10, md: 14 }}
          fontWeight="bold"
          color="gray.600"
        >
          ADD ITEM
        </Text>
      </HStack>
      <HStack
        _hover={{ cursor: 'pointer', bg: '#fbf2f2', borderRadius: '13px' }}
        padding="7px"
      >
        <FaWalking color="green" fontSize={16} />
        <Text
          fontSize={{ base: 10, md: 14 }}
          fontWeight="bold"
          color="gray.600"
        >
          ADD EXERCISE
        </Text>
      </HStack>
      <HStack
        _hover={{ cursor: 'pointer', bg: '#fbf2f2', borderRadius: '13px' }}
        padding="7px"
      >
        <GiHealthNormal color="red" fontSize={{ base: 10, md: 14 }} />
        <Text
          fontSize={{ base: 10, md: 14 }}
          fontWeight="bold"
          color="gray.600"
        >
          ADD BIOMETRICS
        </Text>
      </HStack>
      <HStack
        _hover={{ cursor: 'pointer', bg: '#fbf2f2', borderRadius: '13px' }}
        padding="7px"
      >
        <BiNotepad color="blue" fontSize={16} />
        <Text
          fontSize={{ base: 10, md: 14 }}
          fontWeight="bold"
          color="gray.600"
        >
          ADD NOTES
        </Text>
      </HStack>
    </HStack>
  )
}

export default AddFoodItem
