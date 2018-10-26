<template>
	<div class="login container">
		<div class="row">
			<div class="col-md-2"></div>
			<div class="col-md-8">
				<h1 class="page-title">Inloggen met je Giftly account</h1>
				<div class="card p-3 shadow-sm">
					<input type="text" name="name" placeholder="Naam" v-model="loginName" class="form-control mb-3">
					<input type="password" name="password" placeholder="Wachtwoord" class="form-control mb-3">
					<button v-if="!loginName" class="btn btn-red" @click="showAlert">Inloggen</button>
					<router-link v-else to="/" class="btn btn-red" @click.native="$store.commit('changeLogin', loginName)">Inloggen</router-link>
				</div>
			</div>
			<div class="col-md-2"></div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			loginName: '',
		}
	},
	methods: {
    showAlert () {
      this.$store.commit('showAlert', { type: 'danger', message: 'Gelieve een naam in te vullen.' })
    }
  }
}
</script>

<style lang="scss" scoped>
</style>