import Vue from 'vue'
import Vuex from 'vuex'
import { data } from './modules/data'
import getters from './getters'
import mutations from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    data,
  },
  state: {
    currentBox: {
      age: 'Alle leeftijden',
      sex: 'Beide',
    },
    loginName: null,
    price: 10,
    alert: {
      header: null,
      message: null,
      type: 'success',
    },
    shoppingCart: localStorage.getItem('shoppingCart')
      ? JSON.parse(localStorage.getItem('shoppingCart'))
      : {},
    shoppingCartList: localStorage.getItem('shoppingCartList')
      ? JSON.parse(localStorage.getItem('shoppingCartList'))
      : [],
  },
  mutations,
  actions: {
    hideAlert({ commit }) {
      setTimeout(() => {
        commit('hideAlert')
      }, 1000)
    },
  },
  getters,
})
