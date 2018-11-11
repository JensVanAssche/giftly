export default {
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
  categoryDeliveryTime: state => type => {
    return state.data.categories[type].deliveryTime
  },
  deliveryTimeString: () => deliveryTime => {
    return `${deliveryTime[0]} tot ${deliveryTime[1]} dagen`
  },
  calculateShoppingCartDeliveryDate: (state, getters) => {
    let deliveryTime = [0, 0]
    getters.shoppingCartSet.forEach(item => {
      state.data.categories[item.type].deliveryTime.forEach((time, index) => {
        deliveryTime[index] = Math.max(time, deliveryTime[index])
      })
    })
    return deliveryTime
  },
  minDeliveryDate: (state, getters) => {
    const deliveryTime = getters.calculateShoppingCartDeliveryDate
    let date = new Date()
    date.setDate(date.getDate() + deliveryTime[1])
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
  },
}
