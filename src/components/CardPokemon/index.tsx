import { FC, ReactElement } from 'react'

import {
  Box,
  Flex,
  Heading,
  Image,
  Text,
  useColorModeValue,
  VStack
} from '@chakra-ui/react'

import { PokeballBgIcon } from '@/components/Icons'
import Pokeball from '@/assets/pokeball.svg'
import { getColorByType, hexToRgbA } from '@/utils/ColorUtils'
import { ResultPokemon } from '@/interfaces/ResultPokemonApiInterface'
import { getIconByName } from '@/utils/IconUtils'
import { formatNumber } from '@/utils/TextUtils'

type Props = ResultPokemon

const CardPokemonComponent: FC<Props> = ({
  name,
  images,
  types,
  id,
  color
}): ReactElement => {
  return (
    <Flex
      w="384px"
      h="437px"
      bgColor={useColorModeValue('#FFFFFF', '#2B3240')}
      boxShadow="0px 16px 40px rgba(112, 144, 176, 0.2)"
      borderRadius="4px"
      bgImage={Pokeball}
      bgSize="contain"
      flexDir="column"
      position="relative"
      overflow="hidden"
    >
      <PokeballBgIcon
        fill={hexToRgbA(color, '0.20')}
        fontSize="368"
        top="-95px"
        left="-65px"
        position="absolute"
      />
      <Box
        display="flex"
        flexDir="row"
        justifyContent="space-between"
        pr="24px"
        pl="24px"
      >
        <Box mt="41px" h="50px" zIndex="99">
          {types?.map(({ type }) =>
            getIconByName({
              name: type.name as string,
              fill: getColorByType(type.name as string),
              mr: '16px',
              fontSize: '40px'
            })
          )}
        </Box>

        <Flex w="1.5rem" h="8rem" flexDirection="column" alignItems="center">
          <Box
            mt="19px"
            as="div"
            width="2.5rem"
            height="2px"
            bgColor={`${types[0].type.name}.500`}
            position="relative"
            transform="rotate(90deg)"
          />
          <br />
          <Text
            wordBreak="unset"
            textAlign="center"
            w="1rem"
            alignSelf="center"
            color={`${types[0].type.name}.500`}
          >
            {formatNumber(id)}
          </Text>
        </Flex>
      </Box>
      <VStack>
        <Image src={images?.url} width="248px" height="248px" zIndex="99" />
        <Heading
          fontSize="24px"
          color={`${types[0].type.name}.500`}
          fontWeight="medium"
        >
          {name}
        </Heading>
      </VStack>
    </Flex>
  )
}

export default CardPokemonComponent
