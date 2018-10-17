<template>
  <div id="app" class="d-flex flex-column">

    <!-- Navbar on the top -->
      <nav class="navbar navbar-expand-lg navbar-dark bg-light-blue ">
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
              <router-link v-if="$store.state.loginName == null" to="/login" class="nav-link">
                Inloggen
              </router-link>
              <router-link v-else to="/" @click.native="$store.commit('changeLogin', null)" class="nav-link">
                {{ $store.state.loginName }}
              </router-link>
            </li>
          </ul>
        </div>
      </nav>
    <!-- Loads the current page -->
    <main>
      <!-- Display alerts -->
      <Alert />
      <router-view />
    </main>

  </div>
</template>

<script>
import Alert from "@/components/Alert";
require('vue2-animate/dist/vue2-animate.min.css');

export default {
  components: {
    Alert
  },
  methods: {
    showAlert () {
      this.$store.commit('showAlert', { type: 'success', message: 'U bent succesvol uitgelogd.' })
    }
  }
}
</script>


<style lang="scss">
@import "assets/scss/style";
</style>
