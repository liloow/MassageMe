<style lang="css" scoped>
.column {
	max-width: 33%;
}

</style>
<template>
	<div class="container">
		<div class="row">
			<h2>Choisissez votre masseur</h2>
		</div>
		<div class="row">
			<div class="columns">
				<masseuse-card v-for="masseuse in event.masseuse" :key="masseuse._id._id" :masseuse="masseuse._id" v-if="!masseuse.isbooked" @selectedMasseuse="$emit('selectedMasseuse',$event)"></masseuse-card>
			</div>
		</div>
	</div>
</template>
<script>
import MasseuseCard from '@/components/MasseuseCard'
export default {

	name: 'MasseuseSelection',

	data() {
		return {

		};
	},
	props: {
		event: Object
	},
	components: { MasseuseCard }
};

</script>
