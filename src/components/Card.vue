<template>
  <div class="card shadow-sm justify-content-between">
    <div class="img-box">
      <!--<img v-if="name == 'Feestdag: Halloween Editie'" class="card-img-top" src="/img/box_halloween.png" alt="Card image cap">-->
      <img v-if="boxImg" class="card-img-top" :src="`/img/boxes/${boxImg}`" alt="Card image cap">
      <img v-else class="card-img-top" src="../assets/img/presentBox.png" alt="Card image cap">
    </div>
    <div class="card-body d-flex flex-column justify-content-between">
      <div>
        <h5 class="card-title">{{ name }}</h5>
        <p class="card-delivery">Levertijd: {{ deliveryTime }}</p>
        <p class="card-text">{{ info }}</p>
      </div>
      <div>
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    info: String,
    deliveryTime: String,
    boxImg: String,
  }
}
</script>

<style lang="scss" scoped>
</style>

