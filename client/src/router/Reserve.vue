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
			<date-selection v-if="step.dateSelection"></date-selection>
			<slot-selection v-if="step.slotSelection"></slot-selection>
			<masseuse-selection v-if="step.masseuseSelection"></masseuse-selection>
			<payment-mode v-if="step.paymentMode"></payment-mode>
			<confirmation-selection v-if="step.confirmationSelection"></confirmation-selection>
			<recap-info v-if="step.recapInfo"></recap-info>
		</div>
		<div class="row">
			<progress-bar></progress-bar>
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
				dateSelection: false,
				slotSelection: false,
				masseuseSelection: false,
				paymentMode: false,
				confirmationSelection: false,
				recapInfo: false,
			},
			data: {

			}
		};
	}
};

</script>
<style lang="css" scoped>


</style>
