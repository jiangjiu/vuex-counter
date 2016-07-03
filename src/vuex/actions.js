export const incrementCounter = function ({dispatch}) {
  dispatch('INCREMENT', 1)
}

export const decrementCounter = function ({dispatch}) {
  dispatch('DECREMENT', 1)
}

export const updateCounter = function ({dispatch}, value) {
  dispatch('UPDATE', value)
}
