<template>
  <div class="home">

    <!-- Slider with boxes -->
    <Slider />

    <!-- CTA Button to choose your box -->
    <router-link to="/categories">
      <button class="btn btn-info">Choose your Box</button>
    </router-link>

  </div>
</template>

<script>
import Slider from "@/components/HomeSlider";
export default {
  name: 'home',
  components: {
    Slider
  }
}
</script>

<style lang="scss" scoped>
</style>

