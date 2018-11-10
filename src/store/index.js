import Vue from 'vue'
import Vuex from 'vuex'
import { data } from './modules/data'

const uuidv4 = require('uuid/v4')

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
  mutations: {
    changeBox(state, { type }) {
      state.currentBox = {
        type,
        ...state.currentBox,
      }
    },
    changeLogin(state, login) {
      state.loginName = login
    },
    updatePrice(state, price) {
      state.price = price
    },
    clearCurrentBox: state => {
      state.price = 10
      state.currentBox = {
        age: 'Alle leeftijden',
        sex: 'Beide',
      }
    },
    showAlert(state, { header, message, type }) {
      state.alert.header = header
      state.alert.message = message
      state.alert.type = type
    },
    hideAlert(state) {
      state.alert.header = null
      state.alert.message = null
      state.alert.type = 'success'
    },
    changeBoxOptions(state, options) {
      state.currentBoxOptions = options
    },
    addToCart(state, box) {
      let uuid = uuidv4()
      box = { uuid, ...box }

      Vue.set(state.shoppingCart, uuid, box)
      state.shoppingCartList.push(uuid)
      localStorage.setItem('shoppingCart', JSON.stringify(state.shoppingCart))
      localStorage.setItem(
        'shoppingCartList',
        JSON.stringify(state.shoppingCartList),
      )
    },
    clearCart(state) {
      state.shoppingCart = {}
      state.shoppingCartList = []
      localStorage.removeItem('shoppingCart')
      localStorage.removeItem('shoppingCartList')
    },
    deleteFromCart(state, uuid) {
      Vue.delete(state.shoppingCart, uuid)
      state.shoppingCartList = state.shoppingCartList.filter(item => {
        return item !== uuid
      })

      localStorage.setItem('shoppingCart', JSON.stringify(state.shoppingCart))
      localStorage.setItem(
        'shoppingCartList',
        JSON.stringify(state.shoppingCartList),
      )
    },
  },
  actions: {
    hideAlert({ commit }) {
      setTimeout(() => {
        commit('hideAlert')
      }, 1000)
    },
  },
  getters: {
    showAlert: state => {
      if (state.alert.header == null && state.alert.message == null) {
        return false
      }
      return true
    },
    shoppingCartSet: state =>
      state.shoppingCart
        ? state.shoppingCartList.map(id => state.shoppingCart[id])
        : false,
    totalPrice: (state, getters) => {
      let price = 0

      if (state.shoppingCartList)
        getters.shoppingCartSet.map(box => {
          price += box.price
        })

      return price
    },
    totalItemsInCart: state => {
      return state.shoppingCartList.length
    },
    isLoggedIn: state => {
      return state.loginName ? true : false
    },
    precheckoutOrCheckout: (state, getters) => {
      return getters.isLoggedIn ? 'checkout' : 'precheckout'
    },
    deliveryTimeString: state => type => {
      const deliveryTime = state.data.categories[type].deliveryTime
      return `${deliveryTime[0]} tot ${deliveryTime[1]} dagen`
    },
  },
})
