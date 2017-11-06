<style lang="css" scoped>
h2 {
	border-bottom: 1px solid black;
	padding-bottom: 1vh;
	margin: 2vh;
}

h3 {
	margin: 2vh;
}

</style>
<template>
	<section>
		<div class="row">
			<div>
				<h2 class="title is-3">Choisissez votre massage</h2>
			</div>
			<div>
				<h3 class="title is-5">Cliquez sur le nom du massage pour plus d'info !</h3>
			</div>
		</div>
		<div class="container">
			<div class="row">
				<massage-card @goToDate="$emit('goToDate',$event)"></massage-card>
			</div>
		</div>
	</section>
</template>
<script>
import MassageCard from '@/components/MassageCard'
export default {

	name: 'MassageSelection',

	data() {
		return {

		};
	},
	components: { MassageCard }
};

</script>
