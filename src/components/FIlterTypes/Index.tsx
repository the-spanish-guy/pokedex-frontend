import { motion } from 'framer-motion'
import { ReactElement, useRef } from 'react'
import { Flex, Text } from '@chakra-ui/react'

import { getIconByName } from '@/utils/IconUtils'
import { pokemonTypes } from '@/utils/PokemonUtils'
import { getColorByType } from '@/utils/ColorUtils'

interface FilterTypeProps {
  onClick: (type: string) => void
}

const FilterTypesComponent = ({ onClick }: FilterTypeProps): ReactElement => {
  const ref = useRef(null)
  return (
    <Flex mt="80px" mb="162px" alignContent={'center'} justifyContent="center">
      {Object.keys(pokemonTypes).map((type, index) => {
        return (
          <motion.div
            key={index}
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center'
            }}
            initial={{ width: '40px' }}
            whileHover={{
              width: 'auto',
              visibility: 'visible',
              color: getColorByType(type as string)
            }}
            ref={ref}
            onClick={() => onClick(type)}
          >
            {getIconByName({
              name: type,
              fill: 'whiteAlpha.800',
              fontSize: '32px',
              __css: {
                '&:hover': {
                  cursor: 'pointer',
                  mr: '6px',
                  fill: getColorByType(type as string)
                },
                '&:hover + .pokeType': {
                  visibility: 'visible'
                }
              }
            })}

            <Text
              className="pokeType"
              ref={ref}
              visibility={'hidden'}
              marginRight="10px"
            >
              {type}
            </Text>
          </motion.div>
        )
      })}
    </Flex>
  )
}

export default FilterTypesComponent
