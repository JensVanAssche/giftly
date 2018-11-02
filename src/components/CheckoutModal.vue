<template>
  <div class="modal fade right" :id="`checkoutModal${i}`" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        </div>
        <div class="modal-body">
          <template v-if="$store.state.currentBox.type">
            <Card :name="$store.state.data.categories[currentBox.type].name" :info="$store.state.data.categories[currentBox.type].info" :boxImg="$store.state.data.categories[currentBox.type].img">
              <div class="d-flex justify-content-between">
                <h3 class="card-title">{{ category.name }}</h3>
              </div>
              <p class="card-text">{{ category.info }}</p>
            </Card>
            <p class="pb-3">Geschatte levertijd: {{ category.deliveryTime }}</p>

            <!-- Gets the category specific options -->
            <category-options-select-box 
            v-if="this.currentBox.type && $store.state.data.categories[currentBox.type].options" 
            name="options"
            :options="$store.state.data.categories[currentBox.type].options"
            :labelText="$store.state.data.categories[currentBox.type].optionsText"
            :selection.sync="currentBox.option"></category-options-select-box>

            <!-- Gets the sex options -->
            <category-options-select-box 
            name="sex"
            :options="this.$store.state.data.categoryDefaultOptions.sex"
            labelText="Kies geslacht"
            :selection.sync="currentBox.sex"></category-options-select-box>
            
            <!-- Gets the age options -->
            <category-options-select-box 
            name="age"
            :options="this.$store.state.data.categoryDefaultOptions.age"
            labelText="Kies leeftijd"
            :selection.sync="currentBox.age"></category-options-select-box>
        
            <div class="pb-4">
              <div class="form-group">
                <label>Kies uw prijs:</label>
                <p>€ <span class="display-3">{{ price }}</span></p>
                <vueSlider v-model="price" ref="slider" :real-time="true" v-bind="options">
                </vueSlider>
              </div>
            </div>
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
import CategoryOptionsSelectBox from "@/components/Categories/CategoryOptionsSelectBox";
import { mapMutations } from "vuex";

export default {
  props: {
    category: Object,
    i: Number
  },
  components: {
    Card,
    CategoryOptionsSelectBox,
    vueSlider,
  },
  computed: {
    price: {
      get () {
        return this.$store.state.price
      },
      set (value) {
        this.$store.commit('updatePrice', value)
      },
    },
    currentBox() {
      return this.$store.state.currentBox;
    },
  },
  methods: {
    ...mapMutations([
      'showAlert',
      'clearCurrentBox',
    ]),
    addToCart() {
      const box = {
        price: this.price,
        type: this.currentBox.type,
        option: this.currentBox.option,
      };
      this.clearCurrentBox();
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
    }
  }
}
</script>
