import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentBox: null,
    boxOptions: [],
    loginName: null,
    price: 70,
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
  },
  actions: {},
});
