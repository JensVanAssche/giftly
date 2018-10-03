<template>
	<div class="login">
		<div class="row">
			<div class="col-3"></div>
			<div class="col-6">
				<h2>Login with your Giftly account</h2>
				<div class="loginfields">
					<input type="text" name="name" placeholder="Naam" v-model="loginName">
					<input type="password" name="password" placeholder="Wachtwoord">
					<router-link to="/" class="btn btn-outline-success" @click.native="$store.commit('changeLogin', loginName)">Login</router-link>
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
.login {
  h2 {
    margin-bottom: 40px;
  }
  .loginfields {
    border: 1px #aaa solid;
    border-radius: 5px;
    padding: 20px;

    input {
      padding: 5px 10px;
      border-radius: 5px;
      border: 1px #aaa solid;
      width: 100%;
      margin-bottom: 20px;
    }
  }
}
</style>