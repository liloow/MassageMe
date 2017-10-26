<template>
	<div class="container">
		<div class="row">
			<h2>SUBTITLE</h2>
		</div>
		<div class="row">
			<div>
				<h2>Récapitulatif de votre commande</h2>
			</div>
			<div class="container" v-if="summary.massage && summary.masseuse ">
				<h3>{{summary.massage.name}}</h3>
				<h4>By {{summary.masseuse.name}}</h4>
				<p>Price : {{summary.massage.price}}</p>
				<p>Date de réservation : Le <strong>{{reservation.date}}</strong> à <strong>{{reservation.slot}}</strong></p>
			</div>
		</div>
		<div class="row">
			<form @submit.prevent="proceed(reservation)">
				<stripe-checkout stripe-key="pk_test_hRfWeiE7MuT5fINhdlIWyh9n" product="reservation">
				</stripe-checkout>
			</form>
		</div>
		<div class="row">
			<stripe-card></stripe-card>
		</div>
		<div class="row">
			<pre>{{reservation}}</pre>
			<pre>{{summary}}</pre>
		</div>
	</div>
</template>
<script>
import { StripeCheckout } from 'vue-stripe'
import StripeCard from '@/components/reservation/stripe/StripeCard'
import { getMassage, getMasseuse } from '@/api/data'
export default {

	name: 'PaymentMode',

	data() {
		return {
			summary: {
				massage: null,
				masseuse: null,
			}
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
	created() {
		getMassage(this.reservation.massage).then(massage => this.summary.massage = massage)
		getMasseuse(this.reservation.masseuse).then(masseuse => this.summary.masseuse = masseuse)
	},
	components: { 'stripe-checkout': StripeCheckout, StripeCard }
};

</script>
<style lang="css" scoped>


</style>
