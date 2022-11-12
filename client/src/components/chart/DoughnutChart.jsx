import React from 'react'
import { Doughnut } from 'react-chartjs-2'
import { Chart as ChartJS } from 'chart.js/auto'
import { Box } from '@chakra-ui/react'
import { singleProductData } from './chartData'

const DoughnutChart = ({ product }) => {
  let data = singleProductData(product)
  return (
    <Box h="fit-content" w="170px">
      <Doughnut data={data} />
    </Box>
  )
}

export default DoughnutChart
