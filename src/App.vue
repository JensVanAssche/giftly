<template>
  <div id="app">

    <!-- Navbar on the top -->
    <div class="header">
      <nav>
        <router-link to="/" class="navbar-brand">
          <p class="header-logo m-0">Giftly</p>
        </router-link>
        <ul class="nav-list">
          <li class="nav-list-item">
            <router-link to="/categories" class="nav-link">
              Categories
            </router-link>
          </li>
          <li class="nav-list-item">
            <router-link to="/faq" class="nav-link">
              FAQ
            </router-link>
          </li>
          <li class="nav-list-item">
            <router-link v-if="$store.state.loginName == null" to="/login" class="nav-link">
              Login
            </router-link>
            <router-link v-else to="/" @click.native="$store.commit('changeLogin', null)" class="nav-link">
              {{ $store.state.loginName }}
            </router-link>
          </li>
        </ul>
      </nav>
    </div>

    <!-- Loads the current page -->
    <div class="container">
      <!-- Display alerts -->
      <Alert />
      <router-view />
    </div>
  </div>
</template>

<script>
import Alert from "@/components/Alert";
export default {
  components: {
    Alert
  }
}
</script>


<style lang="scss">
@import "assets/scss/style";
</style>
