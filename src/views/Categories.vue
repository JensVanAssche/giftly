<template>
  <div class="categories container">
    <h1 class="page-title pb-4">Categorieën</h1>
    <div class="row justify-content-around">
      <div v-for="(category, i) in categories" :key="i" class="col-12 col-md-6">
        <Card :key="i" :boxImg="category.img">
          <!-- <p class="card-delivery">Levertijd: {{ category.deliveryTime }}</p> -->
          <div class="d-flex justify-content-between">
            <h3 class="card-title">{{ category.name }}</h3>
            <button type="button" class="btn btn-lg btn-red" data-toggle="modal" :data-target="`#checkoutModal${i}`" @click="$store.commit('changeBox', category)">Ik wil deze</button>
          </div>
          <p class="card-text mt-3">{{ category.info }}</p>
          <a href="#" class="text-red mt-4" data-toggle="modal" :data-target="`#categoryModal${i}`">Meer info</a>
          <CheckoutModal :i="i" :category="category" />
          <InfoModal :i="i" :category="category" />
        </Card>
      </div>
    </div>
  </div>  
</template>

<script>
import Card from "@/components/Card";
import InfoModal from "@/components/InfoModal";
import CheckoutModal from "@/components/CheckoutModal";

export default {
  components: {
    Card,
    InfoModal,
    CheckoutModal
  },
  data () {
    return {
      categories: [
        {
          name: 'Willekeurig',
          info: 'Voor zij die niet weten wat te geven!',
          detailinfo: "Iets voor wanneer je het echt niet weet! Afhankelijk van jouw prijsklasse zullen we je cadeautje maken zodat het voor iedereen wat past! We gaan eventjes in ons magazijn om alle soorten leuks te verzamelen!",
          img: 'random_1.png',
          deliveryTime: '2-3 dagen'
        },
        {
          name: 'Interesses',
          info: 'Weet je wat ze leuk vinden? Pak dan de deze!',
          detailinfo: "Als je deze doos wilt kopen zal je hierna mogen kiezen wat je giftee leuk vindt in het leven! Houden ze van voetbal? Dan zorgen we voor iets in die aard! Of misschien zijn ze een gamer? Wat het ook is we zorgen ervoor dat het cadeautje iets voor hen gaat zijn!",
          img: 'interests.jpg',
          deliveryTime: '2-3 dagen'
          },
        {
          name: 'Exotisch',
          info: 'Wil je iets vanuit een ander land geven?',
          detailinfo: "In deze dozen is er altijd iets speciaal! Je zal van talloze landen kunnen kiezen om zo het wat meer te personaliseren! Zo kan je ook een beetje dieper gaan, misschien zijn ze snoepers, of verzamelaars van beeldjes!",
          img: 'exotic.jpg',
          deliveryTime: '5 dagen'
        },
        {
          name: 'Liefdadigheid',          
          info: 'Voor zij met een gouden hart!',
          detailinfo: "Uw geschenk zal gevuld worden met allerlei hartverwarmende goederen die goede doelen ondersteunen! Er is zelfs een optie om aan een goed doel van jou keuze te geven in je giftee's naam!",
          img: 'charity.jpg',
          deliveryTime: '2-3 dagen'
        },
        {
          name: 'Lokaal',
          info: 'Steun lokale handwerkers met deze handgemaakte geschenken!',
          detailinfo: "We hebben contact gelegd met meerdere artisinale kunstenaars en handwerkers! Zo maken zij voor ons en u geweldige en leuke dingen om weg te geven! Op deze manier kunt u uw lokale winkels ondersteunen en ontdekken wat zij bieden!",
          img: 'local.jpg',
          deliveryTime: '2-3 dagen'
        },
        {
          name: 'Ervaring',          
          info: 'Laat ze avontuur beleven!',
          detailinfo: "Wil je dat je giftee plezier heeft in plaats van ze een artikel te geven? Zoek niet verder! Wij bieden meerdere ervaringspakketten voor uw giftee om van te genieten! Variërend van bergbeklimmen tot een ontspannende spa-dag!",
          img: 'experience.jpg',
          deliveryTime: '2-3 dagen'
        },
        {
          name: 'Feestdag: Halloween Editie',
          info: 'Geen betere manier om geluk te verspreiden! Gevult met Halloween gerelateerde goodies!',
          detailinfo: "Is het Halloween en moet je een cadeau meenemen naar dat spookachtig feestje? Is het kerstmis en ben je een neef vergeten die je nog nooit eerder hebt gezien? Zoek niet verder dan onze feest-dozen!",
          img: 'halloween.jpg',
          deliveryTime: '2-3 dagen'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  min-height: 400px;
}
</style>
