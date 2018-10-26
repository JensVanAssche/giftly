<template>
  <section>
    <div class="container-fluid p-0">
      <div class="row no-gutters">
        <div class="col-12 position-relative home-wrapper">
          <div class="text-wrapper d-flex flex-column justify-content-center align-items-center px-4 px-md-5">
            <p class="hero-slogan m-0">Laat je verrassen</p>
            <p class="hero-text mb-5">Cadeau ideeën zonder dat jij een idee moet hebben</p>
            <div class="button-wrapper mt-4">
              <a href="/categories" class="btn-red py-3 px-5 shadow-custom hero-button">
                Verras me
              </a>
            </div>
          </div>
          <img src="../assets/img/heroimage.jpg" class="heroimage">
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-12 px-4">
          <h1 class="text-center my-5">Cadeau's geven is nog nooit zo simpel geweest!</h1>
          <p class="text-center text-block mb-5">Je kent de momenten wel, vlak voor kerstmis of een verjaardag. Je wilt iemand verrassen met het perfecte cadeau, alleen heb je geen idee wat te geven.
            Geen zorgen! Met Giftly kan je verrassingscadeau’s bestellen waar je ontvanger noch jezelf weet wat het cadeau is!</p>
          <h3 class="text-center mb-4">
            Giftly werkt in een aantal simpele stappen
          </h3>
        </div>
        <div class="col-12 offset-sm-1 col-sm-9 offset-md-2 col-md-8 pb-5">
          <div class="row pb-5">
            <div class="col-12 col-md-4">
              <div class="d-flex justify-content-center">
                <i class="fas fa-boxes big-icon"></i>
              </div>
              <h4>1. Kies je categorie</h4>
              <h6>
                Totaal willekeurig of op basis van een interesse of afkomst? Jij kiest!
              </h6>
            </div>
            <div class="col-12 col-md-4">
              <div class="d-flex justify-content-center">
                <i class="fas fa-sliders-h big-icon"></i>
              </div>
              <h4>2. Pas je pakje aan</h4>
              <h6>
                Prijs, leeftijdscategorie en geslacht zijn vrij aan te passen!
              </h6>
            </div>
            <div class="col-12 col-md-4">
              <div class="d-flex justify-content-center">
                <i class="fas fa-truck big-icon"></i>
              </div>
              <h4>3. Je cadeau wordt zo geleverd!</h4>
              <h6>
                Jouw leuke verrassing komt eraan! Je kan het natuurlijk altijd online tracken! 
              </h6>
            </div>
          </div>
          <div class="row">
            <div class="col d-flex justify-content-center">
              <a href="/faq" class="btn-red py-3 px-5 shadow-custom btn-lg">
                Meer info
              </a>
            </div>
          </div>
        </div>
        <div class="col-12">
          <p>a</p>
        </div>
      </div>
    </div>
  </section>
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