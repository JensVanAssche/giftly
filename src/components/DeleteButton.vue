<template>
  <button 
    class="btn btn-pink"
    :class="{
      'btn-icon': rounded,
      'btn-icon-top-right': topRight,
      }"
    @click="$emit('delete')"
  >
    <i class="fas fa-times fa-lg"></i>
  </button>
</template>

<script>
export default {
  name: 'DeleteButton',
  props: {
    rounded: Boolean,
    topRight: Boolean,
  },
}
</script>
