import { Box, Center, Heading, HStack, Text } from '@chakra-ui/react'
import LayoutComponent from '@/components/Layout'
// import { ToggleThemeButton } from '@/components/ToggleTheme/Index'
import { getInfoColors } from '@/utils/PokemonUtils'
import { useLayoutEffect, useState } from 'react'
import { getIconByType } from '@/utils/IconUtils'

export function Home() {
  const [bgColor, setBgColor] = useState<string>()
  const [pokemonType, setPokemonType] = useState<string>()
  const [pokemonIcon, setPokemonIcon] = useState<string>()

  const getInfos = () => {
    const { color, type } = getInfoColors()

    setBgColor(color)
    setPokemonType(type)
    setPokemonIcon(getIconByType(type))
  }
  useLayoutEffect(() => {
    getInfos()
  }, [])

  return (
    <LayoutComponent title="Home">
      <HStack backgroundColor={bgColor} width="100%" height="100vh">
        <Heading size="xs" fontWeight="medium">
          scroll for more
        </Heading>
        <Center>
          <Text fontFamily="Montserrat">A new away to see your pokémons</Text>
          <Text fontFamily="Kabond" fontSize="228px">
            Pokedex
          </Text>
          <Box
            as="span"
            display="flex"
            flex={1}
            width="250px"
            bgColor="red.500"
            flexDir="row"
          >
            <img src={pokemonIcon} width="20px" />
            <Text>{pokemonType}</Text>
          </Box>
        </Center>
      </HStack>
      {/* <ToggleThemeButton /> */}
    </LayoutComponent>
  )
}
