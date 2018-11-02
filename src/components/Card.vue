<template>
  <div class="card shadow-sm justify-content-between">
    <div class="img-box">
      <img v-if="boxImg" class="card-img-top" :src="`/img/boxes/${boxImg}`" alt="Card image cap">
      <img v-else class="card-img-top" src="../assets/img/presentBox.png" alt="Card image cap">
    </div>
    <div class="card-body d-flex flex-column justify-content-between">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    boxImg: String,
  }
}
</script>

<style lang="scss" scoped>
</style>

