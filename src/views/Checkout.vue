<template>
  <div>
    <h1>Choose price</h1>
    <!-- Image of the box you chose -->
    <Card :name="$store.state.currentBox.name" :info="$store.state.currentBox.info" class="col-3"></Card>
    <form>
      <div class="form-group">
        <label class="display-2">€ {{ price }}</label>
        <input type="range" class="form-control-range" id="formControlRange" v-model="price">
      </div>
    </form>
    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">Buy</button>
    <PayModal />
  </div>
</template>

<script>
import Card from "@/components/Card";
import PayModal from "@/components/PayModal";

export default {
  components: {
    PayModal,
    Card
  },
  computed: {
    price: {
      get () {
        return this.$store.state.price
      },
      set (value) {
        this.$store.commit('updatePrice', value)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
