<template>
  <ul>
    <li v-for="(category, i) in categories" :key="i">
      {{ category.name }}
    </li>
  </ul>
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
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
</style>

