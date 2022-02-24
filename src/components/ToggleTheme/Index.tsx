import { motion } from 'framer-motion'
import useStore from '@/stores/useStore'
import { useColorMode, useColorModeValue } from '@chakra-ui/react'

import { DarkIcon, ElectricIcon } from '../Icons'

const Toggle = ({ fadeIn }: { fadeIn: boolean }) => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <motion.div
      style={{
        left: '12px',
        width: '80px',
        bottom: '12px',
        height: '80px',
        boxShadow: 'lg',
        display: 'flex',
        position: 'fixed',
        cursor: 'pointer',
        alignItems: 'center',
        borderRadius: '9999px',
        justifyContent: 'center',
        backgroundColor: useColorModeValue('#262B35', '#2C3444')
      }}
      onClick={toggleColorMode}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileInView={{ scale: 1 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      {colorMode === 'dark' ? (
        <ElectricIcon fontSize={32} fill="#F2D94E" />
      ) : (
        <DarkIcon
          fontSize={32}
          fill={useColorModeValue('#FFFFFF', '#262B35')}
        />
      )}
    </motion.div>
  )
}

export const ToggleThemeButton = () => {
  const { inViewPort } = useStore()

  return inViewPort ? <></> : <Toggle fadeIn={!inViewPort} />
}
