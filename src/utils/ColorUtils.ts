export const pokemonLightColors: Record<string, string> = {
  bug: '#C5DC90',
  dark: '#A7A6AB',
  dragon: '#7FB0E2',
  electric: '#F8EBA1',
  fairy: '#F6C4F1',
  fighting: '#E79BAA',
  fire: '#FCD0A0',
  flying: '#CDDBF5',
  ghost: '#AAB2DB',
  grass: '#ABDCA7',
  ground: '#EBBAA1',
  ice: '#B6E6DE',
  normal: '#CDCECC',
  poison: '#D9ACE5',
  psychic: '#FCBEBD',
  rock: '#E2DBC1',
  steel: '#A6C7CE',
  water: '#A4CBEE'
}

export const pokemonColors: Record<string, string> = {
  bug: '#92BD2D',
  dark: '#595761',
  dragon: '#0C6AC8',
  electric: '#F2D94E',
  fairy: '#EF90E6',
  fighting: '#D3425F',
  fire: '#FBA64C',
  flying: '#A1BBEC',
  ghost: '#5F6DBC',
  grass: '#60BD58',
  ground: '#DA7C4D',
  ice: '#76D1C1',
  normal: '#A0A29F',
  poison: '#B763CF',
  psychic: '#FA8582',
  rock: '#C9BC8A',
  steel: '#5795A3',
  water: '#539DDF'
}

export const allPokemonColors: Record<string, string> = {
  'light-bug': pokemonLightColors.bug,
  'light-ice': pokemonLightColors.ice,
  'light-dark': pokemonLightColors.dark,
  'light-fire': pokemonLightColors.fire,
  'light-rock': pokemonLightColors.rock,
  'light-fairy': pokemonLightColors.fairy,
  'light-ghost': pokemonLightColors.ghost,
  'light-steel': pokemonLightColors.steel,
  'light-water': pokemonLightColors.water,
  'light-grass': pokemonLightColors.grass,
  'light-normal': pokemonLightColors.normal,
  'light-poison': pokemonLightColors.poison,
  'light-ground': pokemonLightColors.ground,
  'light-flying': pokemonLightColors.flying,
  'light-dragon': pokemonLightColors.dragon,
  'light-psychic': pokemonLightColors.psychic,
  'light-electric': pokemonLightColors.electric,
  'light-fighting': pokemonLightColors.fighting,
  'dark-bug': pokemonColors.bug,
  'dark-ice': pokemonColors.ice,
  'dark-dark': pokemonColors.dark,
  'dark-fire': pokemonColors.fire,
  'dark-rock': pokemonColors.rock,
  'dark-steel': pokemonColors.steel,
  'dark-water': pokemonColors.water,
  'dark-ghost': pokemonColors.ghost,
  'dark-grass': pokemonColors.grass,
  'dark-fairy': pokemonColors.fairy,
  'dark-dragon': pokemonColors.dragon,
  'dark-ground': pokemonColors.ground,
  'dark-flying': pokemonColors.flying,
  'dark-normal': pokemonColors.normal,
  'dark-poison': pokemonColors.poison,
  'dark-psychic': pokemonColors.psychic,
  'dark-fighting': pokemonColors.fighting,
  'dark-electric': pokemonColors.electric
}

export const hexToRgbA = (hex: string | any, opacity: number | string) => {
  let c: string[] | string | any
  if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
    c = hex.substring(1).split('')
    if (c.length === 3) {
      c = [c[0], c[0], c[1], c[1], c[2], c[2]]
    }
    c = '0x' + c.join('')
    return (
      'rgba(' +
      [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(',') +
      ',' +
      opacity +
      ')'
    )
  }
  throw new Error('Bad Hex')
}

export const getColorByType = (type: string): string => {
  return pokemonColors[type]
}

export const getLightColorByType = (type: string): string => {
  return pokemonColors[type]
}
