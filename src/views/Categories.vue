<template>
  <div>
    <button v-for="(category, i) in categories" :key="i" class="btn btn-danger d-block m-3 px-5">
      {{ category.name }}
    </button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      categories: [
        {
          name: 'A'
        },
        {
          name: 'B'
        },
        {
          name: 'C'
        },
        {
          name: 'D'
        },
        {
          name: 'E'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
</style>

