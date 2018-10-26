<template>
	<div class="alertcontainer">
		
	
  <transition name="fade">
    <div v-if="$store.getters.showAlert" class="alert alert-dismissible fade show mt-2" role="alert" :class="[`alert-${$store.state.alert.type}`]">
      <button type="button" class="close" aria-label="Close" @click="$store.commit('hideAlert')">
        <span aria-hidden="true">&times;</span>
      </button>
      <h4 class="alert-heading">{{ $store.state.alert.header }}</h4>
      <p>{{ $store.state.alert.message }}</p>
    </div>
  </transition>
  </div>
</template>