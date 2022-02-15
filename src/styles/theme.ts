import { extendTheme, theme, ThemeConfig } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const primary = '#8C7CFC'
const secondary = '#54C4E4'
const terciary = '#85AFF9'

const success = '#A3DE9A'
const warning = '#FFE27C'
const error = '#F98585'

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false
}

const customtheme = extendTheme({
  config,
  colors: {
    ...theme.colors,
    primary: {
      200: primary,
      500: primary
    },
    secondary: { 200: secondary, 500: secondary },
    terciary: { 200: terciary, 500: terciary },
    accent: secondary,
    error: error,
    warning: warning,
    success: success
  },
  styles: {
    global: (props: any) => ({
      body: {
        bg: mode('#F4F4FB', '#5e69ee')(props)
      }
    })
  }
})

export default customtheme
