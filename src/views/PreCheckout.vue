<template>
	<div class="container">
		<div class="row">
			<div class="col-12">
				<h1 class="page-title"></h1>
			</div>
			<div class="col-4"></div>
			<div class="card shadow-sm p-3 col-4">
				<h2 class="pb-3">Inloggen</h2>
				<input type="text" name="name" placeholder="Naam" v-model="username" class="form-control mb-3">
				<input type="password" name="password" placeholder="Wachtwoord" v-model="password" class="form-control mb-3">
				<router-link to="/checkout" class="btn btn-red" @click.native="$store.commit('changeLogin', username)">Inloggen</router-link>
				<hr />
				<p>of</p>
				<router-link to="/checkout" class="btn btn-red">Doorgaan zonder inloggen</router-link>
			</div>
			<div class="col-4"></div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			username: '',
			password: '',
		}
	}
}
</script>