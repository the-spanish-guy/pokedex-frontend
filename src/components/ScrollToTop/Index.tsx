import useStore from '@/stores/useStore'
import { Flex, chakra, ScaleFade } from '@chakra-ui/react'
import { IconArrowNarrowUp } from '@tabler/icons'

const ChakraIconSrrowNarrowUp = chakra(IconArrowNarrowUp)

const Scroll = ({ fadeIn, color }: { fadeIn: boolean; color: string }) => {
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
        bgColor={color}
        position="fixed"
        rounded="9999px"
        cursor="pointer"
        alignItems="center"
        onClick={scrollToTop}
        justifyContent="center"
      >
        <ChakraIconSrrowNarrowUp
          size="60px"
          strokeWidth="1.5px"
          color="whiteAlpha.500"
        />
      </Flex>
    </ScaleFade>
  )
}

export const ScrollToTop = ({ color }: { color: string }) => {
  const { inViewPort } = useStore()

  return inViewPort ? <></> : <Scroll fadeIn={!inViewPort} color={color} />
}
