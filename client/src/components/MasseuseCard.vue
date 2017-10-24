<template>
	<div class="column">
		<div class="card">
			<div class="card-image">
				<figure>
					<img :src="'/static'+masseuse.avatar" alt="Placeholder image">
				</figure>
			</div>
			<div class="card-content">
				<div class="media">
					<div class="media-content">
						<p class="title is-4">{{masseuse.name}}</p>
					</div>
				</div>
				<div class="content">
					{{masseuse.bio}}
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import { getMasseuses } from '@/api/data'
export default {
	name: 'MasseuseCard',
	data() {
		return {};
	},
	props: {
		masseuse: Object
	}
};

</script>
<style lang="css" scoped>


</style>
