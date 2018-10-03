<template>
  <div id="app">

    <!-- Navbar on the top -->
    <div id="nav">
      <!-- Giftly Logo left corner-->
      <router-link to="/">
        <!-- <img alt="Giftly logo" src="./assets/logo.png"> -->
        Giftly
      </router-link> |
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
