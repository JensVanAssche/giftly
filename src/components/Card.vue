<template>
  <div class="card shadow-sm">
    <img v-if="name == 'Feestdag: Halloween Editie'" class="card-img-top" src="/img/box_halloween.png" alt="Card image cap">
    <img v-else class="card-img-top" src="/img/box.jpg" alt="Card image cap">
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

<style>
</style>
