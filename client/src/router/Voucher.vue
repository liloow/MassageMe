<style lang="css" scoped>
img {
	width: 75%;
}

.column {
	display: flex;
	align-items: center
}

</style>
<template>
	<div class="container">
		<div class="container">
			<div class="row">
				<div>
					<h2>TITLE</h2>
				</div>
				<div>
					<h3>SUB</h3>
				</div>
			</div>
			<div class="row">
				<div class="columns">
					<div class="column">
						<img src="../assets/gift.jpeg" alt="Gift Image">
					</div>
					<voucher-form @goToConfirm="goToConfirm($event)" v-if="step.fillForm"></voucher-form>
					<voucher-confirm @goToPayment="goToPayment($event)" v-if="step.verifyInfo" :voucher="voucher"></voucher-confirm>
					<voucher-pay @processPayment="goToSuccess($event)" v-if="step.paymentMode" :voucher="voucher"></voucher-pay>
				</div>
			</div>
			<div class="row">
				<pre>{{voucher}}</pre>
			</div>
		</div>
	</div>
</template>
<script>
import VoucherForm from '@/components/reservation/voucher/VoucherForm'
import VoucherConfirm from '@/components/reservation/voucher/VoucherConfirm'
import VoucherPay from "@/components/reservation/voucher/VoucherPay"
export default {

	name: 'Voucher',

	data() {
		return {
			step: {
				fillForm: true,
				verifyInfo: false,
				paymentMode: false,
				successMessage: false,
			},
			voucher: null
		}
	},
	methods: {
		goToConfirm(voucher) {
			this.voucher = voucher
			this.step.fillForm = false
			this.step.verifyInfo = true
		},
		goToPayment(voucher) {
			this.step.verifyInfo = false
			this.paymentMode = true
		},
		goToSuccess(voucher) {
			this.paymentMode = false
			this.successMessage = true //TODO : HANDLE FAIL
		}
	},
	components: { VoucherForm, VoucherConfirm, VoucherPay }
}

</script>
