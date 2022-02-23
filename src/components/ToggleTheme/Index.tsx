import { Flex, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { DarkIcon, ElectricIcon } from '../Icons'

export const ToggleThemeButton = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Flex
      as="div"
      position="fixed"
      w="80px"
      h="80px"
      left="12px"
      bottom="12px"
      bgColor={useColorModeValue('#262B35', '#2C3444')}
      rounded="9999px"
      onClick={toggleColorMode}
      boxShadow="lg"
      cursor="pointer"
      alignItems="center"
      justifyContent="center"
    >
      {colorMode === 'dark' ? (
        <ElectricIcon fontSize={32} fill="#F2D94E" />
      ) : (
        <DarkIcon
          fontSize={32}
          fill={useColorModeValue('#FFFFFF', '#262B35')}
        />
      )}
    </Flex>
  )
}
