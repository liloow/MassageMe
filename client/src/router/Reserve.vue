<style lang="css" scoped>


</style>
<template>
	<div class="container">
		<div class="row" id="order-summary">
		</div>
		<div class="row">
			<div>
				<h2>TITLE</h2>
			</div>
			<div>
				<h3>SUB</h3>
			</div>
		</div>
		<div class="row">
			<date-selection @goToMasseuse="goToMasseuse($event)" v-if="step.dateSelection"></date-selection>
			<slot-selection v-if="step.slotSelection"></slot-selection>
			<masseuse-selection v-if="step.masseuseSelection" :event="data.event" @selectedMasseuse="goToPayment($event)"></masseuse-selection>
			<payment-mode v-if="step.paymentMode" :reservation="reservation"></payment-mode>
			<confirmation-selection v-if="step.confirmationSelection"></confirmation-selection>
			<recap-info v-if="step.recapInfo"></recap-info>
		</div>
		<div class="row">
			<progress-bar></progress-bar>
			<pre>{{reservation}}</pre>
		</div>
	</div>
</template>
<script>
import DateSelection from '@/components/reservation/DateSelection'
import SlotSelection from '@/components/reservation/SlotSelection'
import MasseuseSelection from '@/components/reservation/MasseuseSelection'
import PaymentMode from '@/components/reservation/PaymentMode'
import ConfirmationSelection from '@/components/reservation/ConfirmationSelection'
import RecapInfo from '@/components/reservation/RecapInfo'
import ProgressBar from '@/components/reservation/ProgressBar'
export default {

	name: 'Reserve',

	data() {
		return {
			step: {
				dateSelection: true,
				slotSelection: false,
				masseuseSelection: false,
				paymentMode: false,
				confirmationSelection: false,
				recapInfo: false,
			},
			data: {
				event: {}
			},
			reservation: {
				date: null,
				slot: null,
				masseuse: null,
			}
		}
	},
	methods: {
		goToMasseuse(event) {
			this.data.event = event
			this.step.dateSelection = false
			this.step.masseuseSelection = true
			this.reservation.date = event.date
			this.reservation.slot = event.slot
		},
		goToPayment(event) {
			this.step.masseuseSelection = false
			this.step.paymentMode = true
			this.reservation.masseuse = event._id
		}
	},
	components: { DateSelection, SlotSelection, MasseuseSelection, PaymentMode, ConfirmationSelection, RecapInfo, ProgressBar }
};

</script>
