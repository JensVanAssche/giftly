<template>
  <div id="app">

    <!-- Navbar on the top -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <router-link to="/" class="navbar-brand">
        <p class="logo m-0">Giftly</p>
      </router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <router-link to="/categories" class="nav-link">
              Categories
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/faq" class="nav-link">
              FAQ
            </router-link>
          </li>
          <li class="nav-item">
            <router-link v-if="$store.state.loginName == null" to="/login" class="nav-link">
              Login
            </router-link>
            <router-link v-else to="/" @click.native="$store.commit('changeLogin', null)" class="nav-link">
              {{ $store.state.loginName }}
            </router-link>
          </li>
        </ul>
      </div>
    </nav>

    <!-- Loads the current page -->
    <div class="container">
      <router-view />
    </div>

  </div>
</template>

<style lang="scss">
@import "assets/scss/fonts";
@import "assets/scss/custom";
@import "~bootstrap/scss/bootstrap";

body {
  overflow-y: scroll;
  overflow-x: hidden;
}

</style>
