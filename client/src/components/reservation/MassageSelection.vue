<style lang="css" scoped>


</style>
<template>
	<div class="container">
		<div class="row">
			<massage-card @goToDate="$emit('goToDate',$event)"></massage-card>
		</div>
	</div>
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
