import { Helmet } from 'react-helmet'
import { FC, ReactElement } from 'react'

import PokeBall from '@/assets/pokebola.svg'
import useStore from '@/stores/useStore'

type LayoutType = {
  title: string
}

const LayoutComponent: FC<LayoutType> = ({ title, children }): ReactElement => {
  const { globalBgColor } = useStore()

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="theme-color" content={globalBgColor} />
        <link rel="icon" href={PokeBall} />
        <title>{title}</title>
      </Helmet>
      {children}
    </>
  )
}

export default LayoutComponent
