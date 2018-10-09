<template>
  <div class="home">
    <div class="row">
      <div class="col-md-6 home-left">
        <h1>Giftly</h1>
      </div>
      <div class="col-md-6 home-right">
        <h2>Over ons</h2>
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget</p>

        <div class="slider">
          <!-- Slider with boxes -->
          <Slider />

          <!-- CTA Button to choose your box -->
          <router-link to="/categories">
            <button class="btn btn-red">Toon mij meer!</button>
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
</style>