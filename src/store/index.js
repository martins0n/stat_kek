import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


import betanormalstore from './modules/BetaNormalStore'

const store = new Vuex.Store({
    modules: {
      betanormalstore
  }
})

export default store;