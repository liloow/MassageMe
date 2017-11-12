<style lang="css" scoped>
.picto {
	display: flex;
	justify-content: space-around;
	flex-grow: 0;
	text-align: center;
	font-weight: bold;
	font-size: 0.9rem;
}

.margin-2 {
	margin: 2vh;
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
	background: var(--mm);
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
	font-size: 1rem;
	font-weight: bold;
	color: #f9f9f9;
	border-radius: 1vh;
	border: solid 1px #f39c12;
	background: var(--mm);
	text-align: center;
	justify-content: center;
	align-items: center;
}

.title {
	color: var(--mm);
}

.autofix {
	margin: auto;
	width: 100%;
}

.card-footer {
	margin-bottom: 2vh;
}

.title {
	margin-top: -2vh;
	margin-bottom: 1vh
}

.grid {
	display: grid;
	justify-content: center;
	align-content: cente
}

.circle {
	border-radius: 100%;
	overflow: hidden;
	border: solid 3px var(--mm);
}

</style>
<template>
	<div class="column">
		<div class="card grid">
			<div class="card-image margin-2 circle">
				<img class=" autofix" :src="masseuse.avatar" alt="Placeholder image">
			</div>
			<div class="card-content">
				<div class="media">
					<div class="grid media-content">
						<div class="">
							<button v-if="$route.path==='/reserve'" class="reserve autofix raise pulse" @click="$emit('selectedMasseuse',masseuse)">{{masseuse.name}}</button>
							<h2 v-else class="title is-3 autofix">{{masseuse.name}}</h2>
						</div>
					</div>
				</div>
				<div class="content">
					<p>{{masseuse.bio}}</p>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
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
