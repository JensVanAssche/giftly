import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import 'bootstrap'
import jQuery from 'jquery'
import VueCarousel from 'vue-carousel'

Vue.config.productionTip = false
Vue.use(VueCarousel)
window.$ = jQuery

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
