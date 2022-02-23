import {
  Box,
  Flex,
  Link,
  Text,
  chakra,
  Divider,
  useColorModeValue
} from '@chakra-ui/react'
import { ReactElement } from 'react'
import { IconHeart } from '@tabler/icons'
import { motion } from 'framer-motion'

const CustomIconHeart = chakra(IconHeart)

const FooterComponent = (): ReactElement => {
  return (
    <Flex
      w="100%"
      h="411px"
      maxH="411px"
      bgColor={useColorModeValue('whiteAlpha.600', '#2B3240')}
      color="blackAlpha.500"
      flexDirection="column"
      p="70px"
    >
      <Flex>
        <Box>
          <Text
            fontFamily="Montserrat"
            fontSize="24px"
            fontWeight={400}
            color={useColorModeValue('blackAlpha.500', 'whiteAlpha.500')}
          >
            Designed by Bruna Campos
          </Text>
          <Text
            fontFamily="Montserrat"
            fontSize="24px"
            fontWeight={400}
            color={useColorModeValue('blackAlpha.500', 'whiteAlpha.500')}
          >
            Coded by Luis Enrique Meza
          </Text>
        </Box>

        <Divider
          orientation="vertical"
          bgColor={useColorModeValue('blackAlpha.300', 'whiteAlpha.500')}
          mr="65px"
          ml="65px"
        />

        <Box>
          <Link
            fontFamily="Montserrat"
            fontSize="24px"
            fontWeight={400}
            textDecoration="underline"
            href="https://www.behance.net/brucampos"
            isExternal
            color={useColorModeValue('blackAlpha.500', 'whiteAlpha.500')}
          >
            Behance
          </Link>
          <br />
          <Link
            fontFamily="Montserrat"
            fontSize="24px"
            fontWeight={400}
            textDecoration="underline"
            href="https://github.com/the-spanish-guy/"
            isExternal
            color={useColorModeValue('blackAlpha.500', 'whiteAlpha.500')}
          >
            Github
          </Link>
        </Box>
      </Flex>

      <Divider
        bgColor={useColorModeValue('blackAlpha.300', 'whiteAlpha.500')}
        mt="88px"
        mb="49px"
      />

      <Flex flexDirection="row" justifyContent="space-between">
        <Flex alignItems="center">
          <Text
            fontFamily="Montserrat"
            fontSize="24px"
            fontWeight={400}
            mr="10px"
            color={useColorModeValue('blackAlpha.500', 'whiteAlpha.500')}
          >
            /Made with
          </Text>
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              transition: {
                duration: 1.5,
                repeat: 'Infinity',
                repeatType: 'loop'
              }
            }}
            variants={{
              rest: { scale: 1 },
              hover: { scale: 1.2 },
              pressed: { scale: 0.95 }
            }}
            initial="rest"
            whileHover="hover"
            whileTap="pressed"
          >
            <CustomIconHeart fill="red.500" stroke="red.500" />
          </motion.div>
        </Flex>
        <Text
          fontFamily="Montserrat"
          fontSize="24px"
          color={useColorModeValue('blackAlpha.500', 'whiteAlpha.500')}
        >
          Copyright 2022©
        </Text>
      </Flex>
    </Flex>
  )
}

export default FooterComponent
