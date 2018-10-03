<template>
  <div class="faq">
  <h1>faq hier pls</h1>
  <ul>
    <li v-for="(item, i) in faq" :key="i">
      <span class="d-block lead"> 
        {{ item.question }}
      </span>
      {{ item.answer }}
    </li>
  </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      faq: [
      {
        question: 'What is?',
        answer: 'is if.'
      }
    ]
    }
  }
}
</script>

<style lang="scss" scoped>
</style>