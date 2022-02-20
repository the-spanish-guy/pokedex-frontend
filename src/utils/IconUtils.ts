import Bug from '../assets/icons/bug.svg'
import Dark from '../assets/icons/dark.svg'
import Dragon from '../assets/icons/dragon.svg'
import Electric from '../assets/icons/electric.svg'
import Fairy from '../assets/icons/fairy.svg'
import Fighting from '../assets/icons/fighting.svg'
import Fire from '../assets/icons/fire.svg'
import Flying from '../assets/icons/flying.svg'
import Ghost from '../assets/icons/ghost.svg'
import Grass from '../assets/icons/grass.svg'
import Ground from '../assets/icons/ground.svg'
import Ice from '../assets/icons/ice.svg'
import Normal from '../assets/icons/normal.svg'
import Poison from '../assets/icons/poison.svg'
import Psychic from '../assets/icons/psychic.svg'
import Rock from '../assets/icons/rock.svg'
import Steel from '../assets/icons/steel.svg'
import Water from '../assets/icons/water.svg'
import Pokeball from '../assets/icons/pokebola.svg'
import Male from '../assets/icons/male.svg'
import Female from '../assets/icons/female.svg'

const pokemonIcons: Record<string, string> = {
  bug: Bug,
  dark: Dark,
  dragon: Dragon,
  electric: Electric,
  fairy: Fairy,
  fighting: Fighting,
  fire: Fire,
  flying: Flying,
  ghost: Ghost,
  grass: Grass,
  ground: Ground,
  ice: Ice,
  normal: Normal,
  poison: Poison,
  psychic: Psychic,
  rock: Rock,
  steel: Steel,
  water: Water,
  pokeball: Pokeball
}

const icons: Record<string, string> = {
  ...pokemonIcons,
  male: Male,
  female: Female
}

export const getIconByType = (type: string): string => {
  return icons[type]
}

export const getIconByName = (name: string): string => {
  return icons[name]
}
