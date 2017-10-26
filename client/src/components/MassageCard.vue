<style lang="css" scoped>


</style>
<template>
	<div class="container">
		<div class="row">
			<div class="columns">
				<div class="column" v-for="massage in massages">
					<div class="card">
						<div class="card-image">
							<figure>
								<img :src="massage.picture" alt="Placeholder image">
							</figure>
						</div>
						<div class="card-content">
							<div class="media">
								<div class="media-content">
									<p class="title is-4">{{massage.name}}</p>
								</div>
							</div>
							<div class="content">
								{{massage.description}}
							</div>
							<div class="card-footer">
								<button @click="selectMassage(massage._id)">I want this massage</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import { getMassages } from '@/api/data'
export default {

	name: 'MassageCard',

	data() {
		return {
			massages: []
		};
	},
	methods: {
		selectMassage(id) {
			this.$emit('goToDate', id)
		}
	},
	created() {
		getMassages().then(massages => this.massages = massages)
	}

};

</script>
