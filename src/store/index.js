import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    projectId: '',
  },
  mutations: {
    INIT_PROJECT_ID (state, id) {
      state.projectId = id;
    },
  },
  actions: {
    INIT_PROJECT_ID (context, id) {
      context.commit('INIT_PROJECT_ID', id)
    },
  }
})
