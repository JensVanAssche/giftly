import Vue from 'vue';
import Vuex from 'vuex';
import { data } from './modules/data';

const uuidv4 = require('uuid/v4');

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    data,
  },
  state: {
    currentBox: null,
    currentBoxOptions: null,
    // boxOptions: [],
    loginName: null,
    price: 10,
    alert: {
      header: null,
      message: null,
      type: 'success',
    },
    shoppingCart: localStorage.getItem('shoppingCart')
      ? JSON.parse(localStorage.getItem('shoppingCart'))
      : [],
  },
  mutations: {
    changeBox(state, box) {
      state.currentBox = box;
    },
    changeLogin(state, login) {
      state.loginName = login;
    },
    updatePrice(state, price) {
      state.price = price;
    },
    clearPrice: state => {
      state.price = 10;
    },
    showAlert(state, { header, message, type }) {
      state.alert.header = header;
      state.alert.message = message;
      state.alert.type = type;
    },
    hideAlert(state) {
      state.alert.header = null;
      state.alert.message = null;
      state.alert.type = 'success';
    },
    changeBoxOptions(state, options) {
      state.currentBoxOptions = options;
    },
    addToCart(state, box) {
      let uuid = uuidv4();
      box = { uuid, ...box };

      state.shoppingCart.push(box);
      localStorage.setItem('shoppingCart', JSON.stringify(state.shoppingCart));
    },
    clearCart(state) {
      state.shoppingCart = [];
      localStorage.removeItem('shoppingCart');
    },
  },
  actions: {
    hideAlert({ commit }) {
      setTimeout(() => {
        commit('hideAlert');
      }, 1000);
    },
  },
  getters: {
    showAlert: state => {
      if (state.alert.header == null && state.alert.message == null) {
        return false;
      }
      return true;
    },
    // Calculates the price of all boxes in the shoppingCart
    totalPrice: state => {
      let price = 0;

      state.shoppingCart.map(box => {
        price += box.price;
      });

      return price;
    },
    totalItemsInCart: state => {
      return state.shoppingCart.length;
    },
    isLoggedIn: state => {
      return state.loginName ? true : false;
    },
    precheckoutOrCheckout: (state, getters) => {
      return getters.isLoggedIn ? 'checkout' : 'precheckout';
    },
  },
});
