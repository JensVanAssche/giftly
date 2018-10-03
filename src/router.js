import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Categories from './views/Categories.vue';
import Checkout from './views/Checkout.vue';
import FAQ from './views/FAQ.vue';
import About from './views/About.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/categories',
      name: 'Categories',
      component: Categories,
    },
    {
      path: '/checkout',
      name: 'Checkout',
      component: Checkout,
    },
    {
      path: '/faq',
      name: 'FAQ',
      component: FAQ,
    },
    {
      path: '/about',
      name: 'About',
      component: About,
    },
  ],
});
