<style lang="css" scoped>


</style>
<template>
	<div class="column">
		<form @submit.prevent="registerVoucher" accept-charset="utf-8">
			<label>Your name
				<input v-model="voucher.senderName">
			</label>
			<br>
			<label>Your E-mail
				<input v-model="voucher.senderEmail">
			</label>
			<br>
			<label>The gifted Name
				<input v-model="voucher.recipientName">
			</label>
			<br>
			<label>The sending method
				<select v-model="voucher.method" placeholder="Sélectionner le type de livraison">
					<option disabled>Sélectionner le type de livraison</option>
					<option value="1">Je souhaite le transmettre par email</option>
					<option value="2">Je souhaite recevoir un bon physique</option>
				</select>
			</label>
			<div v-if="voucher.method==='2'">
				<label>Addresse
					<br>
					<label>Nom :
						<input v-model="voucher.recipientAddress.name">
					</label>
					<br>
					<label>Adresse ligne 1 :
						<input v-model="voucher.recipientAddress.line1">
					</label>
					<br>
					<label>Adresse ligne 2 :
						<input v-model="voucher.recipientAddress.line2">
					</label>
					<br>
					<label>Code Postal :
						<input v-model="voucher.recipientAddress.postalCode">
					</label>
					<br>
					<label>Ville :
						<input v-model="voucher.recipientAddress.city">
					</label>
					<br>
				</label>
			</div>
			<div v-if="voucher.method==='1'">
				<label>Recipient email :
					<input type="email">
				</label>
			</div>
			<label>Your Message :
				<br>
				<textarea cols="50" row="5" v-model="voucher.message"></textarea>
			</label>
			<br>
			<button type="submit">Réserver</button>
		</form>
	</div>
</template>
<script>
export default {

	name: 'VoucherForm',

	data() {
		return {
			voucher: {
				senderName: this.$root.user.name || '',
				senderEmail: this.$root.user.email || '',
				recipientName: '',
				method: 'Sélectionner le type de livraison',
				recipientAddress: {
					name: this.$root.user.name || '',
					line1: '',
					line2: '',
					postalCode: '4000',
					city: 'Liège',

				},
				recipientEmail: '',
				message: ''
			}
		}
	},
	methods: {
		registerVoucher() {
			this.$emit('goToConfirm', this.voucher)
			return 'LOL'
		}
	}
};

</script>
