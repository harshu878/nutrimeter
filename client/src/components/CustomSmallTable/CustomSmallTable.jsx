import { Box, Progress } from '@chakra-ui/react'
import React from 'react'
import { TableWrapper } from './CustomSmallTable.styles'

const CustomSmallTable = () => {
  return (
    <Box
      w="354px"
      h="152px"
      boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
    >
      <Box
        w="full"
        textAlign="center"
        color="#54504c"
        backgroundColor="#eeeeee"
        fontSize="13px"
        fontWeight="bold"
        p="2px"
      >
        Description
      </Box>
      <TableWrapper>
        <tbody>
          {new Array(5).fill(0).map((_, ind) => (
            <tr key={ind}>
              <td>Energy</td>
              <td style={{ textAlign: 'right' }}>227.1</td>
              <td>kCal</td>
              <td
                style={{
                  display: 'flex',
                  justifyContent: 'right',
                }}
              >
                <Progress
                  //   bg="#ffffff"
                  colorScheme="yellow"
                  height="19.25px"
                  w="87.5px"
                  value={20}
                  boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </TableWrapper>
    </Box>
  )
}

export default CustomSmallTable
