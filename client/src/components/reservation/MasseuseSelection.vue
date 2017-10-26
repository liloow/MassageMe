<style lang="css" scoped>
.column {
	max-width: 33%;
}

</style>
<template>
	<div class="container">
		<div class="row">
			<h2>SUBTITLE</h2>
		</div>
		<div class="row">
			<div class="columns">
				<masseuse-card v-for="masseuse in event.masseuse" :masseuse="masseuse._id" v-if="!masseuse.isbooked" @selectedMasseuse="$emit('selectedMasseuse',$event)">{{masseuse}}</masseuse-card>
			</div>
			<pre>{{event}}</pre>
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
