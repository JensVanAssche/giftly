<template>
  <div class="faq">
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
        question: 'huh',
        answer: 'yes'
      }
    ]
    }
  }
}
</script>

<style lang="scss" scoped>
</style>