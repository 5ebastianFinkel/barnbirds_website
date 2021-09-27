export const state = () => ({
  isNavOpen: false
})

export const mutations = {
  toggle (state) {
    state.isNavOpen = !state.isNavOpen
  }
}
