import { extendTheme, theme, ThemeConfig } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

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
      300: '#C5DC90',
      500: '#92BD2D'
    },
    dark: {
      300: '#A7A6AB',
      500: '#595761'
    },
    dragon: {
      300: '#7FB0E2',
      500: '#0C6AC8'
    },
    electric: {
      300: '#F8EBA1',
      500: '#F2D94E'
    },
    fairy: {
      300: '#F6C4F1',
      500: '#EF90E6'
    },
    fighting: {
      300: '#E79BAA',
      500: '#D3425F'
    },
    fire: {
      300: '#FCD0A0',
      500: '#FBA64C'
    },
    flying: {
      300: '#CDDBF5',
      500: '#A1BBEC'
    },
    ghost: {
      300: '#AAB2DB',
      500: '#5F6DBC'
    },
    grass: {
      300: '#ABDCA7',
      500: '#60BD58'
    },
    ground: {
      300: '#EBBAA1',
      500: '#DA7C4D'
    },
    ice: {
      300: '#B6E6DE',
      500: '#76D1C1'
    },
    normal: {
      300: '#CDCECC',
      500: '#A0A29F'
    },
    poison: {
      300: '#D9ACE5',
      500: '#B763CF'
    },
    psychic: {
      300: '#FCBEBD',
      500: '#FA8582'
    },
    rock: {
      300: '#E2DBC1',
      500: '#C9BC8A'
    },
    steel: {
      300: '#A6C7CE',
      500: '#5795A3'
    },
    water: {
      300: '#A4CBEE',
      500: '#539DDF'
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
  fontSize: {
    ...theme.fontSizes,
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
