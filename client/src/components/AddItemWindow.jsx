import {
  Box,
  Button,
  CloseButton,
  FormControl,
  HStack,
  Input,
  Spacer,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  VStack,
} from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { AiOutlineSearch, AiTwotoneSetting } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import {
  addNewProduct,
  getAllProductToDisplay,
} from '../redux/diary/diary.actions'
import DoughnutChart from './chart/DoughnutChart'
import SearchResultTable from './SearchResultTable/SearchResultTable'

const AddItemWindow = ({ toggleVisibility }) => {
  const { allFoodItems } = useSelector((store) => store.diary)
  const {
    data: { token },
  } = useSelector((store) => store.auth)
  const dispatch = useDispatch()
  const [query, setQuery] = useState('')
  const [serving, setServing] = useState(1)
  const [product, setProduct] = useState('')
  const handleClickProduct = (item) => {
    setProduct(item)
  }
  const handleAddItem = () => {
    if (product === '') {
      alert('select any product')
      return
    }
    dispatch(addNewProduct({ product: product._id, serving }, token))
    toggleVisibility()
  }

  useEffect(() => {
    if (!query) dispatch(getAllProductToDisplay(query))
  }, [dispatch])
  return (
    <VStack
      w={{ base: '99%', lg: '835px' }}
      boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
      borderRadius={5}
      position="absolute"
      bg="white"
      top="3%"
      left={{ base: '0', lg: '18%' }}
    >
      <HStack
        w="full"
        px="12px"
        h="45px"
        boxShadow=" rgba(69, 69, 69, 0.09) 0px 3px 8px, rgba(66, 65, 65, 0.09) 0px 2px 16px"
      >
        <Text fontWeight={600}>Add Food to Diary</Text>
        <Spacer />
        <CloseButton onClick={toggleVisibility} />
      </HStack>
      <HStack
        w="full"
        px={{ base: '10px', lg: '20px' }}
        justifyContent="space-between"
        py="5px"
      >
        <HStack
          w="600px"
          pl="8px"
          h="31px"
          rounded={5}
          spacing={1}
          boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
        >
          <AiOutlineSearch />
          <FormControl>
            <Input
              value={query}
              onChange={({ target: { value } }) => setQuery(value)}
              h="31px"
              outline="none"
              border="none"
              variant="unstyled"
            />
          </FormControl>
        </HStack>
        <Button
          onClick={() => dispatch(getAllProductToDisplay(query))}
          variant="outline"
          outline="1px solid #e49e60ff"
          h="35px"
        >
          Search
        </Button>
        <AiTwotoneSetting color="grey" fontSize={19} />
      </HStack>
      <HStack w="full" px={{ base: '10px', lg: '20px' }}>
        <Tabs variant="enclosed" w="full">
          <TabList
            boxShadow="rgba(138, 138, 138, 0.24) 0px -3px 4px"
            pt="10px"
            pl="5px"
            h="40px"
          >
            <Tab>All</Tab>
            <Tab>Categories</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <SearchResultTable
                allFoodItems={allFoodItems}
                handleClickProduct={handleClickProduct}
              />
              <Stack
                m="auto"
                w="full"
                align="center"
                justify="center"
                mt="9px"
                spacing={7}
                direction={{ base: 'column', lg: 'row' }}
              >
                <Box>{product && <DoughnutChart product={product} />}</Box>
                <Text
                  textAlign="center"
                  w="full"
                  h="30px"
                  fontWeight="600"
                  color="orange.500"
                >
                  {product.Category || 'Add Product'}
                </Text>
                <HStack w="full" justifyContent="center" align="center">
                  <Text w="60px" fontSize={11}>
                    Enter servings
                  </Text>
                  <FormControl w="60px" h="30px">
                    <Input
                      value={serving}
                      onChange={({ target: { value } }) => setServing(+value)}
                      type="number"
                    />
                  </FormControl>
                </HStack>
                <Button
                  onClick={handleAddItem}
                  h="40px"
                  variant="outline"
                  borderColor="orange.700"
                  w="160px"
                >
                  Add Item
                </Button>
              </Stack>
            </TabPanel>
            <TabPanel>
              <SearchResultTable />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </HStack>
    </VStack>
  )
}

export default AddItemWindow
