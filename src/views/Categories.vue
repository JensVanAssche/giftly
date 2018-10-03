<template>
  <div class="row justify-content-around">
      <Card v-for="(category, i) in categories" :key="i" class="col-md-4 col-lg-3 m-3" :name="category.name" :info="category.info"> 
        <router-link to="/checkout" class="btn btn-outline-danger" @click.native="$store.commit('changeBox', category)">
          Kies deze doos
        </router-link>
        <button type="button" class="btn btn-outline-primary" data-toggle="modal" :data-target="`#categoryModal${i}`">Info</button>
        <InfoModal :i="i" :name="category.name" :detailinfo="category.detailinfo" />
      </Card>
  </div>
</template>

<script>
import Card from "@/components/Card";
import InfoModal from "@/components/InfoModal";

export default {
  components: {
    Card,
    InfoModal
  },
  data () {
    return {
      categories: [
        {
          name: 'Random',
          info: 'For those that don\'t know what to get at all!',
          detailinfo: "A gift when you're completely clueless! Depending on your pricerange we will try to make your gift one that'll have something in it that everyone can enjoy! We'll go around collecting all sorts of cool stuff for your giftee to enjoy!"
        },
        {
          name: 'Interests',
          info: 'Know what they like? Get them one of these!',
          detailinfo: "If you go further you'll be asked to give us an idea on what your giftee's preferences in life are! Do they like football? We'll get them stuff related to that! Or maybe they're a gamer, we'll make sure the contents are something they'd enjoy!"
        },
        {
          name: 'Exotic',
          info: 'Want to give them a piece of another country?',
          detailinfo: "In these boxes there's always something special in them! You'll be able to select one of our countries of origin and what sort of gift you'd like it to be (think delicious candy or lovely memorabilia!)."
        },
        {
          name: 'Charity',          
          info: 'For the person with the golden heart!',
          detailinfo: "Your gift will be filled with heartwarming goods that support good causes! There's even an option to give to a charity of your choice and sending the proof of it in your giftee's name!"
        },
        {
          name: 'Local',
          info: 'Support local artisans with these handmade gifts!',
          detailinfo: "We've made contact with several artisans, employing them to create lovely things for you and us to give to those we love! This way you can support your local shops and explore what they offer!"
        },
        {
          name: 'Experience',          
          info: 'Have them experience adventure!',
          detailinfo: "Would you like your giftee to have some fun rather than give them an item? Look no further! We offer multiple experience packs for your giftee to enjoy! Ranging from mountain climbing to a relaxing spa day!"
        },
        {
          name: 'Holiday',
          info: 'No better way to spread holiday cheer!',
          detailinfo: "Is it Halloween and you need to bring a gift to that spooky party? Is it Christmas and you totally forgot about a cousin you've never seen before? Well look no further than our holiday boxes!"
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
</style>

