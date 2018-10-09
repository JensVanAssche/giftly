<template>
  <div class="faq container">
    <h1 class="page-title">Veelgestelde vragen</h1>
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
        question: 'Waar zijn de vragen?',
        answer: 'Ze komen eraan na onze user testing!'
      }
    ]
    }
  }
}
</script>

<style lang="scss" scoped>
</style>