import { Box, Flex, Text } from "@chakra-ui/react"

function Finisher(){
    return (
        <Box borderTop={"1px"} borderColor={"gray.400"} p={8}>
        <Flex justifyContent={"space-between"}>
          <Text color={"gray.600"}>Nutrimeter</Text>
          <Text color={"gray.600"}>Powered by Zendesk</Text>
        </Flex>
      </Box>
    )
}

export default Finisher