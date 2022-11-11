import React from 'react'
import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react'
import { useSelector } from 'react-redux'

const colorOfCircle = (val) => {
  if (val <= 30) return 'yellow.400'
  else if (val > 30 && val < 70) return 'orange.400'
  else return 'green.400'
}

const ProgressCircle = ({ value, name }) => {
  const { loading } = useSelector((store) => store.diary)
  value = ((value / 1000) * 100).toFixed(2)
  value = ((value / 2400) * 100).toFixed(2)
  return (
    <CircularProgress
      size="79px"
      thickness="7px"
      value={value}
      color={colorOfCircle(value)}
      isIndeterminate={loading}
    >
      <CircularProgressLabel
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <p style={{ fontSize: '15px' }}>{value}</p>
        <p style={{ fontSize: '10px' }}>{name}</p>
      </CircularProgressLabel>
    </CircularProgress>
  )
}

export default ProgressCircle
