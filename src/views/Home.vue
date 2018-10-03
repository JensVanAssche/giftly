<template>
  <div class="home">
    <div class="home-logo d-flex justify-content-center">
      <img src="/img/giftly.svg" class="w-100">
    </div>

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
};
</script>

<style lang="scss" scoped>
  .home-logo {
    height: 250px;
  }
</style>