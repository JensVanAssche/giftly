<template>
  <div id="app">
    <!-- Giftly Logo left corner-->
    <!-- <img alt="Giftly logo" src="./assets/logo.png"> -->

    <!-- Navbar on the top -->
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/categories">Categories</router-link> |
      <router-link to="/checkout">Checkout</router-link>
    </div>

    <!-- Loads the current page -->
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<style lang="scss">
@import './assets/css/custom';
@import '~bootstrap/scss/bootstrap';
</style>
