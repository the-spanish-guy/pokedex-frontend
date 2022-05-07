export interface IResult {
  name: string
  url: string
}

interface IGameIndices {
  ['game_index']: number
  version: IResult
}

export interface IAbilities {
  ability: IResult
  ['is_hidden']: boolean
  slot: number
}

interface IVersionGroupDetails {
  ['version_group']: IResult
  ['level_learned_at']: number
  ['move_learn_method']: IResult
}

interface IMove {
  move: IResult
  ['version_group_details']: IVersionGroupDetails[]
}

interface ITypeSprite {
  ['back_default']: string | null
  ['back_female']: string | null
  ['back_shiny']: string | null
  ['back_shiny_female']: string | null
  ['front_default']: string | null
  ['front_female']: string | null
  ['front_shiny']: string | null
  ['front_shiny_female']: string | null
}

interface IOtherTypeSprite {
  ['back_default']: string
  ['back_female']: string
  ['back_shiny']: string
  ['back_shiny_female']: string
  ['front_default']: string
  ['front_female']: string
  ['front_shiny']: string
  ['front_shiny_female']: string
  ['back_gray']: string
  ['back_transparent']: string
  ['front_gray']: string
  ['front_transparent']: string
  ['back_shiny_transparent']: string
  ['front_shiny_transparent']: string
}
interface IGenerationI {
  'red-blue'?: Omit<
    IOtherTypeSprite,
    | 'back_female'
    | 'back_shiny'
    | 'back_shiny_female'
    | 'front_female'
    | 'front_shiny'
    | 'front_shiny_female'
    | 'back_shiny_transparent'
    | 'front_shiny_transparent'
  >
  yellow?: Omit<
    IOtherTypeSprite,
    | 'back_female'
    | 'back_shiny'
    | 'back_shiny_female'
    | 'front_female'
    | 'front_shiny'
    | 'front_shiny_female'
    | 'back_shiny_transparent'
    | 'front_shiny_transparent'
  >
}

interface IGenerationIi {
  crystal: Omit<
    IOtherTypeSprite,
    | 'back_female'
    | 'back_shiny_female'
    | 'front_female'
    | 'back_gray'
    | 'front_gray'
  >
  gold: Omit<
    IOtherTypeSprite,
    | 'back_female'
    | 'back_shiny_female'
    | 'front_female'
    | 'front_shiny_female'
    | 'back_gray'
    | 'back_transparent'
    | 'front_gray'
    | 'back_shiny_transparent'
    | 'front_shiny_transparent'
  >
  silver: Omit<
    IOtherTypeSprite,
    | 'back_female'
    | 'back_shiny_female'
    | 'front_female'
    | 'front_shiny_female'
    | 'back_gray'
    | 'back_transparent'
    | 'front_gray'
    | 'back_shiny_transparent'
    | 'front_shiny_transparent'
  >
}

interface IGenerationIii {
  emerald: Omit<
    ITypeSprite,
    | 'back_default'
    | 'back_female'
    | 'back_shiny'
    | 'back_shiny_female'
    | 'front_female'
    | 'front_shiny_female'
  >
  ['firered-leafgreen']: Omit<
    IOtherTypeSprite,
    | 'back_female'
    | 'back_shiny_female'
    | 'front_female'
    | 'front_shiny_female'
    | 'back_gray'
    | 'back_transparent'
    | 'front_gray'
    | 'back_shiny_transparent'
    | 'front_shiny_transparent'
  >
  ['ruby-sapphire']: Omit<
    IOtherTypeSprite,
    | 'back_female'
    | 'back_shiny_female'
    | 'front_female'
    | 'front_shiny_female'
    | 'back_gray'
    | 'back_transparent'
    | 'front_gray'
    | 'back_shiny_transparent'
    | 'front_shiny_transparent'
  >
}

