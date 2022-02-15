import { Text, useColorModeValue } from '@chakra-ui/react'

import useStore from '@/stores/useStore'

export default function Counter() {
  const counter = useStore(state => state.counter)
  return (
    <Text
      fontWeight="bold"
      textAlign="center"
      color={useColorModeValue('#5e69ee', '#F4F4FB')}
    >
      {counter}
    </Text>
  )
}
