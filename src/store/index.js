import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    menu: null
  },
  mutations: {
    menuUpdate (state, data) {
      console.log('mutations', data)
      state.menu = data
    }
  },
  actions: {
    menuUpdate ({ state, commit }, data) {
      console.log('adctions', data)
      commit('menuUpdate', data)
    }
  },
  getters: {
    getMenu (state) {
      return state.menu
    }
  },
  modules: {
  }
})
