import { Box, Button, Flex, Image, SimpleGrid, Text } from '@chakra-ui/react'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord'
import AfterLoginPageNavbar from '../components/AfterLoginPageNavbar'
import Footer from '../components/Footer'

function Help() {
  const liLinks = [
    {
      name: 'Blog',
    },
    {
      name: 'Forums',
    },
    {
      name: 'Privacy',
    },
    {
      name: 'Terms',
    },
    {
      name: 'Affiliates',
    },
    {
      name: 'Jobs',
    },
  ]
  return (
    <Box>
      <AfterLoginPageNavbar currentLink="helps" />
      <Box m={10} ml={20}>
        <Text fontSize={30} fontWeight={600} color={'gray.600'}>
          Find your answers here
        </Text>
        <Text color={'gray.400'} fontWeight={600}>
          We have compiled all of our resources in one place so you can find the
          help you need.
        </Text>
      </Box>
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3 }}
        gap={5}
        mr={{ base: '20px', md: '40px', lg: '80px' }}
        ml={{ base: '20px', md: '40px', lg: '80px' }}
      >
        <Box
          borderRadius={10}
          _hover={{ boxShadow: '2xl', transition: '.7s' }}
          mb={4}
          p={2}
          width={'335px'}
          border={'1px'}
          borderColor={'gray.500'}
        >
          <Text color={'gray.600'} fontWeight={700} ml={3} textAlign={'left'}>
          Video Tutorials
          </Text>
          <Flex>
            <Box>
              <Image
                w={400}
                src={
                  'https://cdn1.cronometer.com/media/icon-cronometer-university.png'
                }
              />
            </Box>
            <Box>
              <Text m={3} textAlign={'left'} fontSize={'12px'}>
                Our video tutorial series will teach you everything you need to
                know about our application, one feature at a time.
              </Text>
            </Box>
          </Flex>
          <Button
            color={'white'}
            mt={10}
            mb={3}
            ml={10}
            width={250}
            backgroundColor={'green.400'}
          >
            Watch
          </Button>
        </Box>
        <Box
          borderRadius={10}
          _hover={{ boxShadow: '2xl', transition: '.7s' }}
          mb={4}
          p={2}
          width={'335px'}
          border={'1px'}
          borderColor={'gray.500'}
        >
          <Text color={'gray.600'} fontWeight={700} ml={3} textAlign={'left'}>
          Find a Professional
          </Text>
          <Flex>
            <Box>
              <Image
                w={400}
                src={
                  'https://cdn1.cronometer.com/media/icon-find-a-professional.png'
                }
              />
            </Box>
            <Box>
              <Text m={3} textAlign={'left'} fontSize={'12px'}>
              Find a coach, nutritionist or trainer to help achieve your health and fitness goals.
              </Text>
            </Box>
          </Flex>
          <Button
            color={'white'}
            mt={10}
            ml={10}

            mb={3}
            width={250}
            backgroundColor={'green.400'}
          >
            Search
          </Button>
        </Box>
        <Box
          borderRadius={10}
          _hover={{ boxShadow: '2xl', transition: '.7s' }}
          mb={4}
          p={2}
          width={'335px'}
          border={'1px'}
          borderColor={'gray.500'}
        >
          <Text color={'gray.600'} fontWeight={700} ml={3} textAlign={'left'}>
          Contact Support
          </Text>
          <Flex>
            <Box>
              <Image
                w={400}
                src={
                  'https://cdn1.cronometer.com/media/icon-contact-support.png'
                }
              />
            </Box>
            <Box>
              <Text m={3} textAlign={'left'} fontSize={'12px'}>
              Can't find an answer to your question? Contact our support team for help.
              </Text>
            </Box>
          </Flex>
          <Button
            color={'white'}
            mt={10}
            mb={3}
            ml={10}

            width={250}
            backgroundColor={'green.400'}
          >
            support@cronometer.com
          </Button>
        </Box>
        <Box
          borderRadius={10}
          _hover={{ boxShadow: '2xl', transition: '.7s' }}
          mb={4}
          p={2}
          width={'335px'}
          border={'1px'}
          borderColor={'gray.500'}
        >
          <Text color={'gray.600'} fontWeight={700} ml={3} textAlign={'left'}>
          User Manual
          </Text>
          <Flex>
            <Box>
              <Image
                w={400}
                src={'https://cdn1.cronometer.com/media/icon-user-manual.png'}
              />
            </Box>
            <Box>
              <Text m={3} textAlign={'left'} fontSize={'12px'}>
              Complete app info with screenshots and step-by-step explanations of every feature.
              </Text>
            </Box>
          </Flex>
          <Button
            color={'white'}
            mt={10}
            mb={3}
            ml={10}

            width={250}
            backgroundColor={'green.400'}
          >
            Read
          </Button>
        </Box>
        <Box
          borderRadius={10}
          _hover={{ boxShadow: '2xl', transition: '.7s' }}
          mb={4}
          p={2}
          width={'335px'}
          border={'1px'}
          borderColor={'gray.500'}
        >
          <Text color={'gray.600'} fontWeight={700} ml={3} textAlign={'left'}>
          Cronometer Blog
          </Text>
          <Flex>
            <Box>
              <Image
                w={400}
                src={'https://cdn1.cronometer.com/media/icon-blog.png'}
              />
            </Box>
            <Box>
              <Text m={3} textAlign={'left'} fontSize={'12px'}>
              Check out our blog to stay up to date on all the latest news and updates.
              </Text>
            </Box>
          </Flex>
          <Button
            color={'white'}
            mt={10}
            mb={3}
            ml={10}

            width={250}
            backgroundColor={'green.400'}
          >
            Read
          </Button>
        </Box>
        <Box
          borderRadius={10}
          _hover={{ boxShadow: '2xl', transition: '.7s' }}
          mb={4}
          p={2}
          width={'335px'}
          border={'1px'}
          borderColor={'gray.500'}
        >
          <Text color={'gray.600'} fontWeight={700} ml={3} textAlign={'left'}>
          Community Forums
          </Text>
          <Flex>
            <Box>
              <Image
                w={400}
                src={
                  'https://cdn1.cronometer.com/media/icon-community-forum.png'
                }
              />
            </Box>
            <Box>
              <Text m={3} textAlign={'left'} fontSize={'12px'}>
              Want to see how others are using Cronometer? Join the conversation on our forums.
              </Text>
            </Box>
          </Flex>
          <Button
            color={'white'}
            mt={10}
            mb={3}
            ml={10}

            width={250}
            backgroundColor={'green.400'}
          >
            Say Hello
          </Button>
        </Box>
      </SimpleGrid>

      {/* Links  */}
      <Flex
        gap={5}
        m={{ base: '20px', md: 'auto', lg: 'auto' }}
        width={{ base: '10%', md: '30%', lg: '40%' }}
      >
        {liLinks.map((el, i) => (
          <Text
            mb={5}
            textAlign={'center'}
            fontWeight={500}
            fontSize={'14px'}
            color={'gray.600'}
          >
            <FiberManualRecordIcon
              style={{
                marginRight: '10px',
                height: '10px',
                width: '10px',
                color: 'orange',
              }}
            />{' '}
            {el.name}
          </Text>
        ))}
      </Flex>
      <Footer />
    </Box>
  )
}

export default Help
