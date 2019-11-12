import Vue from 'vue'
import Vuex from 'vuex'
import { getToken, setToken, removeToken } from '../utils/auth'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: getToken(),
    userInfo: {}
  },
  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
      setToken(token)
    }
  },
  actions: {
    login: ({ commit }) => {

    },
    getUserInfo: ({ commit }) => {

    },
    logOut: ({ commit }) => {
      return new Promise((resolve, reject) => {
        removeToken()
      })
    }
  },
  modules: {
  }
})
