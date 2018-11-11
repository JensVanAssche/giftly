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
    shoppingCartDeliveryTime: localStorage.getItem('shoppingCartDeliveryTime')
      ? JSON.parse(localStorage.getItem('shoppingCartDeliveryTime'))
      : [0, 0],
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
    updateShoppingCartDeliveryTime(state, deliveryTime) {
      let updated = false
      deliveryTime.forEach((newTime, index) => {
        if (newTime > state.shoppingCartDeliveryTime[index]) {
          state.shoppingCartDeliveryTime[index] = newTime
          updated = true
        } else return false
      })

      if (updated)
        localStorage.setItem(
          'shoppingCartDeliveryTime',
          JSON.stringify(state.shoppingCartDeliveryTime),
        )
    },
    addToCart(state, box) {
      this.commit(
        'updateShoppingCartDeliveryTime',
        state.data.categories[box.type].deliveryTime,
      )

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
      state.shoppingCartDeliveryTime = [0, 0]
      localStorage.removeItem('shoppingCart')
      localStorage.removeItem('shoppingCartList')
      localStorage.removeItem('shoppingCartDeliveryTime')
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
    shoppingCartDeliveryTimeString: state => {
      return `${state.shoppingCartDeliveryTime[0]} tot ${
        state.shoppingCartDeliveryTime[1]
      } dagen`
    },
  },
})
