<template>
  <div class="modal fade right" :id="`checkoutModal${i}`" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">Details</h4>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        </div>
        <div class="modal-body">
          <template v-if="$store.state.currentBox">
            <Card :name="$store.state.currentBox.name" :info="$store.state.currentBox.info" :deliveryTime="$store.state.currentBox.deliveryTime" class="col"></Card>
            <form v-if="category.name == 'Interesses'" class="mb-4">
              <label>Kies interesse:</label>
              <select v-model="boxSelectInterests" class="form-control">
                <option v-for="option in interestsOptions" v-bind:value="option.value">
                  {{ option.text }}
                </option>
              </select>
            </form>
            <form v-if="category.name == 'Exotisch'" class="mb-4">
              <label>Kies werelddeel:</label>
              <select v-model="boxSelectExotic" class="form-control">
                <option v-for="option in exoticOptions" v-bind:value="option.value">
                  {{ option.text }}
                </option>
              </select>
            </form>
            <form v-if="category.name == 'Liefdadigheid'" class="mb-4">
              <label>Kies goed doel:</label>
              <select v-model="boxSelectCharity" class="form-control">
                <option v-for="option in charityOptions" v-bind:value="option.value">
                  {{ option.text }}
                </option>
              </select>
            </form>
            <form class="mb-4">
              <label>Kies geslacht:</label>
              <select v-model="boxSelectSex" class="form-control">
                <option v-for="option in sexOptions" v-bind:value="option.value">
                  {{ option.text }}
                </option>
              </select>
            </form>
            <form class="mb-4">
              <label>Kies leeftijd:</label>
              <select v-model="boxSelectAge" class="form-control">
                <option v-for="option in ageOptions" v-bind:value="option.value">
                  {{ option.text }}
                </option>
              </select>
            </form>
            <form>
              <div class="form-group">
                <label>Kies uw prijs:</label>
                <p>€ <span class="display-3">{{ price }}</span></p>
                <vueSlider v-model="price" ref="slider" :real-time="true" v-bind="options">
                </vueSlider>
              </div>
            </form>
            <router-link to="/checkout" data-dismiss="modal" @click.native="pushSelectOptions">
              <button class="btn btn-red">Nu kopen</button>
            </router-link>
            <button type="button" class="btn btn-blue" data-dismiss="modal" aria-label="Close">Annuleren</button>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import vueSlider from 'vue-slider-component';
import Card from "@/components/Card";

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
    pushSelectOptions: function() {
      this.$store.commit('updateBoxSelectChoice', this.boxSelectChoice);
      this.$store.commit('updateBoxSelectSex', this.boxSelectSex);
      this.$store.commit('updateBoxSelectAge', this.boxSelectAge);
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
        'tooltip': "none"
      },
      boxSelectInterests: 'Boeken',
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
      boxSelectExotic: 'Europa',
      exoticOptions: [
        { text: 'Europa', value: 'Europa' },
        { text: 'Noord-Amerika', value: 'Noord-Amerika' },
        { text: 'Zuid-Amerika', value: 'Zuid-Amerika' },
        { text: 'Azië', value: 'Azië' },
        { text: 'Afrika', value: 'Afrika' },
        { text: 'Australië', value: 'Australië' },
      ],
      boxSelectCharity: 'Artsen Zonder Grenzen',
      charityOptions: [
        { text: 'Artsen Zonder Grenzen', value: 'Artsen Zonder Grenzen' },
        { text: 'Kom Op Tegen Kanker', value: 'Kom Op Tegen Kanker' },
        { text: 'Child Focus', value: 'Child Focus' },
        { text: 'Greenpeace', value: 'Greenpeace' },
        { text: 'PETA', value: 'PETA' },
        { text: 'Unicef', value: 'Unicef' },
      ],
      boxSelectAge: 'Maakt niet uit',
      ageOptions: [
        { text: 'Maakt niet uit', value: 'Maakt niet uit' },
        { text: '-12', value: '-12' },
        { text: '12-18', value: '12-18' },
        { text: '18-25', value: '18-25' },
        { text: '25-35', value: '25-35' },
        { text: '35-55', value: '35-55' },
        { text: '55+', value: '55+' },
      ],
      boxSelectSex: 'Maakt niet uit',
      sexOptions: [
        { text: 'Maakt niet uit', value: 'Maakt niet uit' },
        { text: 'Man', value: 'Man' },
        { text: 'Vrouw', value: 'Vrouw' }
      ]
    }
  }
}
</script>