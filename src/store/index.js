import Vue from 'vue'
import Vuex from 'vuex'
import { getToken, setToken, removeToken } from '../utils/auth'
import http from '../utils/http'
import config from '../utils/config'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: getToken(),
    userInfo: {},
    scrollHeight: 0, // 网页正文高度
    searchKeyword: '', // 搜索keyword
    tabbarHeight: 0 // tabbar 高度
  },
  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
      setToken(token)
    },
    SET_SCROLLHEIGHT: (state, value) => {
      state.scrollHeight = value
    },
    SET_SEARCH_KEYWORD: (state, keyword) => {
      state.searchKeyword = keyword
    },
    SET_TABBAR_HEIGHT: (state, value) => {
      state.tabbarHeight = value
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
    },
    onSearch: ({ commit }, keyword) => {
      return new Promise((resolve, reject) => {
        http.request({
          url: '',
          data: {
            keyword
          },
          success: res => {
            if (res.code === config.SUCCESS_CODE) {
              commit('SET_SEARCH_KEYWORD', keyword)
              resolve(res.data)
            } else {
              reject(res)
            }
          }
        })
      })
    }
  },
  modules: {
  }
})
