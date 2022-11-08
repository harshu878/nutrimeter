import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { TableWrapper } from './cumstomTable.styles'

const CustomTable = () => {
  return (
    <Box
      w="full"
      h="300px"
      boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
    >
      <TableWrapper>
        <thead>
          <tr>
            <th>Description</th>
            <th>Amount</th>
            <th>Unit</th>
            <th>Energy (kcal)</th>
          </tr>
        </thead>
        <tbody>
          {new Array(5).fill(0).map((_, ind) => (
            <tr key={ind}>
              <td style={{ display: 'flex', gap: '5px' }}>
                <Image w="14px" h="15px" src="/Images/appleImage.png" />
                <Text>Avacardo black sins</Text>
              </td>
              <td style={{ textAlign: 'right' }}>1</td>
              <td>each</td>
              <td style={{ textAlign: 'right' }}>227.12</td>
            </tr>
          ))}
        </tbody>
      </TableWrapper>
    </Box>
  )
}

export default CustomTable
