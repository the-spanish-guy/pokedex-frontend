import {
  BugIcon,
  IceIcon,
  FireIcon,
  RockIcon,
  MaleIcon,
  DarkIcon,
  GhostIcon,
  GrassIcon,
  SteelIcon,
  WaterIcon,
  FairyIcon,
  FemaleIcon,
  DragonIcon,
  FlyingIcon,
  GroundIcon,
  NormalIcon,
  PoisonIcon,
  PsychicIcon,
  ElectricIcon,
  FightingIcon
} from '@/components/Icons'
import { IconProps } from '@chakra-ui/react'

type IconByNameProps = IconProps & {
  name: string
}

export function getIconByName({ name, ...prop }: IconByNameProps) {
  const renderIcons = (name: string) => {
    switch (name) {
      case 'bug':
        return <BugIcon {...prop} />
      case 'dark':
        return <DarkIcon {...prop} />
      case 'dragon':
        return <DragonIcon {...prop} />
      case 'electric':
        return <ElectricIcon {...prop} />
      case 'fairy':
        return <FairyIcon {...prop} />
      case 'fighting':
        return <FightingIcon {...prop} />
      case 'fire':
        return <FireIcon {...prop} />
      case 'flying':
        return <FlyingIcon {...prop} />
      case 'ghost':
        return <GhostIcon {...prop} />
      case 'grass':
        return <GrassIcon {...prop} />
      case 'ground':
        return <GroundIcon {...prop} />
      case 'ice':
        return <IceIcon {...prop} />
      case 'normal':
        return <NormalIcon {...prop} />
      case 'poison':
        return <PoisonIcon {...prop} />
      case 'psychic':
        return <PsychicIcon {...prop} />
      case 'rock':
        return <RockIcon {...prop} />
      case 'steel':
        return <SteelIcon {...prop} />
      case 'water':
        return <WaterIcon {...prop} />
      case 'male':
        return <MaleIcon {...prop} />
      case 'female':
        return <FemaleIcon {...prop} />

      default:
        return <></>
    }
  }

  return renderIcons(name)
}
