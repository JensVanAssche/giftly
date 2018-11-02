<template>
  <div v-if="this.$store.getters.getCategoryOptions(categoryName)" class="mb-4">
    <label>Kies {{ labelText }}:</label>
    <select :value="selection" @input="$emit('update:selection', $event.target.value)" class="form-control">
      <option v-for="(option, i) in this.$store.getters.getCategoryOptions(categoryName)" v-bind:value="option.value" :key="`${categoryName}-${i}`">
        {{ option.text }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'CategoryOptionsSelectBox',
  props: {
    categoryName: String,
    labelText: String,
    selection: String,
  }
}
</script>
