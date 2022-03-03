import { IAbilities, IResult, ITypes } from './PokemonApiInterface'
import { IImages } from './ResultPokemonApiInterface'

interface IEvYield {
  ['base_stat']: number
  effort: number
  stat: IResult
}
interface ITraining {
  ['catch_rate']: string
  ['base_friendship']: number
  ['growth_rate']: string
  ['base_exp']: number
  ['ev_yield']: IEvYield[]
}

interface IGenderRate {
  name: string
  rate: number
}

interface IBreeding {
  ['egg_groups']: IResult[]
  ['gender_rate']: IGenderRate[]
}

export interface IType {
  type: string
  value: number
}

export interface IEvolves {
  name: string
  ['min_level']: number
  url: string
}

interface IOtherForms {
  ['is_default']: boolean
  pokemon: IResult
}

export interface IPokemonStats {
  name: string
  stat: number
  min: number
  max: number
}

export interface IPokemon {
  id: number
  name: string
  weight: string
  height: string
  abilities: IAbilities[]
  category: string
  gender: Array<string>
  weakness: Array<string>
  images: IImages
  color: string
  types: ITypes[]

  training: ITraining
  breeding: IBreeding
  ['base_stats']: IPokemonStats[]
  ['effective_type']: IType[]
  evolves: IEvolves[]
  ['other_forms']: IOtherForms[]
}
