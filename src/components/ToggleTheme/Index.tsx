import useStore from '@/stores/useStore'
import {
  Flex,
  ScaleFade,
  useColorMode,
  useColorModeValue
} from '@chakra-ui/react'
import { DarkIcon, ElectricIcon } from '../Icons'

const Toggle = ({ fadeIn }: { fadeIn: boolean }) => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <ScaleFade initialScale={0.4} in={fadeIn}>
      <Flex
        as="div"
        w="80px"
        h="80px"
        left="12px"
        bottom="12px"
        boxShadow="lg"
        position="fixed"
        rounded="9999px"
        cursor="pointer"
        alignItems="center"
        justifyContent="center"
        onClick={toggleColorMode}
        bgColor={useColorModeValue('#262B35', '#2C3444')}
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
    </ScaleFade>
  )
}

export const ToggleThemeButton = () => {
  const { inViewPort } = useStore()

  return inViewPort ? <></> : <Toggle fadeIn={!inViewPort} />
}
