import BasicService from './HttpServices'
import { ResultPokemon } from '@/interfaces/ResultPokemonApiInterface'

type PokemonsProps = {
  offset?: number
  id?: number | string
}

class PokemonService extends BasicService {
  constructor() {
    super(process.env.VITE_POKEMON_DOMAIN as string)
  }

  public async getPokemons({
    offset = 0,
    id
  }: PokemonsProps): Promise<ResultPokemon[]> {
    return (
      await this.connection.get<ResultPokemon[]>(
        `/pokemons?offset=${offset}&id=${id || ''}`
      )
    ).data
  }
}

export default PokemonService
