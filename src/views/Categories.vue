<template>
  <div class="categories container">
    <h1 class="page-title pb-4">Categorieën</h1>
    <div class="row justify-content-around">
      <div v-for="(category, i) in this.$store.state.data.categories" :key="i" class="col-12 col-md-6">
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
}
</script>

<style lang="scss" scoped>
.card {
  min-height: 400px;
}
</style>
