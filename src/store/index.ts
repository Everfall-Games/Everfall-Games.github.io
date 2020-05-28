import Vue from 'vue'
import Vuex from 'vuex'
// import db from 'localforage'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    slide: 0,
  },

  mutations: {
    set (state, payload): void {
      Object.assign(state, payload)
    },

    setSlide (state, slide): void {
      Object.assign(state, { slide })
    },
  },

  actions: {
  },
})
