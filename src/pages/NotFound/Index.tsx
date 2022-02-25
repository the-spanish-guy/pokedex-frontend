import { useLayoutEffect, useState } from 'react'
import LayoutComponent from '@/components/Layout'
import { Box, Flex, Heading, Image } from '@chakra-ui/react'

import Togepi from '@/assets/404.svg'
import { getInfoColors } from '@/utils/PokemonUtils'

export function NotFound() {
  const [bgColor, setBgColor] = useState<string>()
  const [reverseColor, setReverseColor] = useState<string>()
  const getInfos = () => {
    const { color, reverseColor } = getInfoColors()

    setBgColor(color)
    setReverseColor(reverseColor)
  }
  useLayoutEffect(() => {
    getInfos()
  }, [])

  return (
    <LayoutComponent title="Home">
      <Flex
        width="100vw"
        height="100vh"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        bgColor={bgColor}
      >
        <Box
          display="flex"
          width="100%"
          flexDir="row"
          position="relative"
          alignItems="center"
          justifyContent="center"
        >
          <Heading
            ml="70px"
            top="-60px"
            fontSize="288px"
            position="absolute"
            color={reverseColor}
            fontWeight="semibold"
            letterSpacing="0.22em"
          >
            404
          </Heading>
          <Flex
            mt="100px"
            width="592px"
            zIndex="9999"
            height="592px"
            overflow="hidden"
            bgColor="#F3F3F350"
            borderRadius="999999"
          >
            <Image src={Togepi} />
          </Flex>
        </Box>
        <Heading
          fontWeight="regular"
          fontSize="32px"
          mt="24px"
          color={reverseColor}
        >
          sorry, page not found
        </Heading>
      </Flex>
    </LayoutComponent>
  )
}
