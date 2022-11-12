import React, { useState } from 'react'
import { Box, CloseButton, Stack, VStack } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const AfterLoginSideNav = ({ handleVisible }) => {
  const [isActive, setIsActive] = useState('dairy')

  return (
    <StyledVStack1
      w="100%"
      h="fit-content"
      align="center"
      justify="center"
      spacing="0"
      position="fixed"
      top={0}
      left={-7}
    >
      <Stack w="full" p="10px">
        <CloseButton
          cursor="pointer"
          onClick={handleVisible}
          alignSelf="end"
          fontSize={20}
        />
      </Stack>
      <Link onClick={() => setIsActive('dairy')} to="/checkCalories">
        <Box
          className="links"
          id={isActive === 'dairy' ? 'active' : 'notActive'}
          fontWeight="500"
          color="rgb(184,56,5)"
        >
          Diary
        </Box>
      </Link>
      <Link onClick={() => setIsActive('trends')} to="/checkCalories/trends">
        <Box
          className="links"
          id={isActive === 'trends' ? 'active' : 'notActive'}
          fontWeight="500"
          color="rgb(184,56,5)"
        >
          Trands
        </Box>
      </Link>
      <Link onClick={() => setIsActive('foods')} to="#">
        <Box
          className="links"
          id={isActive === 'foods' ? 'active' : 'notActive'}
          fontWeight="500"
          color="rgb(184,56,5)"
        >
          Foods
        </Box>
      </Link>
      <Link onClick={() => setIsActive('settings')} to="">
        <Box
          className="links"
          id={isActive === 'settings' ? 'active' : 'notActive'}
          fontWeight="500"
          color="rgb(184,56,5)"
        >
          Settings
        </Box>
      </Link>
      <Link onClick={() => setIsActive('plans')} to="">
        <Box
          className="links"
          id={isActive === 'plans' ? 'active' : 'notActive'}
          fontWeight="500"
          color="rgb(184,56,5)"
        >
          Plans
        </Box>
      </Link>
      <Link onClick={() => setIsActive('help')} to="/checkCalories/help">
        <Box
          className="links"
          id={isActive === 'help' ? 'active' : 'notActive'}
          fontWeight="500"
          color="rgb(184,56,5)"
        >
          Help
        </Box>
      </Link>
    </StyledVStack1>
  )
}

export default AfterLoginSideNav

const StyledVStack1 = styled(VStack)`
  background-color: #fffdfd;
  padding: 10px 0px;
  .links {
    padding: 10px 0px;
    font-size: 19px;
    font-weight: bold;
    z-index: 1;
    display: flex;
    justify-content: center;
    width: 100vw;
    border-bottom: 1px solid #d5d5d5;
  }
  #active {
    color: #ff0000;
    background-color: #f3f0f0;
    border-bottom: 1px solid #d5d2d2;
  }
`
