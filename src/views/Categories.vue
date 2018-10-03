<template>
  <div class="row justify-content-around">
    <div v-for="(category, i) in categories" :key="i" class="col-3 m-3">
      <Card :name="category.name" :info="category.info"> 
        <router-link to="/checkout" class="btn btn-outline-danger" @click.native="$store.commit('changeBox', category)">
          Kies deze doos
        </router-link>
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
          name: 'B',
          info: 'Dit is een mooiere doos'
        },
        {
          name: 'C',
          info: 'Dit is een nog mooiere doos'
        },
        {
          name: 'D',          
          info: 'Dit is de mooiste doos'
        },
        {
          name: 'E',
          info: 'Dit is de allermooiste doos'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
</style>

