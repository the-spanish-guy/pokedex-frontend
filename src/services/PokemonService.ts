import BasicService from './HttpServices'
import { ResultPokemon } from '@/interfaces/ResultPokemonApiInterface'

class PokemonService extends BasicService {
  constructor() {
    super(process.env.VITE_POKEMON_DOMAIN as string)
  }

  public async getPokemons(offset = 0): Promise<ResultPokemon[]> {
    return (
      await this.connection.get<ResultPokemon[]>(`/pokemons?offset=${offset}`)
    ).data
  }
}

export default PokemonService
