import { Box, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { TableWrapper } from './SearchResultTable.styles'
import { GiHealthPotion } from 'react-icons/gi'

const SearchResultTable = ({ allFoodItems, handleClickProduct }) => {
  const [selected, setSelected] = useState('')

  return (
    <Box
      w="full"
      h="270px"
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
          {allFoodItems &&
            allFoodItems.map((ele) => {
              const { Description, _id } = ele
              return (
                <tr
                  id={selected === _id ? 'active' : 'unactive'}
                  key={_id}
                  onClick={() => {
                    handleClickProduct(ele)
                    setSelected(_id)
                  }}
                >
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
