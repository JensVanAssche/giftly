<template>
	<div class="login">
		<div class="row">
			<div class="col-3"></div>
			<div class="col-6">
				<h1 class="page-title">Inloggen met je Gifty account</h1>
				<div class="loginfields">
					<input type="text" name="name" placeholder="Naam" v-model="loginName">
					<input type="password" name="password" placeholder="Wachtwoord">
					<button v-if="!loginName" class="btn btn-red" @click="showAlert">Inloggen</button>
					<router-link v-else to="/" class="btn btn-red" @click.native="$store.commit('changeLogin', loginName)">Inloggen</router-link>
				</div>
			</div>
			<div class="col-3"></div>
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