<style lang="css" scoped>
.picto {
	display: flex;
	justify-content: space-around;
	flex-grow: 0;
	text-align: center;
	font-weight: bold;
	font-size: 0.9rem;
}

.padding-2 {
	margin: 3vh;
}



.raise:hover,
.raise:focus {
	box-shadow: 1 1.5em 1.5em -0.4em var(--hover);
	-webkit-transform: translateY(-0.25em);
	transform: translateY(-0.25em);
}

.pulse:hover,
.pulse:focus {
	-webkit-animation: pulse 1s;
	animation: pulse 1s;
	box-shadow: 0 0 0 3em rgba(255, 255, 255, 0);
}



@-webkit-keyframes pulse {
	0% {
		box-shadow: 0 0 0 0 var(--hover);
	}
}

@keyframes pulse {
	0% {
		box-shadow: 0 0 0 0 var(--hover);
	}
}

.pulse {
	--color: #FCA17D;
	--hover: #FFB27F;
}

.raise {
	--color: #FCA17D;
	--hover: #FFB27F;
}

button {
	color: var(--color);
	-webkit-transition: 0.25s;
	transition: 0.25s;
}

button:hover,
button:focus {
	border-color: var(--hover);
	color: #fff;

	-webkit-transition: all 0.1s;
	-moz-transition: all 0.1s;
	transition: all 0.1s;

	-webkit-box-shadow: 0px 6px 0px #d35400;
	-moz-box-shadow: 0px 6px 0px #d35400;
	box-shadow: 0px 6px 0px #d35400;
}

.reserve:active {
	-webkit-box-shadow: 0px 2px 0px #d35400;
	-moz-box-shadow: 0px 2px 0px #d35400;
	box-shadow: 0px 2px 0px #d35400;
	position: relative;
	top: 4px;
}

button.reserve {
	background-color: rgb(255, 0, 0, 0.5);
	line-height: 1;
	margin: 0vw;
	padding: 1vw 1vh;
	display: flex;
	font-size: 1.5rem;
	font-weight: bold;
	color: #f9f9f9;
	border-radius: 1vh;
	border: solid 1px #f39c12;
	background: rgba(230, 126, 34, 0.8);
	text-align: center;
}

.card {
	border-radius: 1vh;
}

button.reserve {
	background-color: rgb(255, 0, 0, 0.5);
	line-height: 1;
	margin: 0vh;
	padding: 1vh 2.5vw;
	font-size: 1rem;
	font-weight: bold;
	color: #f9f9f9;
	border-radius: 1vh;
	border: solid 1px #f39c12;
	background: rgba(230, 126, 34, 0.8);
	text-align: center;
	justify-content: center;
	align-items: center;
}

.autofix {
	margin: auto;
	flex-direction: column;
	text-align: center;
	overflow: hidden;
	display: flex;
}

.card-footer {
	margin-bottom: 2vh;
}

.card-top {
	height: auto;
}

</style>
<template>
	<div class="container">
		<div class="row">
			<h2 class="title is-2">Récapitulatif de votre commande</h2>
		</div>
		<div class="row">
			<div>
				<h2 class="title is-4">Vérifiez que les informations ci-dessous sont correctes</h2>
			</div>
			<div class="container card autofix" v-if="summary.massage && summary.masseuse ">
				<div class="card-body">
					<h3 class="title is-4">{{summary.massage.name}}</h3>
					<h4 class="title is-4">By {{summary.masseuse.name}}</h4>
					<p class="title is-6">Price : {{summary.massage.price}}</p>
					<p class="title is-6">Date de réservation : Le <strong>{{reservation.date}}</strong> à <strong>{{reservation.slot}}</strong></p>
				</div>
			</div>
		</div>
		<div class="autofix row">
			<stripe-checkout @valid="proceed" class="button reserve autofix"></stripe-checkout>
		</div>
		<!-- 		<div class="row">
	<pre>{{reservation}}</pre>
	<pre>{{summary}}</pre>
</div> -->
	</div>
</template>
<script>
import StripeCheckout from '@/components/reservation/stripe/StripeCheckout'
import { getMassage, getMasseuse } from '@/api/data'
import { appendToUserHistory } from '@/api/auth'
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
		proceed() {
			this.$root.order = this.reservation
			//appendToUserHistory(this.$root.user,this.reservation).then(r => r).catch(err)
		}
	},
	created() {
		getMassage(this.reservation.massage).then(massage => this.summary.massage = massage)
		getMasseuse(this.reservation.masseuse).then(masseuse => this.summary.masseuse = masseuse)
	},
	components: { StripeCheckout }
};

</script>
