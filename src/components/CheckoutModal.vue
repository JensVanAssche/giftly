<template>
  <div class="modal fade right" :id="`checkoutModal${i}`" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">{{ category.name }}</h4>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        </div>
        <div class="modal-body">
          <template v-if="$store.state.currentBox">
            <Card :name="$store.state.currentBox.name" :info="$store.state.currentBox.info" :boxImg="$store.state.currentBox.img">
              <div class="d-flex justify-content-between">
                <h3 class="card-title">{{ category.name }}</h3>
              </div>
              <p class="card-text">{{ category.info }}</p>
            </Card>
            <p class="pb-3">Geschatte levertijd: {{ category.deliveryTime }}</p>
            <form v-if="category.name == 'Interesses'" class="mb-4">
              <label>Kies interesse:</label>
              <select v-model="boxSelect.interests" class="form-control">
                <option v-for="(option, i) in interestsOptions" v-bind:value="option.value" :key="`interests-${i}`">
                  {{ option.text }}
                </option>
              </select>
            </form>
            <form v-if="category.name == 'Exotisch'" class="mb-4">
              <label>Kies werelddeel:</label>
              <select v-model="boxSelect.exotic" class="form-control">
                <option v-for="(option, i) in exoticOptions" v-bind:value="option.value" :key="`exotic-${i}`">
                  {{ option.text }}
                </option>
              </select>
            </form>
            <form v-if="category.name == 'Liefdadigheid'" class="mb-4">
              <label>Kies goed doel:</label>
              <select v-model="boxSelect.charity" class="form-control">
                <option v-for="(option, i) in charityOptions" v-bind:value="option.value" :key="`charity-${i}`">
                  {{ option.text }}
                </option>
              </select>
            </form>
            <form class="mb-4">
              <label>Kies geslacht:</label>
              <select v-model="boxSelect.sex" class="form-control">
                <option v-for="(option, i) in sexOptions" v-bind:value="option.value" :key="`sex-${i}`">
                  {{ option.text }}
                </option>
              </select>
            </form>
            <form class="mb-4">
              <label>Kies leeftijd:</label>
              <select v-model="boxSelect.age" class="form-control">
                <option v-for="(option, i) in ageOptions" v-bind:value="option.value" :key="`age-${i}`">
                  {{ option.text }}
                </option>
              </select>
            </form>
            <form class="pb-4">
              <div class="form-group">
                <label>Kies uw prijs:</label>
                <p>€ <span class="display-3">{{ price }}</span></p>
                <vueSlider v-model="price" ref="slider" :real-time="true" v-bind="options">
                </vueSlider>
              </div>
            </form>
            <div class="row">
              <div class="col">
                <button type="button" class="btn btn-red mt-2" @click="pay" data-dismiss="modal">Nu kopen</button>
              </div>
              <div class="col">
                <button type="button" class="btn btn-red mt-2" @click="addToCart" data-dismiss="modal">Toevoegen aan winkelmandje</button>
              </div>
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import vueSlider from 'vue-slider-component';
import Card from "@/components/Card";
import { mapMutations } from "vuex";

export default {
  props: {
    category: Object,
    i: Number
  },
  components: {
    Card,
    vueSlider
  },
  computed: {
    price: {
      get () {
        return this.$store.state.price
      },
      set (value) {
        this.$store.commit('updatePrice', value)
      },
    }
  },
  methods: {
    ...mapMutations([
      'showAlert',
      'clearPrice',
    ]),
    addToCart() {
      let box = this.$store.state.currentBox;
      box = {
        price: this.price,
        ...box
      };
      this.clearPrice();
      this.$store.commit('addToCart', box);
      this.showAlert({ type: 'success', header: '', message: 'Het item is toegevoegd aan je winkelmandje.' });
    },
    pay() {
      this.addToCart();
      this.$router.push(this.$store.getters.precheckoutOrCheckout);
    },
  },
  data() {
    return {
      options: {
        'height': 12,
        'dotSize': 25,
        'min': 10,
        'max': 100,
        'interval': 5,
        'tooltip': "none",
        'processStyle': {
          "backgroundColor": "#ff5964"
        }
      },
      boxSelect: {
          interests: 'Boeken',
          exotic: 'Europa',
          charity: 'Artsen Zonder Grenzen',
          age: 'Alle leeftijden',
          sex: 'Beide'
      },
      interestsOptions: [
        { text: 'Boeken', value: 'Boeken' },
        { text: 'Films', value: 'Films' },
        { text: 'Muziek', value: 'Muziek' },
        { text: 'Toneel/Theater', value: 'Toneel/Theater' },
        { text: 'Gaming', value: 'Gaming' },
        { text: 'Technologie', value: 'Technologie' },
        { text: 'Eten', value: 'Eten' },
        { text: 'Reizen', value: 'Reizen' },
        { text: 'Sport', value: 'Sport' },
        { text: 'Fitness', value: 'Fitness' },
        { text: 'Mode', value: 'Mode' },
      ],
      exoticOptions: [
        { text: 'Europa', value: 'Europa' },
        { text: 'Noord-Amerika', value: 'Noord-Amerika' },
        { text: 'Zuid-Amerika', value: 'Zuid-Amerika' },
        { text: 'Azië', value: 'Azië' },
        { text: 'Afrika', value: 'Afrika' },
        { text: 'Australië', value: 'Australië' },
      ],
      charityOptions: [
        { text: 'Artsen Zonder Grenzen', value: 'Artsen Zonder Grenzen' },
        { text: 'Kom Op Tegen Kanker', value: 'Kom Op Tegen Kanker' },
        { text: 'Child Focus', value: 'Child Focus' },
        { text: 'Greenpeace', value: 'Greenpeace' },
        { text: 'PETA', value: 'PETA' },
        { text: 'Unicef', value: 'Unicef' },
      ],
      ageOptions: [
        { text: 'Alle leeftijden', value: 'Alle leeftijden' },
        { text: '-12', value: '-12' },
        { text: '12-18', value: '12-18' },
        { text: '18-25', value: '18-25' },
        { text: '25-35', value: '25-35' },
        { text: '35-55', value: '35-55' },
        { text: '55+', value: '55+' },
      ],
      sexOptions: [
        { text: 'Beide', value: 'Beide' },
        { text: 'Man', value: 'Man' },
        { text: 'Vrouw', value: 'Vrouw' }
      ]
    }
  }
}
</script>
