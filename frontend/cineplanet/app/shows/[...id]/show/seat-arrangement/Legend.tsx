import { Box, Flex, Text } from '@radix-ui/themes';
import React from 'react'

const Legend = () => {
  return (
    <Flex gap="5">
      <Flex gap="1" align="center">
        <Box className="h-5 w-5 rounded-md bg-[var(--gray-4)]"></Box>
        <Text size="1" color='gray'>Booked</Text>
      </Flex>
      <Flex gap="1" align="center">
        <Box className="h-5 w-5 rounded-md border border-[var(--gray-11)]"></Box>
        <Text size="1" color='gray'>Available</Text>
      </Flex>
      <Flex gap="1" align="center">
        <Box className="h-5 w-5 rounded-md bg-[var(--accent-12)] text-[var(--gray-3)]"></Box>
        <Text size="1" color='gray'>Selected</Text>
      </Flex>
    </Flex>
  );
}

export default Legend