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
	font-size: 1rem;
	font-weight: bold;
	color: #f9f9f9;
	border-radius: 1vh;
	border: solid 1px #f39c12;
	background: rgba(230, 126, 34, 0.8);
	text-align: center;
	justify-content: center;
	align-items: center;
}

.autofix {
	margin: auto;
	text-align: center;
	display: flex;
	flex-flow: row;
}

.card-footer {
	margin-bottom: 2vh;
}

.card-top {
	height: auto;
}

.column,
.columns {
	display: inline-block;
	max-width: 90vw;
	margin: auto;
}

.auto {
	margin: auto;
	display: grid;
}

</style>
<template>
	<section>
		<div class="container-fluid">
			<div class="row">
				<div>
					<h2 class="title is-3">Voici notre équipe de praticiens formés</h2>
				</div>
				<div>
					<h3 class="title is-4">Quel est le massage qui vous conviendra le mieux ?</h3>
				</div>
			</div>
			<div class="row auto">
				<div class="columns margin-2">
					<div class="column margin-2 is-12-mobile is-half-tablet is-one-third-desktop is-one-third-widescreen is-one-quarter-fullhd" v-for="masseuse in masseuses">
						<masseuse-card :masseuse="masseuse"></masseuse-card>
					</div>
				</div>
			</div>
		</div>
	</section>
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
