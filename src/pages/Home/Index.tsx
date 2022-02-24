import { useLayoutEffect, useState } from 'react'
import {
  Box,
  Flex,
  Text,
  Image,
  HStack,
  Center,
  chakra,
  Button,
  Heading,
  Container,
  useColorModeValue
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { IconPlus } from '@tabler/icons'

import useStore from '@/stores/useStore'
import Pokedex from '@/assets/cover.png'
import LayoutComponent from '@/components/Layout'
import { getIconByName } from '@/utils/IconUtils'
import HeaderComponent from '@/components/Header'
import { getInfoColors } from '@/utils/PokemonUtils'
import PokemonService from '@/services/PokemonService'
import FooterComponent from '@/components/Footer/Index'
import ViewportBlock from '@/components/Viewport/Index'
import CardPokemonComponent from '@/components/CardPokemon'
import { ScrollToTop } from '@/components/ScrollToTop/Index'
import FilterTypesComponent from '@/components/FIlterTypes/Index'
import { ToggleThemeButton } from '@/components/ToggleTheme/Index'
import { ResultPokemon } from '@/interfaces/ResultPokemonApiInterface'

const ChakraIconPlus = chakra(IconPlus)

export function Home() {
  const [bgColor, setBgColor] = useState<string>()
  const [darkColor, setDarkColor] = useState<string>()
  const [pokemonType, setPokemonType] = useState<string>()
  const [reverseColor, setReverseColor] = useState<string>()
  const [pokemons, setPokemons] = useState<ResultPokemon[] | null>(null)

  const { setglobalBgColor, setInViewPort } = useStore()

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
      <ViewportBlock
        onLeaveViewport={() => setInViewPort(false)}
        onEnterViewport={() => setInViewPort(true)}
      />
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
      <HeaderComponent />

      <FilterTypesComponent />

      <Container maxW="90%">
        <Flex
          flexDirection="row"
          width="100%"
          height="auto"
          flexWrap="wrap"
          justifyContent="center"
        >
          {pokemons?.map((pokemon, index) => (
            <motion.div
              style={{
                width: '384px',
                marginRight: '75px',
                marginBottom: '64px',
                height: 'auto',
                cursor: 'pointer'
              }}
              key={index}
              whileHover={{ scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <CardPokemonComponent
                name={pokemon.name}
                id={pokemon.id}
                color={pokemon.color}
                images={pokemon.images}
                types={pokemon.types}
                info={pokemon.info}
              />
            </motion.div>
          ))}
        </Flex>
      </Container>

      <Center>
        <Button
          rounded="76"
          p="32px"
          mt="104px"
          mb="105px"
          fontFamily="Montserrat"
          fontSize="16px"
          fontWeight="semibold"
          bgColor={useColorModeValue('whiteAlpha.600', '#2B3240')}
          color={useColorModeValue('#2B3240', 'whiteAlpha.600')}
          rightIcon={
            <ChakraIconPlus
              size="16px"
              color={useColorModeValue('#2B3240', 'whiteAlpha.600')}
            />
          }
        >
          Carregar Mais
        </Button>
      </Center>

      <FooterComponent />
      <ToggleThemeButton />
      <ScrollToTop color={bgColor as string} />
    </LayoutComponent>
  )
}
