import { Box, Progress } from '@chakra-ui/react'
import React from 'react'
import { TableWrapper } from './CustomSmallTable.styles'

const changeColor = (val) => {
  if (val <= 30) return 'yellow'
  else if (val > 30 && val < 70) return 'orange'
  else return 'green'
}

const CustomSmallTable = ({ title, data }) => {
  return (
    <Box
      w="361px"
      h="fit-content"
      py="5px"
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
        {title}
      </Box>
      <TableWrapper>
        <tbody>
          {data &&
            data.map(({ title: name, cal }, ind) => (
              <tr key={`${ind}` + `${new Date().toLocaleDateString}`}>
                <td>{name}</td>
                <td style={{ textAlign: 'right' }}>
                  {((((cal / 1000) * 100) / 2400) * 100).toFixed(2)}
                </td>
                <td>kCal</td>
                <td
                  style={{
                    display: 'flex',
                    justifyContent: 'right',
                  }}
                >
                  <Progress
                    //   bg="#ffffff"
                    colorScheme={changeColor((cal / 2400) * 100)}
                    height="18px"
                    w="87.5px"
                    value={(cal / 2400) * 100}
                    borderRadius='2px'
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
