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
  color: string
  type: string
}
export const getInfoColors = (): teste => {
  const index: string[] = Object.keys(allPokemonColors)

  const randomIndex = Math.floor(Math.random() * index.length)

  return {
    color: allPokemonColors[index[randomIndex]],
    type: index[randomIndex].split('-')[1]
  }
}
