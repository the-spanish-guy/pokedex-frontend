import { useLayoutEffect, useState } from 'react'
import { Center, HStack, Text, useColorModeValue } from '@chakra-ui/react'

import { getInfoColors } from '@/utils/PokemonUtils'

type LoadProps = {
  show: boolean
}

export const LoadComponent = ({ show }: LoadProps) => {
  const [bgColor, setBgColor] = useState<string>()

  const getInfos = () => {
    const { color } = getInfoColors()

    setBgColor(color)
  }

  useLayoutEffect(() => {
    getInfos()
  }, [])

  return (
    <>
      {show && (
        <HStack
          top={0}
          width="100%"
          opacity="80"
          zIndex="99999"
          height="100vh"
          direction="row"
          display={'flex'}
          bgColor={bgColor}
          position={'fixed'}
          alignItems={'center'}
          justifyContent="center"
        >
          <Center>
            <Text
              fontSize="24px"
              fontWeight={400}
              fontFamily="Montserrat"
              color={useColorModeValue('blackAlpha.500', 'whiteAlpha.500')}
            >
              Loading...
            </Text>
          </Center>
        </HStack>
      )}
    </>
  )
}
