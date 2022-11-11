import { Box, Text } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { TableWrapper } from './SearchResultTable.styles'
import { GiHealthPotion } from 'react-icons/gi'

const SearchResultTable = ({ allFoodItems }) => {
  const { loading, error } = useSelector((store) => store.diary)

  useEffect(() => {}, [])
  return (
    <Box
      w="full"
      h="300px"
      boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
      overflow="auto"
    >
      <TableWrapper>
        <thead>
          <tr>
            <th style={{ textAlign: 'left', paddingLeft: '25px' }}>
              Description
            </th>
            <th>Source</th>
          </tr>
        </thead>
        <tbody>
          {allFoodItems?.map(({ Description }, ind) => {
            if (loading) {
              return <div key={ind}>Loading....</div>
            } else if (error) {
              return <div key={ind}>Error...</div>
            }
            return (
              <tr key={ind}>
                <td style={{ textAlign: 'left' }}>
                  <Text>{Description}</Text>
                </td>
                <td
                  style={{
                    display: 'flex',
                    justifyContent: 'end',
                    gap: '10px',
                    paddingRight: '30px',
                  }}
                >
                  <GiHealthPotion color="red" />
                  <Text fontSize="10px" fontWeight={600}>
                    NCCDB
                  </Text>
                </td>
              </tr>
            )
          })}
        </tbody>
      </TableWrapper>
    </Box>
  )
}

export default SearchResultTable
