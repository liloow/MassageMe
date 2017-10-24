<template>
	<div class="container">
		<div class="row">
			<div>
				<h2>Voici nos différents types de massages</h2>
			</div>
			<div>
				<h3>Quel est le massage qui vous conviendra le mieux ?</h3>
			</div>
		</div>
		<div class="row">
			<div class="columns">
				<div class="column" v-for="masseuse in masseuses">
					<masseuse-card :masseuse="masseuse"></masseuse-card>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import { getMasseuses } from '@/api/data'
import MasseuseCard from '@/components/MasseuseCard'
export default {
	name: 'Masseuses',
	data() {
		return {
			masseuses: [],
		};
	},
	created() {
		getMasseuses().then(data => this.masseuses = data)
	},
	components: { MasseuseCard }
};

</script>
<style lang="css" scoped>


</style>
