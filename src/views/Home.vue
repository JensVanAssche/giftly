<template>
  <div class="home">

    <!-- Slider with boxes -->
    <Slider />

    <!-- CTA Button to choose your box -->
    <button>Choose your Box</button>

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

