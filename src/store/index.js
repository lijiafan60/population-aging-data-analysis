import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    provinceName: "",
    mapName: "ChinaMap"
  },
  getters: {
  },
  mutations: {
    clickProvinceName(state, name) {
      state.provinceName = name;
      state.mapName = "ProvinceDetail";
    }
  },
  actions: {
  },
  modules: {
  }
})
