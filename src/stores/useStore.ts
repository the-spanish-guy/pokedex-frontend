import create from 'zustand'

type State = {
  globalBgColor: string
  setGlobalBgColor: (globalBgColor: string) => void
  inViewPort: boolean
  setInViewPort: (inViewPort: boolean) => void
  load: boolean
  setLoad: (load: boolean) => void
}

const useStore = create<State>(set => ({
  globalBgColor: '',
  setGlobalBgColor: bgColor => {
    set(state => ({ globalBgColor: bgColor }))
  },

  inViewPort: true,
  setInViewPort: viewPort => {
    set(state => ({ inViewPort: viewPort }))
  },

  load: false,
  setLoad: load => {
    set(state => ({ load }))
  }
}))

export default useStore
