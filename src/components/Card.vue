<template>
  <div class="card shadow-sm justify-content-between">
    <img v-if="name == 'Feestdag: Halloween Editie'" class="card-img-top" src="/img/box_halloween.png" alt="Card image cap">
    <img v-else-if="boxImg" class="card-img-top py-2" :src="`/img/boxes/${boxImg}`" alt="Card image cap">
    <img v-else class="card-img-top p-1" src="../assets/img/presentBox.png" alt="Card image cap">
    <div class="card-body d-flex flex-column justify-content-between">
      <h5 class="card-title">{{ name }}</h5>
      <p class="card-text">{{ info }}</p>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    info: String,
    boxImg: String,
  }
}
</script>

<style lang="scss" scoped>
img {
  max-width: 150px;
  height: auto;
  margin: 0 auto;
}
</style>

