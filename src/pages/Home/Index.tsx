import { useLayoutEffect, useState } from 'react'
import {
  Box,
  Center,
  Container,
  Flex,
  Heading,
  HStack,
  Image,
  Text
} from '@chakra-ui/react'
import { ToggleThemeButton } from '@/components/ToggleTheme/Index'

import useStore from '@/stores/useStore'
import LayoutComponent from '@/components/Layout'
import { getIconByName } from '@/utils/IconUtils'
import HeaderComponent from '@/components/Header'
import { getInfoColors } from '@/utils/PokemonUtils'

import Pokedex from '@/assets/cover.png'
import CardPokemonComponent from '@/components/CardPokemon'
import { PokeballBgIcon } from '@/components/Icons'
import { hexToRgbA } from '@/utils/ColorUtils'
import PokemonService from '@/services/PokemonService'
import { ResultPokemon } from '@/interfaces/ResultPokemonApiInterface'

export function Home() {
  const [bgColor, setBgColor] = useState<string>()
  const [darkColor, setDarkColor] = useState<string>()
  const [pokemonType, setPokemonType] = useState<string>()
  const [reverseColor, setReverseColor] = useState<string>()
  const [pokemons, setPokemons] = useState<ResultPokemon[] | null>(null)

  const { setglobalBgColor } = useStore()

  const getInfos = () => {
    const { color, type, darkColor, reverseColor } = getInfoColors()

    setBgColor(color)
    setPokemonType(type)
    setDarkColor(darkColor)
    setglobalBgColor(color)
    setReverseColor(reverseColor)
  }

  const getPokemons = async () => {
    const pokemonService = new PokemonService()
    const res = await pokemonService.getPokemons()
    console.log(res)
    setPokemons(res)
  }

  useLayoutEffect(() => {
    getInfos()
    getPokemons()
  }, [])

  return (
    <LayoutComponent title="Home">
      <HStack
        backgroundColor={bgColor}
        width="100%"
        height="100vh"
        direction="row"
        justifyContent="space-between"
      >
        <Box
          display="flex"
          flexDir="row"
          alignItems="center"
          alignSelf="self-end"
          transform="rotate(90deg)"
          width="14rem"
          mb="109px"
        >
          <Heading
            fontSize="xs"
            fontWeight="medium"
            transform="rotate(180deg)"
            mr="10px"
          >
            scroll for more
          </Heading>
          <Box
            as="div"
            width="91px"
            height="2px"
            bgColor="whiteAlpha.500"
            position="relative"
          />
        </Box>
        <Center flexDirection="column">
          <Text fontFamily="Montserrat" fontSize="32px">
            A new away to see your pokémons
          </Text>
          <Box position="relative">
            <Text fontFamily="Kabond" fontSize="228px" color={reverseColor}>
              Pokedéx
            </Text>
            <Image
              src={Pokedex}
              w="680px"
              h="614px"
              mt="-160px"
              ml="140px"
              alignSelf="center"
            />
          </Box>
          <Box
            as="span"
            display="flex"
            bgColor="whiteAlpha.500"
            flexDir="row"
            justifyContent="center"
            alignItems="center"
            borderRadius="60px"
            p="8px  16px"
          >
            {getIconByName({
              name: pokemonType as string,
              fill: darkColor,
              fontSize: '32px'
            })}
            <Text
              ml="16px"
              fontSize="md"
              fontWeight="semibold"
              color={darkColor}
            >
              {pokemonType}
            </Text>
          </Box>
        </Center>
        <Box
          display="flex"
          flexDir="row"
          alignItems="center"
          width="auto"
          alignSelf="flex-end"
        >
          <Heading
            fontSize="16px"
            fontWeight="medium"
            width="5rem"
            mb="56px"
            mr="69px"
          >
            PT---ENG
          </Heading>
        </Box>
      </HStack>
      <PokeballBgIcon fill={hexToRgbA('#ABDCA7', 0.2)} />
      <HeaderComponent />

      <Container maxW="90%">
        <Flex
          flexDirection="row"
          width="100%"
          height="auto"
          flexWrap="wrap"
          justifyContent="center"
        >
          {pokemons?.map((pokemon, index) => (
            <Box w="384px" mr="75px" mb="64px" h="auto" key={index}>
              <CardPokemonComponent
                name={pokemon.name}
                id={pokemon.id}
                color={pokemon.color}
                images={pokemon.images}
                types={pokemon.types}
                info={pokemon.info}
              />
            </Box>
          ))}
        </Flex>
      </Container>
      <ToggleThemeButton />
    </LayoutComponent>
  )
}
