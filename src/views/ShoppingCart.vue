<template>
  <div class="container">
    <h1 class="page-title">Winkelwagen</h1>
    <div class="row justify-content-around">
      <transition-group name="rotateDownRight" tag="div" class="row justify-content-around">
        <div v-for="(item, i) in shoppingCart" :key="i" class="col-12 col-md-6 col-lg-4 col-xl-3 mt-2">
          <Card :key="i" :boxImg="$store.state.data.categories[item.type].img" class="card">
            <h5 class="card-title">{{ $store.state.data.categories[item.type].name }}<span v-if="item.option">: {{ item.option }}</span></h5>
            <p>€ {{ item.price }}</p>
          </Card>
        </div>
      </transition-group>
      <div class="col-2"></div>
      <div v-if="shoppingCart.length > 0" class="col-8 d-flex justify-content-around mt-4">
        <button class="btn btn-warning btn-lg px-4" @click="clear()">
          Maak de winkelwagen leeg
        </button>
        <button class="btn btn-red btn-lg px-4" @click="pay()">
          Ga verder naar betalen
        </button>
      </div>
      <div class="col-2"></div>
    </div>
  </div>
</template>

<script>
import Card from "@/components/Card";
import { mapState, mapMutations } from "vuex";

export default {
  name: 'ShoppingCart',
  components: {
    Card
  },
  computed: {
    ...mapState([
        'shoppingCart'
      ])
  },
  methods: {
    ...mapMutations([
      'clearCart', 
      'showAlert'
    ]),
    clear() {
      this.clearCart();
      this.showAlert(
        { type: 'success',  message: 'Alle producten zijn uit de winkelwagen verwijderd.'
        }
      )
    },
    pay() {
      this.$router.push(this.$store.getters.precheckoutOrCheckout);
    }
  }
}
</script>
