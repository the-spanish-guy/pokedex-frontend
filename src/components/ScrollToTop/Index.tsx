import useStore from '@/stores/useStore'
import { Flex, chakra, ScaleFade, useColorModeValue } from '@chakra-ui/react'
import { IconArrowNarrowUp } from '@tabler/icons'

const ChakraIconSrrowNarrowUp = chakra(IconArrowNarrowUp)

const Scroll = ({ fadeIn }: { fadeIn: boolean }) => {
  const scrollToTop = () => {
    console.log(window.outerHeight)
    window.scroll({ top: 0, left: 0, behavior: 'smooth' })
  }
  return (
    <ScaleFade initialScale={0.4} in={fadeIn}>
      <Flex
        as="div"
        w="80px"
        h="80px"
        right="12px"
        bottom="12px"
        boxShadow="lg"
        position="fixed"
        rounded="9999px"
        cursor="pointer"
        alignItems="center"
        onClick={scrollToTop}
        justifyContent="center"
        bgColor={useColorModeValue('#262B35', '#2C3444')}
      >
        <ChakraIconSrrowNarrowUp fontSize="21px" />
      </Flex>
    </ScaleFade>
  )
}

export const ScrollToTop = () => {
  const { inViewPort } = useStore()

  return inViewPort ? <></> : <Scroll fadeIn={!inViewPort} />
}
