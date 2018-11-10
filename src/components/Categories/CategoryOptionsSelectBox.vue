<template>
  <div class="mb-4">
    <label>{{ labelText }}:</label>
    <select :value="selection" @input="$emit('update:selection', $event.target.value)" class="form-control">
      <option disabled value="">Maak een keuze</option>
      <option v-for="(option, i) in options" :value="option.value" :key="`${name}-${i}`">
        {{ option.text }}
      </option>
    </select>
    <div v-if="error" class="text-danger">{{ error }}</div>
  </div>
</template>

<script>
export default {
  name: 'CategoryOptionsSelectBox',
  props: {
    name: String,
    options: Array,
    labelText: String,
    selection: String,
    error: String,
  },
}
</script>
