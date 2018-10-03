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
          name: 'Random',
          info: "For those that don't know what to get at all!"
        },
        {
          name: 'Interests',
          info: 'Know what they like? Get them one of these!'
        },
        {
          name: 'Exotic',
          info: 'Want to give them a piece of another country?'
        },
        {
          name: 'Charity',          
          info: 'For the person with the golden heart!'
        },
        {
          name: 'Local',
          info: 'Support local artisans with these handmade gifts!'
        },
        {
          name: 'Experience',          
          info: 'Have them experience adventure!'
        },
        {
          name: 'Holliday',
          info: 'No better way to spread holliday cheer!'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
</style>

