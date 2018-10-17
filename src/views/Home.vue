<template>
  <div class="container-fluid p-0">
    <div class="row no-gutters">
      <div class="col-12 position-relative home-wrapper">
        <div class="text-wrapper d-flex flex-column justify-content-center align-items-center">
          <h2 class="hero-logo">Giftly</h2>
          <h2 class="hero-slogan">Full of Surprises</h2>
        </div>
        <img src="../assets/img/heroimage1.png" class="heroimage">
      </div>
    </div>
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
.btn{
  display: block;
  margin-left: auto;
  margin-right: auto;
}
</style>