import BasicService from './HttpServices'
import { ResultPokemon } from '@/interfaces/ResultPokemonApiInterface'
import { IPokemon } from '@/interfaces/PokemonInterface'

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

  public async getPokemon(id: number): Promise<IPokemon> {
    return (await this.connection.get<IPokemon>(`/pokemons/${id}`)).data
  }

  public async getPokemonsByType(type: string): Promise<ResultPokemon[]>{
    return (await this.connection.get<ResultPokemon[]>(`/pokemons/type/${type}`)).data
  }
}

export default PokemonService
