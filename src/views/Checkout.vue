<template>
  <div>
    <h1>Choose price</h1>
    <!-- Image of the box you chose -->
    <!-- <img src="" alt=""> -->
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
import PayModal from "@/components/PayModal";
export default {
  components: {
    PayModal
  },
  data() {
    return {
      price: 70
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
