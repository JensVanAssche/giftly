<template>
  <button 
    class="btn btn-pink btn-icon btn-icon-top-right" 
    @click="$store.commit('deleteFromCart', uuid)"
  >
    <i class="fas fa-times fa-lg"></i>
  </button>
</template>

<script>
export default {
  name: 'CartDeleteButton',
  props: {
    uuid: {
      type: String,
      required: true,
    },
  },
}
</script>
