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
    <div class="mt-4 d-flex justify-content-center">
      <router-link to="/categories" class="btn-red py-3 px-5 btn-lg">
        Ik weet genoeg, laat me een pakje kiezen!
      </router-link>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.List-Group {
  margin-bottom: 15px;
}
</style>