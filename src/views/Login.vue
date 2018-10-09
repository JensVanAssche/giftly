<template>
	<div class="login">
		<div class="row">
			<div class="col-3"></div>
			<div class="col-6">
				<h1>Inloggen met je Gifty account</h1>
				<div class="loginfields">
					<input type="text" name="name" placeholder="Naam" v-model="loginName">
					<input type="password" name="password" placeholder="Wachtwoord">
					<router-link to="/" class="btn btn-outline-success" @click.native="$store.commit('changeLogin', loginName)">Inloggen</router-link>
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
	}
}
</script>

<style lang="scss" scoped>
</style>