interface IGenerationIv {
  ['diamond-pearl']: Omit<
    IOtherTypeSprite,
    | 'back_gray'
    | 'back_transparent'
    | 'front_gray'
    | 'front_transparent'
    | 'back_shiny_transparent'
    | 'front_shiny_transparent'
  >
  ['heartgold-soulsilver']: Omit<
    IOtherTypeSprite,
    | 'back_gray'
    | 'back_transparent'
    | 'front_gray'
    | 'front_transparent'
    | 'back_shiny_transparent'
    | 'front_shiny_transparent'
  >
  ['platinum']: Omit<
    IOtherTypeSprite,
    | 'back_gray'
    | 'back_transparent'
    | 'front_gray'
    | 'front_transparent'
    | 'back_shiny_transparent'
    | 'front_shiny_transparent'
  >
}

interface IGenerationV {
  ['black-white']: Omit<
    IOtherTypeSprite,
    | 'back_gray'
    | 'back_transparent'
    | 'front_gray'
    | 'front_transparent'
    | 'back_shiny_transparent'
    | 'front_shiny_transparent'
  > & {
    animated: Omit<
      IOtherTypeSprite,
      | 'back_gray'
      | 'back_transparent'
      | 'front_gray'
      | 'front_transparent'
      | 'back_shiny_transparent'
      | 'front_shiny_transparent'
    >
  }
}

interface IGenerationVi {
  ['omegaruby-alphasapphire']: Omit<
    ITypeSprite,
    'back_default' | 'back_female' | 'back_shiny' | 'back_shiny_female'
  >
  ['x-y']: Omit<
    ITypeSprite,
    'back_default' | 'back_female' | 'back_shiny' | 'back_shiny_female'
  >
}

interface IGenerationVii {
  icons: Omit<
    ITypeSprite,
    | 'back_default'
    | 'back_female'
    | 'back_shiny'
    | 'back_shiny_female'
    | 'front_female'
    | 'front_shiny_female'
  >
  ['ultra-sun-ultra-moon']: Omit<
    ITypeSprite,
    'back_default' | 'back_female' | 'back_shiny' | 'back_shiny_female'
  >
}

interface IGenerationViii {
  icons: Omit<
    ITypeSprite,
    | 'back_default'
    | 'back_female'
    | 'back_shiny'
    | 'back_shiny_female'
    | 'front_female'
    | 'front_shiny_female'
  >
}

export interface IVersions {
  ['generation-i']: IGenerationI
  ['generation-ii']: IGenerationIi
  ['generation-iii']: IGenerationIii
  ['generation-iv']: IGenerationIv
  ['generation-v']: IGenerationV
  ['generation-vi']: IGenerationVi
  ['generation-vii']: IGenerationVii
  ['generation-viii']: IGenerationViii
}

export interface ISprite extends Partial<ITypeSprite> {
  other: {
    ['dream_world']: Omit<
      ITypeSprite,
      | 'back_default'
      | 'back_female'
      | 'back_shiny'
      | 'back_shiny_female'
      | 'front_female'
      | 'front_shiny_female'
    >
    home: Omit<
      ITypeSprite,
      'back_default' | 'back_female' | 'back_shiny' | 'back_shiny_female'
    >
    ['official-artwork']: Omit<
      ITypeSprite,
      | 'back_default'
      | 'back_female'
      | 'back_shiny'
      | 'back_shiny_female'
      | 'front_female'
      | 'front_shiny'
      | 'front_shiny_female'
    >
  }
  versions: IVersions
}

export interface IStats {
  ['base_stat']: number
  effort: number
  stat: IResult
}

export interface ITypes {
  slot: number
  type: IResult
}

interface IVersionDetails {
  rarity: number
  version: IResult
}

interface IHeldItems {
  item: IResult
  ['version_details']: IVersionDetails
}

interface IPastTypes {
  generation: IResult
  types: {
    slot: number
    type: IResult
  }[]
}

export interface IPokemonApi {
  id: number
  name: string
  order: number
  height: number
  weight: number
  moves: IMove[]
  stats: IStats[]
  types: ITypes[]
  species: IResult
  sprites: ISprite
  forms: IResult[]
  abilities: IAbilities[]
  ['is_default']: boolean
  ['base_experience']: number
  ['past_types']: IPastTypes[]
  ['held_items']: IHeldItems[]
  ['game_indices']: IGameIndices[]
  ['location_area_encounters']: string
}
