<template>
  <div class="modal fade right" :id="`checkoutModal${i}`" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" ref="checkoutModal">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-body">
          <div class="d-flex justify-content-end">
            <p class="close" data-dismiss="modal">&times;</p>
          </div>
          <template v-if="$store.state.currentBox.type">
            <!-- Box Category Image Card -->
            <Card 
              :name="$store.state.data.categories[currentBox.type].name" :info="$store.state.data.categories[currentBox.type].info" :boxImg="$store.state.data.categories[currentBox.type].img"
            >
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
              :selection.sync="currentBox.option"
              :error="optionsError"
            />
            <!-- Gets the sex options -->
            <category-options-select-box 
              name="sex"
              :options="this.$store.state.data.categoryDefaultOptions.sex"
              labelText="Kies geslacht"
              :selection.sync="currentBox.sex"
            />
            <!-- Gets the age options -->
            <category-options-select-box 
              name="age"
              :options="this.$store.state.data.categoryDefaultOptions.age"
              labelText="Kies leeftijd"
              :selection.sync="currentBox.age"
            />
            <!-- Price Slider -->
            <div class="pb-4">
              <div class="form-group">
                <label>Kies uw prijs:</label>
                <p>€ <span class="display-3">{{ price }}</span></p>
                <vueSlider v-model="price" ref="slider" :real-time="true" v-bind="options">
                </vueSlider>
              </div>
            </div>
            <!-- Checkout Buttons -->
            <div class="row">
              <div class="col">
                <button type="button" class="btn btn-red mt-2" @click="pay">Nu kopen</button>
              </div>
              <div class="col">
                <button type="button" class="btn btn-red mt-2" @click="addToCart">Toevoegen aan winkelmandje</button>
              </div>
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import vueSlider from 'vue-slider-component'
import Card from '@/components/Card'
import CategoryOptionsSelectBox from '@/components/Categories/CategoryOptionsSelectBox'
import { mapMutations } from 'vuex'

export default {
  props: {
    category: Object,
    i: Number,
  },
  components: {
    Card,
    CategoryOptionsSelectBox,
    vueSlider,
  },
  data() {
    return {
      options: {
        height: 12,
        dotSize: 25,
        min: 10,
        max: 100,
        interval: 5,
        tooltip: 'none',
        processStyle: {
          backgroundColor: '#ff5964',
        },
      },
      optionsError: '',
    }
  },
  computed: {
    price: {
      get() {
        return this.$store.state.price
      },
      set(value) {
        this.$store.commit('updatePrice', value)
      },
    },
    currentBox() {
      return this.$store.state.currentBox
    },
  },
  methods: {
    ...mapMutations(['showAlert', 'clearCurrentBox']),
    closeModal() {
      $(this.$refs.checkoutModal).modal('hide')
    },
    checkOption() {
      if (this.category.options) {
        if (!this.currentBox.option) {
          this.optionsError =
            'Je moet een specifieke optie kiezen om verder te gaan.'
          return false
        }
        return true
      }
      return true
    },
    addToCart() {
      if (this.checkOption()) {
        const box = {
          price: this.price,
          type: this.currentBox.type,
          option: this.currentBox.option,
        }
        this.clearCurrentBox()
        this.$store.commit('addToCart', box)
        this.showAlert({
          type: 'success',
          header: '',
          message: 'Het item is toegevoegd aan je winkelmandje.',
        })
        this.closeModal()
        return true
      } else return false
    },
    pay() {
      if (this.addToCart()) {
        this.$router.push(this.$store.getters.precheckoutOrCheckout)
      }
    },
  },
}
</script>
