import { BsSunFill } from 'react-icons/bs'
import { GiMoonBats } from 'react-icons/gi'
import { Box, Flex, useColorMode, useColorModeValue } from '@chakra-ui/react'

export const ToggleThemeButton = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Box
      as="div"
      position="absolute"
      w="64px"
      h="64px"
      right="12px"
      bottom="12px"
      bgColor={useColorModeValue('#5e69ee', '#F4F4FB')}
      rounded="9999px"
      onClick={toggleColorMode}
      boxShadow="lg"
      cursor="pointer"
    >
      <Flex
        as="div"
        alignItems="center"
        justifyContent="center"
        w="64px"
        h="64px"
      >
        {colorMode === 'dark' ? (
          <BsSunFill
            size={30}
            color={useColorModeValue('#F4F4FB', '#5e69ee')}
          />
        ) : (
          <GiMoonBats
            size={30}
            color={useColorModeValue('#F4F4FB', '#5e69ee')}
          />
        )}
      </Flex>
    </Box>
  )
}
