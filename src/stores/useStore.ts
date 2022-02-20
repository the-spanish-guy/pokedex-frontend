import create from 'zustand'

type State = {
  globalBgColor: string
  setglobalBgColor: (counter: string) => void
}

const useStore = create<State>(set => ({
  globalBgColor: '',
  setglobalBgColor: bgColor => {
    set(state => ({ globalBgColor: bgColor }))
  }
}))

export default useStore
