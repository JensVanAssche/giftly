<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-transparent py-3">
    <router-link to="/" class="navbar-brand header-logo">
      Giftly
    </router-link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <router-link to="/" class="nav-link">
            Home
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/categories" class="nav-link">
            Categorieën
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/faq" class="nav-link">
            Veelgestelde Vragen
          </router-link>
        </li>
        <li class="nav-item">
          <router-link v-if="!$store.state.loginName" to="/login" class="nav-link">
            Inloggen
          </router-link>
          <router-link v-else to="/" @click.native="$store.commit('changeLogin', null)" class="nav-link">
            {{ $store.state.loginName }}
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/shoppingcart" class="nav-link">
            <img src="../assets/img/shopping-cart.svg" alt="Shopping Cart Icon" class="navIcon">
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
$iconSize: 30px;

.navIcon {
  width: $iconSize;
  height: $iconSize;
}
</style>
