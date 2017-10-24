<template>
	<nav class="navbar is-warning">
		<div class="navbar-brand">
			<a class="navbar-item" href="/">
				<img src="../assets/logo.png" alt="MassageMe">
			</a>
		</div>
		<div id="navMenuYellow" class="navbar-menu">
			<div class="navbar-start">
				<div class="navbar-item">
					<a class="navbar-item  is-active" href="/">
          Home
        	</a>
					<div class="navbar is-warning">
						<a class="navbar-item " href="/massages">
			            Massages
			         </a>
						<a class="navbar-item " href="/business">
			            Massages en entreprise
			         </a>
						<a class="navbar-item " href="/masseuses">
			            Praticiens
			         </a>
						<a class="navbar-item " href="/vouchers">
			            Bon Cadeau
			         </a>
						<a class="navbar-item " href="/price">
			            Tarifs
			         </a>
						<a class="navbar-item " href="/contact">
			            Contact
			         </a>
					</div>
				</div>
			</div>
			<a v-if="!$root.user" class="navbar-item " href="/login">
			       		Login
			   		</a>
			<a v-if="!$root.user" class="navbar-item " href="/signup">
			   	    	Signup
			     		</a>
			<a v-else @click.prevent="logout" class="navbar-item " href="/logout">
			        		Logout
			     		</a>
		</div>
		<div class="navbar-item">
			<a class="bd-fb-button button" data-social-network="Facebook" data-social-action="fb" data-social-target="https://www.massageme.be" target="_blank" href="https://www.facebook.com/MassageMe-728496217299957/">
				<icon name="facebook"></icon>
				<span>
  </span>
			</a>
			</p>
		</div>
		</div>
	</nav>
</template>
<script>
export default {
	name: 'NavBar',
	data() {
		return {
			isLoggedIn: false
		}
	},
	methods: {
		logout() {
			logout(this.$root)
		}
	}
}

</script>
