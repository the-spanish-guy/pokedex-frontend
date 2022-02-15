import create from 'zustand'

type State = {
  counter: number
  setCounter: (counter: number) => void
  favicon: string
  setFavicon: (favicon: string) => void
}

const useStore = create<State>(set => ({
  counter: 0,
  setCounter: counter => {
    set(state => ({ counter: state.counter + counter }))
  },
  favicon: 'cat',
  setFavicon: favicon => {
    set(state => ({ favicon: favicon }))
  }
}))

export default useStore
