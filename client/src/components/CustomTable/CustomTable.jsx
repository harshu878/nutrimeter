import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { TableWrapper } from './cumstomTable.styles'
import { useSelector, useDispatch } from 'react-redux'
import { deleteItem } from '../../redux/diary/diary.actions'
import { RiDeleteBack2Fill } from 'react-icons/ri'

const CustomTable = () => {
  const { foodItemsInList, loading, error } = useSelector(
    (store) => store.diary,
  )
  const {
    data: { token },
  } = useSelector((store) => store.auth)
  const dispatch = useDispatch()

  return (
    <Box
      w="full"
      h={{ base: '260px', lg: '300px' }}
      boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
    >
      <TableWrapper>
        <thead>
          <tr>
            <th>Description</th>
            <th>Servings</th>
            <th>Energy (kcal)</th>
          </tr>
        </thead>
        <tbody>
          {foodItemsInList.map(
            ({ totalEnergy, _id, servings, product: { Description } }, ind) => {
              if (loading) {
                return <div key={ind}>Loading....</div>
              } else if (error) {
                return <div key={ind}>Error...</div>
              }
              return (
                <tr key={ind}>
                  <td style={{ display: 'flex', gap: '5px' }}>
                    <Image w="14px" h="15px" src="/Images/appleImage.png" />
                    <Text mr="10px">{Description}</Text>
                    <RiDeleteBack2Fill
                      color="#b55c5c"
                      size={19}
                      cursor="pointer"
                      onClick={() => {
                        dispatch(deleteItem(_id, token))
                      }}
                    />
                  </td>
                  <td style={{ textAlign: 'center' }}>{servings}</td>
                  <td style={{ textAlign: 'right' }}>
                    {totalEnergy.toFixed(2)}
                  </td>
                </tr>
              )
            },
          )}
        </tbody>
      </TableWrapper>
    </Box>
  )
}

export default CustomTable
