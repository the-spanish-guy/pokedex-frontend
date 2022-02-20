import { allPokemonColors } from './ColorUitls'

export const pokemonTypes = {
  bug: 'bug',
  dark: 'dark',
  dragon: 'dragon',
  electric: 'electric',
  fairy: 'fairy',
  fighting: 'fighting',
  fire: 'fire',
  flying: 'flying',
  ghost: 'ghost',
  grass: 'grass',
  ground: 'ground',
  ice: 'ice',
  normal: 'normal',
  poison: 'poison',
  psychic: 'psychic',
  rock: 'rock',
  steel: 'steel',
  water: 'water'
}

type teste = {
  type: string
  color: string
  darkColor: string
  reverseColor: string
}
export const getInfoColors = (): teste => {
  const index: string[] = Object.keys(allPokemonColors)

  const randomIndex = Math.floor(Math.random() * index.length)
  const currentIndex = index[randomIndex]
  const type = index[randomIndex].split('-')[1]
  const darkIndex = `dark-${type}`
  const reverseIndex = currentIndex.match(`dark-${type}`)
    ? `light-${type}`
    : `dark-${type}`
  const reverseColor = allPokemonColors[reverseIndex]

  return {
    type,
    reverseColor,
    darkColor: allPokemonColors[darkIndex],
    color: allPokemonColors[index[randomIndex]]
  }
}
