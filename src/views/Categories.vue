<template>
  <div class="row justify-content-around">
    <div v-for="(category, i) in categories" :key="i" class="col-3 m-3">
      <Card :name="category.name" :info="category.info"> 
        <router-link to="/checkout" class="btn btn-outline-danger" @click.native="$store.commit('changeBox', category.name)">Kies deze doos</router-link>
      </Card>
    </div>
  </div>
</template>

<script>
import Card from "@/components/Card";
export default {
  components: {
    Card
  },
  data () {
    return {
      categories: [
        {
          name: 'A',
          info: 'Dit is een mooie doos'
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

