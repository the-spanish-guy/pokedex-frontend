import {
  Box,
  chakra,
  Heading,
  Input,
  InputGroup,
  InputLeftElement
} from '@chakra-ui/react'
import { ReactElement } from 'react'
import { IconSearch } from '@tabler/icons'

const SearchIconTest = chakra(IconSearch)

const HeaderComponent = (): ReactElement => {
  return (
    <Box
      display="flex"
      bgColor="whiteAlpha.600"
      pt="35px"
      pb="35px"
      width="100%"
      flexDir="row"
      justifyContent="space-around"
      alignItems="flex-end"
    >
      <Heading color="blackAlpha.300">
        Find your
        <br />
        pokémon
      </Heading>

      <InputGroup
        width="357px"
        height="56px"
        bgColor="whiteAlpha.500"
        borderRadius="8px"
      >
        <InputLeftElement
          pointerEvents="none"
          children={<SearchIconTest size="18px" color="blackAlpha.300" />}
          mt="3px"
          __css={{
            padding: '16px'
          }}
        />
        <Input
          type="text"
          placeholder="search for a pokémon name or number"
          ml="10px"
          mt="3px"
          _placeholder={{
            color: 'blackAlpha.300',
            fontSize: '16px'
          }}
        />
      </InputGroup>
    </Box>
  )
}

export default HeaderComponent
