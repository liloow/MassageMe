<template>
	<div class="row">
		<div class="columns">
			<div class="column">
				<img src="../assets/logo-solo.png" alt="Logo">
			</div>
			<div class="column">
				<div class="row">+
					<p>
						N'hésitez pas à nous contacter pour toutes vos questions. Laissez-nous un message; nous y répondrons dans les plus brefs délais.
					</p>
					<p>
						Tel: 0498.82 39 31
						<br> E-mail: infos@massageme.be
						<br> N° compte: BE13 0018 0837 4939
					</p>
				</div>
				<div class="row">
					<div v-if="message">
						<p>{{}}</p>
					</div>
					<div>
						<form @submit.prevent="sendForm" accept-charset="utf-8">
							<br>
							<input v-model="form.name" placeholder="Enter your name">
							<br>
							<input v-model="form.lastName" placeholder="Enter your lastName">
							<br>
							<input v-model="form.email" placeholder="Enter your email">
							<br>
							<input v-model="form.tel" placeholder="Enter your tel">
							<br>
							<input v-model="form.subject" placeholder="Enter your subject">
							<br>
							<textarea v-model="form.message" placeholder="Enter your message"></textarea>
							<br>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
export default {

	name: 'Contact',

	data() {
		return {
			message: "",
			form: {
				name: "",
				lastName: "",
				email: "",
				tel: "",
				subject: "",
				message: "",
			}
		};
	},
	methods: {
		sendForm() {
			return this.message = 'TODO'
		}
	}
};

</script>
<style lang="css" scoped>


</style>
