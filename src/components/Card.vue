<template>
  <div class="card" style="width: 18rem;">
    <img class="card-img-top" src="https://via.placeholder.com/180x100" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">{{ name }}</h5>
      <p class="card-text">{{ info }}</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
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
