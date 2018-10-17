<template>
  <div class="container">
    <h1 class="page-title">Shopping Cart</h1>
    <div class="row justify-content-around">
      <div v-for="(category, i) in shoppingCart" :key="i" class="col-12 col-md-6 col-lg-4 col-xl-3 mt-2">
        <Card :key="i" :name="category.name" :boxImg="category.img" :deliveryTime="category.deliveryTime" class="card">
        </Card>
      </div>
    </div>
  </div>
</template>

<script>
import Card from "@/components/Card";
import { mapState } from "vuex";

export default {
  name: 'ShoppingCart',
  components: {
    Card
  },
  computed: {
    ...mapState([
        'shoppingCart'
      ])
  }
}
</script>
