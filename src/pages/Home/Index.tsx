import {
  Box,
  Button,
  Center,
  Image,
  Text,
  useColorModeValue
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'

import useStore from '@/stores/useStore'
import CatService from '@/services/CatService'
import DogService from '@/services/DogService'
import Counter from '@/components/Counter/Index'
import LayoutComponent from '@/components/Layout'
import { ToggleThemeButton } from '@/components/ToggleTheme/Index'

export function Home() {
  const [image, setImage] = useState('')

  const counter = useStore(state => state.setCounter)
  const setFavicon = useStore(state => state.setFavicon)
  const handleClick = () => {
    counter(1)
  }

  const handleCatApi = async () => {
    return await new CatService().getCat().then(data => {
      setImage(data[0].url)
      setFavicon('cat')
    })
  }

  const handleDogApi = async () => {
    return await new DogService().getDog().then(({ message }) => {
      setImage(message)
      setFavicon('dog')
    })
  }

  useEffect(() => {
    handleDogApi()
  }, [])

  return (
    <LayoutComponent title="Home">
      <Center
        h="100vh"
        justifyContent={'center'}
        alignItems={'center'}
        flexDir={'column'}
      >
        <Text
          fontSize="3xl"
          fontWeight="bold"
          mb={'40px'}
          color={useColorModeValue('#5e69ee', '#F4F4FB')}
          decoration="underline"
        >
          Vite + React + TailwindCSS + Zustand!
        </Text>
        <Image src={image} h="auto" w="350px" />
        <Box as="div">
          <Button
            onClick={handleCatApi}
            bgColor={useColorModeValue('#5e69ee', '#F4F4FB')}
            color={useColorModeValue('#F4F4FB', '#5e69ee')}
            w="80px"
            m="8px"
            p="12px"
          >
            Cat
          </Button>
          <Button
            onClick={handleDogApi}
            bgColor={useColorModeValue('#5e69ee', '#F4F4FB')}
            color={useColorModeValue('#F4F4FB', '#5e69ee')}
            w="80px"
            m="8px"
            p="12px"
          >
            Dog
          </Button>
        </Box>
        <Box as="div">
          <Button
            bgColor={'#39AFEA'}
            color={'#F4F4FB'}
            w="176px"
            h="48px"
            m="8px"
            p="12px"
            onClick={handleClick}
          >
            Contador
          </Button>
          <Counter />
        </Box>
      </Center>
      <ToggleThemeButton />
    </LayoutComponent>
  )
}
