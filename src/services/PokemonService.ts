import BasicService from './HttpServices'
import { ResultPokemon } from '@/interfaces/ResultPokemonApiInterface'

class PokemonService extends BasicService {
  constructor() {
    super(process.env.VITE_POKEMON_DOMAIN as string)
  }

  public async getPokemons(): Promise<ResultPokemon[]> {
    console.log('chegando')
    return (await this.connection.get<ResultPokemon[]>('/pokemons')).data
  }
}

export default PokemonService
