<style lang="css" scoped>


</style>
<template>
	<section class="hero is-success is-fullheight">
		<div class="hero-body">
			<div class="container has-text-centered">
				<div class="column is-4 is-offset-4">
					<h3 class="title has-text-grey">Login</h3>
					<p class="subtitle has-text-grey">Please login to proceed.</p>
					<div class="box">
						<figure class="avatar">
							<img src="https://placehold.it/128x128">
						</figure>
						<form>
							<b-field label="Username">
								<b-input v-model="username" type="email"></b-input>
							</b-field>
							<b-field label="Password">
								<b-input type="password" v-model="password" password-reveal>
								</b-input>
							</b-field>
							<b-field label="Username">
								<b-checkbox v-model="saveLogin" type="checkbox"></b-checkbox>
							</b-field>
							<a class="button is-block is-info is-large">Login</a>
						</form>
					</div>
					<p class="has-text-grey">
						<a href="../">Sign Up</a> &nbsp;·&nbsp;
						<a href="../">Forgot Password</a> &nbsp;·&nbsp;
						<a href="../">Need Help?</a>
					</p>
				</div>
			</div>
		</div>
	</section>
</template>
<script>
import { login } from '@/api/auth'
export default {

	name: 'LoginHero',

	data() {
		return {
			username: "",
			password: "",
			saveLogin: false
		}
	},
	methods: {
		login() {
			login(this.username, this.password, this.$root).then(data => {
				this.$router.push('/')
			})
		}
	}
}

</script>
