<template>
  <div class="faq container">
    <h1 class="page-title">Veelgestelde vragen</h1>
    <ul>
      <li class='List-Group pb-4' v-for="(item, i) in this.$store.state.data.faq" :key="i">
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
  
}
</script>

<style lang="scss" scoped>
.List-Group {
  margin-bottom: 15px;
}
</style>