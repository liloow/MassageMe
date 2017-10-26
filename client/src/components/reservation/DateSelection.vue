<template>
	<div class="container">
		<div class="row">
			<h2>SUBTITLE</h2>
		</div>
		<div class="row">
			<div class="container">
				<date-picker @goToMasseuse="$emit('goToMasseuse',$event)"></date-picker>
			</div>
			<p>PLACEHOLDER</p>
		</div>
	</div>
</template>
<script>
import DatePicker from '@/components/reservation/DatePicker'
export default {

	name: 'DateSelection',

	data() {
		return {

		};
	},
	components: { DatePicker }
};

</script>
<style lang="css" scoped>


</style>
