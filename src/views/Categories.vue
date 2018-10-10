<template>
  <div class="categories container">
    <h1 class="page-title">Categorieën</h1>
    <div class="row justify-content-around">
      <div v-for="(category, i) in categories" :key="i" class="col-12 col-md-6 col-lg-3">
        <Card :key="i" :name="category.name" :info="category.info" :boxImg="category.img">
          <div class="d-flex justify-content-between">
            <button type="button" class="btn btn-red" data-toggle="modal" :data-target="`#checkoutModal${i}`" @click="$store.commit('changeBox', category)">Ik wil deze</button>
            <button type="button" class="btn btn-blue" data-toggle="modal" :data-target="`#categoryModal${i}`">Meer info</button>
          </div>
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
          img: 'presentBox.png'
        },
        {
          name: 'Interesses',
          info: 'Weet je wat ze leuk vinden? Pak dan de deze!',
          detailinfo: "Als je deze doos wilt kopen zal je hierna mogen kiezen wat je giftee leuk vindt in het leven! Houden ze van footbal? Dan zorgen we voor iets in die aard! Of misschien zijn ze een gamer? Wat het ook is we zorgen ervoor dat het cadaeutje iets voor hen gaat zijn!",
          img: 'presentBox2.jpg'
          },
        {
          name: 'Exotisch',
          info: 'Wil je iets vanuit een ander land geven?',
          detailinfo: "In deze dozen is er altijd iets speciaal! Je zal van talloze landen kunnen kiezen om zo het wat meer te personalizeren! Zo kan je ook een beetje dieper gaan, misschien zijn ze snoepers, of verzamelaars van beeldjes!",
          img: 'presentBox3.jpg'
        },
        {
          name: 'Liefdadigheid',          
          info: 'Voor zij met een gouden hart!',
          detailinfo: "Uw geschenk zal gevuld worden met allerlei hartverwarmende goederen die goede doelen ondersteunen! Er is zelfs een optie om aan een goed doel van jou keuze te geven in je giftee's naam!",
          img: 'presentBox4.jpeg'
        },
        {
          name: 'Lokaal',
          info: 'Steun lokale handwerkers met deze handgemaakte geschenken!',
          detailinfo: "We hebben contact gelegd met meerdere artisinale kunstenaars en handwerkers! Zo maken zij voor ons en u geweldige en leuke dingen om weg te geven! Op deze manier kunt u uw lokale winkels ondersteunen en ontdekken wat zij bieden!",
          img: 'presentBox5.png'
        },
        {
          name: 'Ervaring',          
          info: 'Laat ze avontuur beleven!',
          detailinfo: "Wil je dat je giftee plezier heeft in plaats van ze een artikel te geven? Zoek niet verder! Wij bieden meerdere ervaringspakketten voor uw giftee om van te genieten! Variërend van bergbeklimmen tot een ontspannende spa-dag!",
          img: 'presentBox6.png'
        },
        {
          name: 'Feestdag: Halloween Editie',
          info: 'Geen betere manier om geluk te verspreiden! Gevult met halloween gerelateerde goodies!',
          detailinfo: "Is het Halloween en moet je een cadeau meenemen naar dat spookachtig feestje? Is het kerstmis en ben je een neef vergeten die je nog nooit eerder hebt gezien? Zoek niet verder dan onze feestdozen!",
          img: ''
        }
      ]
    }
  }
}
</script>