import { useLayoutEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { IPokemon } from '@/interfaces/PokemonInterface'
import {
  Box,
  Flex,
  Text,
  Image,
  Heading,
  Progress,
  Tooltip
} from '@chakra-ui/react'

import LayoutComponent from '@/components/Layout'
import { PokeballBgIcon } from '@/components/Icons'
import { getColorByType } from '@/utils/ColorUtils'
import { getIconByName } from '@/utils/IconUtils'
import { formatNumber } from '@/utils/TextUtils'

import 'swiper/css'
import 'swiper/css/pagination'

import { Pagination } from 'swiper'
import { useParams } from 'react-router-dom'
import PokemonService from '@/services/PokemonService'

export function Pokemon() {
  const { id: pokemonId } = useParams()
  const [pokemon, setPokemon] = useState<IPokemon | null>(null)

  const fetchPokemonData = async () => {
    const pokeService = new PokemonService()
    await pokeService.getPokemon(Number(pokemonId)).then(data => {
      setPokemon(data)
    })
  }

  useLayoutEffect(() => {
    console.log(pokemonId)
    fetchPokemonData()
  }, [])

  return (
    <LayoutComponent title={pokemon?.name || ''}>
      <Flex
        width="100vw"
        height="100vh"
        bgColor={`${pokemon?.types[0].type.name}.300`}
      >
        <PokeballBgIcon
          fill="#FFFFFF20"
          fontSize="764"
          top="-200px"
          left="-125px"
          position="absolute"
        />
        <Flex
          width="50vw"
          height="100vh"
          zIndex={99}
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Image src={pokemon?.images.url} width="666px" height="666px" />
          <Box
            display="flex"
            flexDir="row"
            justifyContent="space-between"
            pr="24px"
            pl="24px"
          >
            <Box mt="41px" h="50px" zIndex="99">
              {pokemon?.types?.map(({ type }) =>
                getIconByName({
                  name: type.name as string,
                  fill: getColorByType(type.name || ''),
                  mr: '16px',
                  fontSize: '40px'
                })
              )}
            </Box>
          </Box>
        </Flex>
        <Flex
          width="50vw"
          height="100vh"
          zIndex={99}
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Box>
            <Text
              wordBreak="unset"
              textAlign="center"
              color={`${pokemon?.types[0].type.name}.500`}
            >
              #{formatNumber(pokemon?.id || 0)}
            </Text>
            <Heading>{pokemon?.name}</Heading>
          </Box>
          <Box
            width="80%"
            height="auto"
            padding={8}
            __css={{
              '& .swiper-pagination-bullet': {
                backgroundColor: 'white !important'
              },
              '& .swiper-pagination-bullet-active': {
                backgroundColor: `${getColorByType(
                  pokemon?.types[0].type.name || ''
                )} !important`
              }
            }}
          >
            <Swiper
              direction={'vertical'}
              pagination={{
                clickable: true
              }}
              modules={[Pagination]}
              color="red"
              style={{
                width: '100%',
                height: '80vh',
                padding: 8
              }}
            >
              <SwiperSlide
                style={{
                  alignSelf: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center'
                }}
              >
                <Heading fontSize="32px" fontWeight="bold" mb="32px">
                  Pokedéx Data
                </Heading>
                <Flex flexDir="column" width="80%" alignSelf="self">
                  <Flex flexDirection="row" mb="32px">
                    <Heading fontSize="24px" fontWeight="medium" mr="40px">
                      Height:
                    </Heading>
                    <Heading fontSize="24px" fontWeight="medium">
                      {pokemon?.height}
                    </Heading>
                  </Flex>
                  <Flex flexDirection="row" mb="32px">
                    <Heading fontSize="24px" fontWeight="medium" mr="40px">
                      Weight:
                    </Heading>
                    <Heading fontSize="24px" fontWeight="medium">
                      {pokemon?.weight}
                    </Heading>
                  </Flex>
                  <Flex flexDirection="row" mb="32px">
                    <Heading fontSize="24px" fontWeight="medium" mr="40px">
                      Gender:
                    </Heading>
                    <Box
                      display="flex"
                      flexDirection="row"
                      justifyContent="space-between"
                      maxWidth="153px"
                    >
                      {pokemon?.gender.map(gender => {
                        return getIconByName({
                          name: gender,
                          fill: 'whiteAlpha.500',
                          fontSize: '32px',
                          mr: '9px'
                        })
                      })}
                    </Box>
                  </Flex>
                  <Flex flexDirection="row" mb="32px">
                    <Heading fontSize="24px" fontWeight="medium" mr="20px">
                      Category:
                    </Heading>
                    <Heading fontSize="24px" fontWeight="medium">
                      {pokemon?.category}
                    </Heading>
                  </Flex>
                  <Flex flexDirection="row" mb="32px">
                    <Heading fontWeight="medium" fontSize="24px" mr="40px">
                      Abilities:
                    </Heading>
                    <Box>
                      {pokemon?.abilities.map(
                        ({ ability: { name }, is_hidden: isHidden }, index) => {
                          return (
                            <Heading
                              key={index}
                              fontSize="24px"
                              fontWeight="medium"
                            >
                              {name}
                              {isHidden ? '(hidden ability)' : ''}
                              {index + 1 >= pokemon.abilities.length ? '' : ','}
                            </Heading>
                          )
                        }
                      )}
                    </Box>
                  </Flex>
                  <Flex alignItems="center">
                    <Heading fontWeight="medium" fontSize="24px" mr="10px">
                      Weakness:
                    </Heading>

                    <Box
                      display="flex"
                      flexDirection="row"
                      justifyContent="space-between"
                      maxWidth="153px"
                    >
                      {pokemon?.weakness.map(weakness => {
                        return getIconByName({
                          name: weakness,
                          fill: 'whiteAlpha.500',
                          fontSize: '24px',
                          mr: '10px'
                        })
                      })}
                    </Box>
                  </Flex>
                </Flex>
              </SwiperSlide>
              <SwiperSlide
                style={{
                  alignSelf: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center'
                }}
              >
                <Heading fontSize="32px" fontWeight="bold" mb="32px">
                  Training
                </Heading>
                <Flex flexDir="column" width="80%" alignSelf="self">
                  <Flex flexDirection="row" mb="32px">
                    <Heading fontSize="24px" fontWeight="medium" mr="40px">
                      EV yield
                    </Heading>
                    <Heading fontSize="24px" fontWeight="medium">
                      {pokemon?.training.ev_yield.map(
                        ({ stat, effort }, index) => {
                          return (
                            <span key={stat.name}>
                              {effort} {stat.name}
                              {index + 1 < pokemon?.training.ev_yield.length
                                ? ', '
                                : ''}
                            </span>
                          )
                        }
                      )}
                    </Heading>
                  </Flex>
                  <Flex flexDirection="row" mb="32px">
                    <Heading fontSize="24px" fontWeight="medium" mr="40px">
                      Catch rate
                    </Heading>
                    <Heading fontSize="24px" fontWeight="medium">
                      {pokemon?.training.catch_rate}
                    </Heading>
                  </Flex>

                  <Flex flexDirection="row" mb="32px">
                    <Heading fontSize="24px" fontWeight="medium" mr="40px">
                      Base Friendship
                    </Heading>
                    <Heading fontSize="24px" fontWeight="medium">
                      {pokemon?.training.base_friendship}
                    </Heading>
                  </Flex>
                  <Flex flexDirection="row" mb="32px">
                    <Heading fontSize="24px" fontWeight="medium" mr="20px">
                      Base Exp.
                    </Heading>
                    <Heading fontSize="24px" fontWeight="medium">
                      {pokemon?.training.base_exp}
                    </Heading>
                  </Flex>
                  <Flex flexDirection="row" mb="32px">
                    <Heading fontSize="24px" fontWeight="medium" mr="20px">
                      Growth Rate
                    </Heading>
                    <Heading fontSize="24px" fontWeight="medium">
                      {pokemon?.training.growth_rate}
                    </Heading>
                  </Flex>
                </Flex>
              </SwiperSlide>
              <SwiperSlide
                style={{
                  alignSelf: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center'
                }}
              >
                <Heading fontSize="32px" fontWeight="bold" mb="32px">
                  Breeding
                </Heading>

                <Flex flexDir="column" width="80%" alignSelf="self">
                  <Flex flexDirection="row" mb="32px">
                    <Heading fontSize="24px" fontWeight="medium" mr="40px">
                      Egg Groups
                    </Heading>
                    <Heading fontSize="24px" fontWeight="medium">
                      {pokemon?.breeding.egg_groups.map(({ name }, index) => {
                        return (
                          <span key={Math.random()}>
                            {name}
                            {index + 1 < pokemon?.breeding.egg_groups.length
                              ? ', '
                              : ''}
                          </span>
                        )
                      })}
                    </Heading>
                  </Flex>
                  <Flex flexDirection="row" mb="32px">
                    <Heading fontSize="24px" fontWeight="medium" mr="40px">
                      Gender
                    </Heading>
                    <Heading fontSize="24px" fontWeight="medium">
                      {pokemon?.breeding.gender_rate.map(
                        ({ rate, name }, index) =>
                          pokemon?.breeding.gender_rate.length > 1 ? (
                            <span
                              style={{
                                marginRight: 4,
                                color: index === 0 ? '#539DDF' : '#EF90E6'
                              }}
                              key={index}
                            >
                              {rate}% {name}
                              {index + 1 < pokemon?.breeding.gender_rate.length
                                ? ', '
                                : ''}
                            </span>
                          ) : (
                            <span
                              style={{ marginRight: 4, color: '#595761' }}
                              key={index}
                            >
                              {name}
                            </span>
                          )
                      )}
                    </Heading>
                  </Flex>
                  {/* Egg cycles
              20 (4,884–5,140 steps) */}
                </Flex>
              </SwiperSlide>
              <SwiperSlide
                style={{
                  alignSelf: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center'
                }}
              >
                <Heading fontSize="32px" fontWeight="bold" mb="32px">
                  Base stats
                </Heading>
                <Box width="90%" alignItems="center">
                  {pokemon?.base_stats.map((stat, index) => {
                    // console.log(test)
                    return (
                      <Flex
                        as="div"
                        key={index}
                        flexDirection="row"
                        justifyContent="space-between"
                        alignItems="center"
                      >
                        <Box as="div" width="15%">
                          <Heading fontSize="24px" fontWeight="medium">
                            {stat.name === 'special-attack'
                              ? 'Sp.Atk'
                              : stat.name === 'special-defense'
                              ? 'Sp.Def'
                              : stat.name}
                          </Heading>
                        </Box>
                        <Box width="6%">
                          <Heading fontSize="24px" fontWeight="medium">
                            {stat.stat}
                          </Heading>
                        </Box>
                        <Box width="60%">
                          <Progress
                            flex={1}
                            size="sm"
                            value={stat.stat}
                            max={stat.max}
                          />
                        </Box>
                        <Box width="6%">
                          <Heading fontSize="24px" fontWeight="medium">
                            {stat.min}
                          </Heading>
                        </Box>
                        <Box width="6%">
                          <Heading fontSize="24px" fontWeight="medium">
                            {stat.max}
                          </Heading>
                        </Box>
                      </Flex>
                    )
                  })}
                </Box>
              </SwiperSlide>
              <SwiperSlide
                style={{
                  alignSelf: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center'
                }}
              >
                <Heading fontSize="32px" fontWeight="bold">
                  Type
                </Heading>
                <Heading
                  fontSize="24px"
                  fontWeight="medium"
                  mb="32px"
                  mt="32px"
                >
                  The effectiveness of each type on Bulbasaur.
                </Heading>
                <Flex width="90%" justifyContent="space-between">
                  {pokemon?.effective_type.map((type, index) => {
                    return (
                      <Box
                        key={index}
                        height="85px"
                        display="flex"
                        textAlign="center"
                        alignItems="center"
                        flexDirection="column"
                        justifyContent="space-between"
                      >
                        {getIconByName({
                          name: type.type.toLocaleLowerCase(),
                          fill: 'whiteAlpha.500',
                          fontSize: '40px'
                        })}
                        <Heading fontSize="24px" fontWeight="medium">
                          {type.value}
                        </Heading>
                      </Box>
                    )
                  })}
                </Flex>
                <Heading fontSize="32px" fontWeight="bold" mt="32px">
                  Evolution
                </Heading>
                <Flex
                  width="90%"
                  flexDirection="row"
                  flexWrap="wrap"
                  justifyContent="space-evenly"
                >
                  {pokemon?.evolves.map((evolve, index) => {
                    return (
                      <Image
                        src={evolve.url}
                        width="160px"
                        height="160px"
                        key={index}
                      />
                    )
                  })}
                </Flex>
              </SwiperSlide>
              {pokemon?.other_forms.length && pokemon.other_forms.length > 1 ? (
                <SwiperSlide
                  style={{
                    alignSelf: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center'
                  }}
                >
                  <Heading fontSize="32px" fontWeight="bold" mb="32px">
                    Other Forms
                  </Heading>
                  <Flex
                    justifyContent="space-between"
                    flexDirection="row"
                    flexWrap="wrap"
                    width="90%"
                  >
                    {pokemon.other_forms
                      .filter(pokemon => !pokemon.is_default)
                      .map(({ pokemon: poke }, index) => (
                        <Tooltip
                          label={poke.name}
                          aria-label="A tooltip"
                          bgColor="transparent"
                          color={getColorByType(pokemon.types[0].type.name)}
                          key={index}
                        >
                          <Image src={poke.url} width="160px" height="160px" />
                        </Tooltip>
                      ))}
                  </Flex>
                </SwiperSlide>
              ) : (
                <></>
              )}
              )
            </Swiper>
          </Box>
        </Flex>
      </Flex>
    </LayoutComponent>
  )
}
