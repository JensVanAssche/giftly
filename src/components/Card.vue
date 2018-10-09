<template>
  <div class="card shadow-sm">
    <img class="card-img-top" src="https://davpack.s3.amazonaws.com/h/alt/l/double-wall-boxes_3.jpg" alt="Card image cap">
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
