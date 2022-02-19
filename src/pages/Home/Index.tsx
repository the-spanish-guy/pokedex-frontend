import { Center, Text } from '@chakra-ui/react'
import LayoutComponent from '@/components/Layout'
import { ToggleThemeButton } from '@/components/ToggleTheme/Index'

export function Home() {
  return (
    <LayoutComponent title="Home">
      <Center>
        <Text fontFamily="Kabond" fontSize="228px">
          Pokedex
        </Text>
      </Center>
      {/* <ToggleThemeButton /> */}
    </LayoutComponent>
  )
}
