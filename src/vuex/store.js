import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  count: 1
}

const mutations = {
  INCREMENT (state, amount) {
    state.count += amount
  },
  DECREMENT (state, amount) {
    state.count -= amount
  },
  UPDATE (state, amount) {
    state.count = amount
  }
}

export default new Vuex.Store({
  state,
  mutations
})
