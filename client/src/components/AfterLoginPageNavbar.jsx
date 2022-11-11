import React, { useState } from 'react'
import { Box, HStack } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const AfterLoginPageNavbar = () => {
  const [isActive, setIsActive] = useState('dairy')

  return (
    <StyledHStack
      w="full"
      h="70px"
      borderBottom="1px solid #d6d4d4"
      px="30px"
      align="end"
      justify="center"
      spacing="25px"
    >
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
      <Link onClick={() => setIsActive('help')} to="">
        <Box
          className="links"
          id={isActive === 'help' ? 'active' : 'notActive'}
          fontWeight="500"
          color="rgb(184,56,5)"
        >
          Help
        </Box>
      </Link>
    </StyledHStack>
  )
}

export default AfterLoginPageNavbar

const StyledHStack = styled(HStack)`
  .links {
    border-top-left-radius: 7px;
    border-top-right-radius: 7px;
    padding: 3px 9px;
    margin-bottom: -1px;
    z-index: 1;
  }
  #active {
    border: 1px solid #d6d4d4;
    border-bottom: 1px solid white;
    color: #ff0000;
  }
`
