import { extendTheme, theme, ThemeConfig } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'
import { allPokemonColors } from '@/utils/ColorUitls'

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false
}

const customtheme = extendTheme({
  config,
  colors: {
    ...theme.colors,
    primary: {
      50: '#F2C0C0',
      500: '#CE2D2C',
      600: '#A82524',
      900: '#730B24'
    },
    blackAlpha: {
      ...theme.colors.blackAlpha,
      50: '#A3A3A3',
      300: '#666666',
      400: '#292929',
      500: '#000000'
    },
    white: {
      ...theme.colors.whiteAlpha,
      500: '#FFFFFF',
      600: '#F5F5F5',
      700: '#E0E0E0',
      800: '#CCCCCC'
    },
    blue: {
      ...theme.colors.blue,
      50: '#CBFAFE',
      500: '#00A3F4',
      700: '#007ED1',
      900: '#003075'
    },
    orange: {
      ...theme.colors.orange,
      50: '#FEF2CD',
      500: '#EF900B',
      700: '#975B07',
      900: '#8A4103'
    },
    pink: {
      ...theme.colors.pink,
      50: '#FEDFD8',
      500: '#F93E63',
      700: '#D62D5E',
      900: '#770B4A'
    },
    green: {
      ...theme.colors.green,
      50: '#EAFCD5',
      500: '#57C92E',
      700: '#3CAC21',
      900: '#08600A'
    },
    bug: {
      300: allPokemonColors['light-bug'],
      500: allPokemonColors['dark-bug']
    },
    dark: {
      300: allPokemonColors['light-dark'],
      500: allPokemonColors['dark-dark']
    },
    dragon: {
      300: allPokemonColors['light-dragon'],
      500: allPokemonColors['dark-dragon']
    },
    electric: {
      300: allPokemonColors['light-electric'],
      500: allPokemonColors['dark-electric']
    },
    fairy: {
      300: allPokemonColors['light-fairy'],
      500: allPokemonColors['dark-fairy']
    },
    fighting: {
      300: allPokemonColors['light-fighting'],
      500: allPokemonColors['dark-fighting']
    },
    fire: {
      300: allPokemonColors['light-fire'],
      500: allPokemonColors['dark-fire']
    },
    flying: {
      300: allPokemonColors['light-flying'],
      500: allPokemonColors['dark-flying']
    },
    ghost: {
      300: allPokemonColors['light-ghost'],
      500: allPokemonColors['dark-ghost']
    },
    grass: {
      300: allPokemonColors['light-grass'],
      500: allPokemonColors['dark-grass']
    },
    ground: {
      300: allPokemonColors['light-ground'],
      500: allPokemonColors['dark-ground']
    },
    ice: {
      300: allPokemonColors['light-ice'],
      500: allPokemonColors['dark-ice']
    },
    normal: {
      300: allPokemonColors['light-normal'],
      500: allPokemonColors['dark-normal']
    },
    poison: {
      300: allPokemonColors['light-poison'],
      500: allPokemonColors['dark-poison']
    },
    psychic: {
      300: allPokemonColors['light-psychic'],
      500: allPokemonColors['dark-psychic']
    },
    rock: {
      300: allPokemonColors['light-rock'],
      500: allPokemonColors['dark-rock']
    },
    steel: {
      300: allPokemonColors['light-steel'],
      500: allPokemonColors['dark-steel']
    },
    water: {
      300: allPokemonColors['light-water'],
      500: allPokemonColors['dark-water']
    }
  },
  fonts: {
    ...theme.fonts,
    body: 'Roboto, sans-serif',
    heading: 'Montserrat, sans-serif'
  },
  fontWeights: {
    ...theme.fontWeights,
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700
  },
  fontSizes: {
    ...theme.fontSizes,
    xs: '16px',
    sm: '20px',
    md: '24px',
    lg: '32px',
    xl: '40px'
  },
  lineHeights: {
    ...theme.lineHeights,
    sm: '1.24em',
    lg: '1.5em'
  },
  styles: {
    global: (props: any) => ({
      body: {
        bg: mode('#FFFFFF', '#262B35')(props)
      }
    })
  }
})

export default customtheme
