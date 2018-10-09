<template>
  <transition name="fade">
    <div v-if="$store.getters.showAlert" class="alert alert-dismissible fade show mt-2" role="alert" :class="[`alert-${$store.state.alert.type}`]">
      <button type="button" class="close" aria-label="Close" @click="$store.commit('hideAlert')">
        <span aria-hidden="true">&times;</span>
      </button>
      <h4 class="alert-heading">{{ $store.state.alert.header }}</h4>
      <p>{{ $store.state.alert.message }}</p>
    </div>
  </transition>
</template>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
