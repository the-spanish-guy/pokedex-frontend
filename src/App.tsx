import { AppRoutes } from './Routes'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import customtheme from './styles/theme'

function App() {
  return (
    <ChakraProvider resetCSS theme={customtheme}>
      <ColorModeScript initialColorMode={customtheme.config.initialColorMode} />
      <AppRoutes />
    </ChakraProvider>
  )
}

export default App
