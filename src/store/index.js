import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    indexPageCenterName: "ChinaMap",
    nameMap: [

    ]
  },
  getters: {
  },
  mutations: {
    changeCenterName(state, name) {
      state.indexPageCenterName = name;
    }
  },
  actions: {
  },
  modules: {
  }
})
