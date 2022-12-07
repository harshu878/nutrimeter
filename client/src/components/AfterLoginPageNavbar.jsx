import React, { useState } from 'react'
import { Box, HStack, Image } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import AfterLoginSideNav from './AfterLoginSideNav'
import { GiHamburgerMenu } from 'react-icons/gi'
import LogoutButton from './LogoutButton'

const AfterLoginPageNavbar = ({ currentLink }) => {
  const [isActive, setIsActive] = useState(currentLink)
  const [visible, setVisible] = useState(false)
  const handleVisible = () => {
    setVisible((prev) => (prev = !prev))
  }

  return (
    <StyledHStack
      w="full"
      h="70px"
      borderBottom="1px solid #d6d4d4"
      px="30px"
      align={{ base: 'center', lg: 'end' }}
      justify={{ base: 'end', lg: 'center' }}
      spacing="25px"
      position="relative"
    >
      <Image
        position="absolute"
        left="25px"
        src="/Images/Color logo - no background.png"
        w="190px"
      />
      <Link
        className="navLink"
        onClick={() => setIsActive('dairy')}
        to="/checkCalories"
      >
        <Box
          className="links"
          id={isActive === 'dairy' ? 'active' : 'notActive'}
          fontWeight="500"
          color="rgb(184,56,5)"
        >
          Diary
        </Box>
      </Link>
      <Link
        className="navLink"
        onClick={() => setIsActive('trends')}
        to=""
      >
        <Box
          className="links"
          id={isActive === 'trends' ? 'active' : 'notActive'}
          fontWeight="500"
          color="rgb(184,56,5)"
        >
          Trends
        </Box>
      </Link>
      <Link className="navLink" onClick={() => setIsActive('foods')} to="#">
        <Box
          className="links"
          id={isActive === 'foods' ? 'active' : 'notActive'}
          fontWeight="500"
          color="rgb(184,56,5)"
        >
          Foods
        </Box>
      </Link>
      <Link className="navLink" onClick={() => setIsActive('settings')} to="">
        <Box
          className="links"
          id={isActive === 'settings' ? 'active' : 'notActive'}
          fontWeight="500"
          color="rgb(184,56,5)"
        >
          Settings
        </Box>
      </Link>
      <Link
        className="navLink"
        onClick={() => setIsActive('plans')}
        to="/checkCalories/plan"
      >
        <Box
          className="links"
          id={isActive === 'plans' ? 'active' : 'notActive'}
          fontWeight="500"
          color="rgb(184,56,5)"
        >
          Plans
        </Box>
      </Link>
      <Link
        className="navLink"
        onClick={() => setIsActive('help')}
        to="/checkCalories/help"
      >
        <Box
          className="links"
          id={isActive === 'help' ? 'active' : 'notActive'}
          fontWeight="500"
          color="rgb(184,56,5)"
        >
          Help
        </Box>
      </Link>
      <GiHamburgerMenu
        cursor="pointer"
        onClick={() => handleVisible()}
        id="burgerIcon"
        fontSize={21}
      />
      <Box
        display={{ base: 'none', lg: 'block' }}
        position="absolute"
        right={9}
      >
        <LogoutButton />
      </Box>
      {visible && <AfterLoginSideNav handleVisible={handleVisible} />}
    </StyledHStack>
  )
}

export default AfterLoginPageNavbar

const StyledHStack = styled(HStack)`
  .navLink {
    @media screen and (max-width: 992px) {
      display: none;
    }
  }
  #burgerIcon {
    @media screen and (min-width: 992px) {
      display: none;
    }
  }
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
