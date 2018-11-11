const uuidv4 = require('uuid/v4')
import Vue from 'vue'

export default {
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
}
