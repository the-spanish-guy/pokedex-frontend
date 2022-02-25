import { motion } from 'framer-motion'
import useStore from '@/stores/useStore'
import { chakra } from '@chakra-ui/react'
import { IconArrowNarrowUp } from '@tabler/icons'

const ChakraIconSrrowNarrowUp = chakra(IconArrowNarrowUp)

const Scroll = ({ fadeIn, color }: { fadeIn: boolean; color: string }) => {
  const scrollToTop = () => {
    window.scroll({ top: 0, left: 0, behavior: 'smooth' })
  }
  return (
    <motion.div
      style={{
        width: '80px',
        right: '12px',
        bottom: '12px',
        height: '80px',
        display: 'flex',
        boxShadow: 'lg',
        position: 'fixed',
        cursor: 'pointer',
        alignItems: 'center',
        backgroundColor: color,
        borderRadius: '9999px',
        justifyContent: 'center'
      }}
      onClick={scrollToTop}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileInView={{ scale: 1 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <ChakraIconSrrowNarrowUp
        size="60px"
        strokeWidth="1.5px"
        color="whiteAlpha.500"
      />
    </motion.div>
  )
}

export const ScrollToTop = ({ color }: { color: string }) => {
  const { inViewPort } = useStore()

  return inViewPort ? <></> : <Scroll fadeIn={!inViewPort} color={color} />
}
