<template>
	<div class="container">
		<div class="row">
			<div class="col-12">
				<h1 class="page-title"></h1>
			</div>
			<div class="col-4"></div>
			<div class="card shadow-sm p-3 col-4">
				<h2 class="pb-3">Inloggen</h2>
				<input type="text" name="name" placeholder="Naam" v-model="loginName" class="form-control mb-3">
				<input type="password" name="password" placeholder="Wachtwoord" class="form-control mb-3">
				<router-link to="/checkout" class="btn btn-red" @click.native="$store.commit('changeLogin', loginName)">Inloggen</router-link>
				<hr />
				<p>of</p>
				<a href="/checkout" class="btn btn-red">Doorgaan zonder inloggen</a>
			</div>
			<div class="col-4"></div>
		</div>
	</div>
</template>

<script></script>