import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


import betanormalstore from './modules/BetaNormalStore'
import linestore from './modules/LineStore'

const store = new Vuex.Store({
    modules: {
      namespaced: true,
      betanormalstore: betanormalstore,
      linestore: linestore
  }
})

export default store;