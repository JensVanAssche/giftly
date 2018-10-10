<template>
  <div class="card shadow-sm">
    <img v-if="name == 'Feestdag: Halloween Editie'" class="card-img-top" src="/img/box_halloween.png" alt="Card image cap">
    <img v-else class="card-img-top py-2" src="../assets/img/presentBox.png" alt="Card image cap">
    <div class="card-body">
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
    info: String
  }
}
</script>

<style lang="scss" scoped>
img {
  max-width: 250px;
  height: auto;
  margin: 0 auto;
}
</style>

