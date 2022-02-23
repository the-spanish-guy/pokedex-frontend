import create from 'zustand'

type State = {
  globalBgColor: string
  setglobalBgColor: (counter: string) => void
  inViewPort: boolean
  setInViewPort: (inViewPort: boolean) => void
}

const useStore = create<State>(set => ({
  globalBgColor: '',
  setglobalBgColor: bgColor => {
    set(state => ({ globalBgColor: bgColor }))
  },

  inViewPort: true,
  setInViewPort: viewPort => {
    set(state => ({ inViewPort: viewPort }))
  }
}))

export default useStore
