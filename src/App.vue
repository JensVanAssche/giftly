<template>
  <div id="app">

    <!-- Navbar on the top -->
    <div id="nav">
      <!-- Giftly Logo left corner-->
      <router-link to="/">
        <!-- <img class="nav-logo" alt="Giftly logo" src="/img/giftly_black.svg"> -->
        GIFTLY
      </router-link>

      <div class="float-right">
        <router-link to="/categories">Categories</router-link>
        <router-link to="/faq">FAQ</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/login">Login</router-link>
      </div>
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

  #nav {
    padding: 20px;

    a {
      margin: 0 10px;
    }
  }

  .nav-logo {
    width: 100px;
  }
</style>
