<template>
  <div class="container-fluid p-0">
    <div class="row no-gutters">
      <div class="col-12 col-md-6 position-relative">
        <div class="text-wrapper d-flex justify-content-center align-items-center">
          <span class="hero-text">Giftly</span>
        </div>
        <img src="../assets/img/heroimage1.png" class="heroimage">
      </div>
      <div class="col-12 col-md-6 p-5">
        <h2 class="page-title">Over ons</h2>
        <p>Wij zijn Giftly! Giftly is een nieuwe service die de manier van pakjes kopen gaat veranderen! Je kent wel de momenten, vlak voor kerstmis of een verjaardag, je wil voor iemand een cadeau kopen maar hebt geen idee hebt hoe of wat, waar of wanneer. Die tijden van kopbreken zijn voorbij dankzij Giftly! Bij ons kan je geweldige cadeaus kopen waarvan je ontvanger noch jezelf weet wat erin zit, een dubbele verrassing dus! Cadeaus kunnen gekocht worden op basis van interesses, lokale of exotische afkomst of gewoon totaal willekeurig!</p>

        <div class="slider">
          <!-- Slider with boxes -->
          <Slider />

          <!-- CTA Button to choose your box -->
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