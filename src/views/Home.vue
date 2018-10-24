<template>
  <section>
    <div class="container-fluid p-0">
      <div class="row no-gutters">
        <div class="col-12 position-relative home-wrapper">
          <div class="text-wrapper d-flex flex-column justify-content-center px-4 px-md-5">
            <p class="hero-slogan m-0">Laat je verrassen</p>
            <p class="hero-text m-0">Lorem ipsum dolor sit a moeder</p>
            <div class="button-wrapper mt-4">
              <button class="btn-red py-2 px-3 shadow-custom">
                Verras me papi
              </button>
            </div>
          </div>
          <img src="../assets/img/heroimage.jpg" class="heroimage">
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-12 px-4">
          <h1 class="text-center my-4">Cadeau's geven is nog nooit zo simpel geweest!</h1>
          <p class="text-center text-block mb-4">Je kent de momenten wel, vlak voor kerstmis of een verjaardag. Je wilt iemand verrassen met het perfecte cadeau, alleen heb je geen idee wat te geven.
            Geen zorgen! Met Giftly kan je verrassingscadeau’s bestellen waar je ontvanger noch jezelf weet wat het cadeau is!</p>
          <h3 class="text-center mb-4">
            Giftly werkt in een aantal simpele stappen
          </h3>
        </div>
        <div class="col-12 offset-sm-1 col-sm-9 offset-md-2 col-md-8">
          <div class="row">
            <div class="col-12 col-md-4">
              <img src="/img/boxes.svg" alt="" class="d-block w-50 h-auto my-5 mx-auto">
              <h4>1. Kies je categorie</h4>
              <h5>
                Totaal willekeurig of
                op basis van een interesse
                of afkomst? Jij kiest!
              </h5>
            </div>
            <div class="col-12 col-md-4">
              <img src="/img/controls.svg" alt="" class="d-block w-50 h-auto my-5 mx-auto">
              <h4>2. Pas je pakje aan</h4>
              <h5>
                Prijs, leeftijdscategorie
                en geslacht zijn vrij aan
                te passen!
              </h5>
            </div>
            <div class="col-12 col-md-4">
              <img src="/img/delivery-truck.svg" alt="" class="d-block w-50 h-auto my-5 mx-auto">
              <h4>3. Jouw cadeau zoals jij
                het wilt</h4>
              <h5>
                Alles aan het pakje
                is aanpasbaar, buiten
                de inhoud natuurlijk.
              </h5>
            </div>
          </div>
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