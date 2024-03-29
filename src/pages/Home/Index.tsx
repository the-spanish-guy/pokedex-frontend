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
  Spinner,
  useToast,
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
import { LoadComponent } from '@/components/Load'
import { getInfoColors } from '@/utils/PokemonUtils'
import PokemonService from '@/services/PokemonService'
import FooterComponent from '@/components/Footer/Index'
import ViewportBlock from '@/components/Viewport/Index'
import CardPokemonComponent from '@/components/CardPokemon'
import { ScrollToTop } from '@/components/ScrollToTop/Index'
import FilterTypesComponent from '@/components/FIlterTypes/Index'
import { ToggleThemeButton } from '@/components/ToggleTheme/Index'
import { ResultPokemon } from '@/interfaces/ResultPokemonApiInterface'
import { useNavigate } from 'react-router-dom'

const ChakraIconPlus = chakra(IconPlus)

export function Home() {
  const [bgColor, setBgColor] = useState<string>()
  const [darkColor, setDarkColor] = useState<string>()
  const [pokemonType, setPokemonType] = useState<string>()
  const [reverseColor, setReverseColor] = useState<string>()
  const [load, setLoad] = useState<boolean>(false)
  const [offset, setOffset] = useState<number>(20)
  const [loadMore, setLoadMore] = useState<boolean>(false)
  const [pokemons, setPokemons] = useState<ResultPokemon[] | null>(null)
  const [pokemonToSearch, setPokemonToSearch] = useState<string | null>(null)

  const toast = useToast()

  const navigate = useNavigate()

  const { setGlobalBgColor, setInViewPort } = useStore()

  const getInfos = () => {
    const { color, type, darkColor, reverseColor } = getInfoColors()

    setBgColor(color)
    setPokemonType(type)
    setDarkColor(darkColor)
    setGlobalBgColor(color)
    setReverseColor(reverseColor)
  }

  const loadMorePokemon = async () => {
    setLoadMore(true)
    const pokemonService = new PokemonService()
    await pokemonService
      .getPokemons({ offset })
      .then(data => {
        setPokemons(prevState => {
          if (prevState) {
            return [...prevState, ...data]
          }
          return prevState
        })
      })
      .finally(() => setLoadMore(false))

    setOffset(prevState => prevState + 20)
  }

  const getPokemons = async (id = '') => {
    console.log('teste chegando na function: ', id)
    const pokemonService = new PokemonService()
    await pokemonService
      .getPokemons({ id })
      .then(result => {
        setPokemons(result)
      })
      .catch(error =>
        toast({
          title: 'An error occurred',
          description: `Informed Pokemon ${error.response.data.msg}`,
          status: 'error',
          isClosable: true,
          variant: 'top-accent'
        })
      )
      .finally(() => setOffset(20))
  }

  const getPokemonByType = async (type: string) => {
    setLoad(true)
    const pokemonService = new PokemonService()
    await pokemonService
      .getPokemonsByType(type)
      .then(data => setPokemons(data))
      .finally(() => setLoad(false))
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
      <HeaderComponent
        onChange={({ currentTarget: { value } }) => setPokemonToSearch(value)}
        onSubmit={e => {
          e.preventDefault()
          getPokemons(pokemonToSearch || '')
        }}
      />

      <FilterTypesComponent onClick={getPokemonByType} />

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
              key={pokemon.id}
              whileHover={{ scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 300 }}
              onClick={() => navigate(`/pokemon/${pokemon.id}`)}
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
        {loadMore ? (
          <Spinner size="xl" mt="106px" mb="105px" />
        ) : (
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
            onClick={loadMorePokemon}
          >
            Carregar Mais
          </Button>
        )}
      </Center>

      <FooterComponent />
      <ToggleThemeButton />
      <LoadComponent show={load} />
      <ScrollToTop color={bgColor as string} />
    </LayoutComponent>
  )
}
