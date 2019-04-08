import Vue from 'vue'
import Vuex from 'vuex'
import {fetch} from '../utils/index'
import api from '../utils/api'
import vuexPerisisted from 'vuex-persistedstate'
import user from './user'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    userData: {}
  },
  mutations: {
    'CHANGE_USERDATA'(state, userData) {
      state.userData = userData;
    }
  },
  actions: {
    getUserData(context) {
      return new Promise((resolve) => {
        fetch.get(api.getUserData).then(res => {
          if (res.code == 200) {
            this.userData = res.data
            context.commit('CHANGE_USERDATA', res.data)
            resolve(res)
          }
        })
      })
    }
  },
  plugins: [vuexPerisisted({
    storage: {
      getItem: key => sessionStorage.getItem(key),
      setItem: (key, value) =>
        sessionStorage.setItem(key, value),
      removeItem: key => sessionStorage.removeItem(key),
    },})]
})

export default store
