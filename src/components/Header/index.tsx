import {
  Box,
  Input,
  chakra,
  Heading,
  InputGroup,
  InputLeftElement,
  useColorModeValue
} from '@chakra-ui/react'
import { ChangeEvent, FormEvent, ReactElement } from 'react'
import { IconSearch } from '@tabler/icons'

const SearchIcon = chakra(IconSearch)

type Props = {
  onSubmit: (e: FormEvent<HTMLInputElement>) => void
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const HeaderComponent = ({ onSubmit, onChange }: Props): ReactElement => {
  return (
    <Box
      display="flex"
      bgColor={useColorModeValue('whiteAlpha.600', '#2B3240')}
      pt="35px"
      pb="35px"
      width="100%"
      flexDir="row"
      justifyContent="space-around"
      alignItems="flex-end"
    >
      <Heading color={useColorModeValue('blackAlpha.300', 'whiteAlpha.500')}>
        Find your
        <br />
        pokémon
      </Heading>
      <InputGroup
        as={'form'}
        size="lg"
        width={'auto'}
        variant={'filled'}
        bgColor={useColorModeValue('whiteAlpha.500', '#3C4555')}
        onSubmit={onSubmit}
      >
        <InputLeftElement
          pointerEvents="none"
          children={
            <SearchIcon
              size="18px"
              color={useColorModeValue('blackAlpha.300', 'whiteAlpha.500')}
            />
          }
        />
        <Input
          type="text"
          htmlSize={32}
          width={'auto'}
          fontSize={'16px'}
          placeholder="search for a pokémon name or number"
          _placeholder={{
            fontSize: '16px',
            color: useColorModeValue('blackAlpha.300', 'whiteAlpha.500')
          }}
          onChange={onChange}
        />
      </InputGroup>
    </Box>
  )
}

export default HeaderComponent
