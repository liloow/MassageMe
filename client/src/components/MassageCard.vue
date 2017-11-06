<style lang="css" scoped>
.picto {
	display: flex;
	justify-content: space-around;
	flex-grow: 0;
	text-align: center;
	font-weight: bold;
	font-size: 0.9rem;
}

.padding-2 {
	margin: 3vh;
}



.raise:hover,
.raise:focus {
	box-shadow: 1 1.5em 1.5em -0.4em var(--hover);
	-webkit-transform: translateY(-0.25em);
	transform: translateY(-0.25em);
}

.pulse:hover,
.pulse:focus {
	-webkit-animation: pulse 1s;
	animation: pulse 1s;
	box-shadow: 0 0 0 3em rgba(255, 255, 255, 0);
}



@-webkit-keyframes pulse {
	0% {
		box-shadow: 0 0 0 0 var(--hover);
	}
}

@keyframes pulse {
	0% {
		box-shadow: 0 0 0 0 var(--hover);
	}
}

.pulse {
	--color: #FCA17D;
	--hover: #FFB27F;
}

.raise {
	--color: #FCA17D;
	--hover: #FFB27F;
}

button {
	color: var(--color);
	-webkit-transition: 0.25s;
	transition: 0.25s;
}

button:hover,
button:focus {
	border-color: var(--hover);
	color: #fff;

	-webkit-transition: all 0.1s;
	-moz-transition: all 0.1s;
	transition: all 0.1s;

	-webkit-box-shadow: 0px 6px 0px #d35400;
	-moz-box-shadow: 0px 6px 0px #d35400;
	box-shadow: 0px 6px 0px #d35400;
}

.reserve:active {
	-webkit-box-shadow: 0px 2px 0px #d35400;
	-moz-box-shadow: 0px 2px 0px #d35400;
	box-shadow: 0px 2px 0px #d35400;
	position: relative;
	top: 4px;
}

button.reserve {
	background-color: rgb(255, 0, 0, 0.5);
	line-height: 1;
	margin: 0vw;
	padding: 1vw 1vh;
	display: flex;
	font-size: 1.5rem;
	font-weight: bold;
	color: #f9f9f9;
	border-radius: 1vh;
	border: solid 1px #f39c12;
	background: rgba(230, 126, 34, 0.8);
	text-align: center;
}

.card {
	border-radius: 1vh;
}

button.reserve {
	background-color: rgb(255, 0, 0, 0.5);
	line-height: 1;
	margin: 0vh;
	padding: 1vh 2.5vw;
	display: flex;
	font-size: 1rem;
	font-weight: bold;
	color: #f9f9f9;
	border-radius: 1vh;
	border: solid 1px #f39c12;
	background: rgba(230, 126, 34, 0.8);
	text-align: center;
	justify-content: center;
	align-items: flex-end;
}

.autofix {
	margin: auto;
	justify-content: center;
	flex-direction: column;
	text-align: center;
	overflow: hidden;
}

.card-footer {
	margin-bottom: 2vh;
}

.card-top {
	height: auto;
}

</style>
<template>
	<div class="container">
		<div class="row">
			<div class="columns">
				<div class="column is-3-on-desktop is-2-on-tablet is-1-on-mobile" v-for="massage in massages">
					<div class="card is-centered">
						<div class="card-top">
							<div class="card-image is-centered">
								<figure class="autofix">
									<img :src="massage.picture" alt="Placeholder image">
								</figure>
							</div>
							<div class="card-content is-centered ">
								<div class="media">
									<div class="media-content autofix">
										<p class="title is-4">{{massage.name}}</p>
									</div>
								</div>
								<div class="content is-centered autofix">
									{{massage.description.split('.').slice(0,2).join('.')}}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="columns">
					<div v-if="$route.path==='/reserve'" class="card-footer column autofix center" v-for="massage in massages">
						<button class="reserve autofix pulse" @click="selectMassage(massage._id)">I want this massage</button>
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
