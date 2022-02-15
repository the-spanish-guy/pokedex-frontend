import { Helmet } from 'react-helmet'
import { FC, ReactElement } from 'react'

import catIcon from '@/assets/cat.png'
import dogIcon from '@/assets/dog.png'
import useStore from '@/stores/useStore'

type LayoutType = {
  title: string
}

const LayoutComponent: FC<LayoutType> = ({ title, children }): ReactElement => {
  const fav = useStore(state => state.favicon)

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <link rel="icon" href={fav === 'cat' ? catIcon : dogIcon} />
        <title>{title}</title>
      </Helmet>
      {children}
    </>
  )
}

export default LayoutComponent
