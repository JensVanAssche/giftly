<template>
  <div class="home">
    <div class="row">
      <div class="col-md-6 home-left">
        <h1>Giftly</h1>
      </div>
      <div class="col-md-6 home-right">
        <h2>Over ons</h2>
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
</style>