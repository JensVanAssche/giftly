<template>
  <div class="container-fluid p-0 h-100">
    <div class="row no-gutters h-100 home-wrapper">
      <div class="col-12 col-md-6 position-relative">
        <div class="text-wrapper d-flex justify-content-center align-items-center">
          <span class="hero-text">Giftly</span>
        </div>
        <img src="../assets/img/heroimage1.png" class="heroimage">
      </div>
      <div class="col-12 col-md-6 pt-3 px-5">
        <h2 class="page-title">Over ons</h2>
        <p>giftly omg so awsumm</p>

        <div class="slider">
          <Slider />
          <router-link to="/categories">
            <button class="btn btn-lg btn-red">Toon mij meer!</button>
          </router-link>
        </div>
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