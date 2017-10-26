<template>
	<div class="container">
		<div class="row">
			<h2>SUBTITLE</h2>
		</div>
		<div class="row">
			<form @submit.prevent="proceed(reservation)">
				<stripe-checkout stripe-key="pk_test_hRfWeiE7MuT5fINhdlIWyh9n" product="reservation">
				</stripe-checkout>
			</form>
		</div>
	</div>
</template>
<script>
import { StripeCheckout } from 'vue-stripe'
export default {

	name: 'PaymentMode',

	data() {
		return {

		};
	},
	props: {
		reservation: Object
	},
	methods: {
		proceed(res) {
			processPayment(res).then(r => {
				console.log(r)
			})
		}
	},
	components: { 'stripe-checkout': StripeCheckout }
};

</script>
<style lang="css" scoped>


</style>
