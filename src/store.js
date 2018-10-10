import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentBox: null,
    boxOptions: [],
    loginName: null,
    price: 25,
    alert: {
      header: null,
      message: null,
      type: "success",
    },
    boxSelectChoice: null,
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
    showAlert(state, { header, message, type }) {
      state.alert.header = header;
      state.alert.message = message;
      state.alert.type = type;
    },
    hideAlert(state) {
      state.alert.header = null;
      state.alert.message = null;
      state.alert.type = "success";
    },
    updateBoxSelectChoice(state, select) {
      state.boxSelectChoice = select;
    }
  },
  actions: {
    hideAlert({ commit }) {
      setTimeout(() => {
        commit("hideAlert");
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
  },
});
