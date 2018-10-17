<template>
  <div id="app" class="d-flex flex-column">

    <!-- Navbar on the top -->
    <TheNavBar />
    <main>
      <!-- Display alerts -->
      <Alert />
      <router-view />
    </main>

  </div>
</template>

<script>
import Alert from "@/components/Alert";
import TheNavBar from "@/components/TheNavBar";
require('vue2-animate/dist/vue2-animate.min.css');

export default {
  components: {
    Alert,
    TheNavBar
  },
  methods: {
    showAlert () {
      this.$store.commit('showAlert', { type: 'success', message: 'U bent succesvol uitgelogd.' })
    }
  }
}
</script>


<style lang="scss">
@import 'assets/scss/style';
</style>
