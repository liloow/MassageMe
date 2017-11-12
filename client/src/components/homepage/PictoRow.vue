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
	padding: 2vh 5vw;
	display: flex;
	font-size: 1.5rem;
	font-weight: bold;
	color: #f9f9f9;
	border-radius: 1vh;
	border: solid 1px #f39c12;
	background: var(--mm);
	text-align: center;
}

</style>
<template>
	<section class="hero is-small is-white">
		<div class="hero-body padding-2">
			<div class="columns is-centered picto">
				<div class="column is-3">
					<img src="../../assets/img/picto/step1.png" alt="">
					<h3 class="title is-3">Détente</h3>
					<div class="content">
						Une envie de détente, de décompresser sans bouger de chez soi ? Une solution : Massage-Me !
					</div>
				</div>
				<div class="column is-3">
					<img src="../../assets/img/picto/step2.png" alt="">
					<h3 class="title is-3">Mobilité</h3>
					<div class="content">
						Quelques clics suffisent pour réserver une séance avec l'un de nos praticien. Pas d'espace ? Notre masseur vient directement avec sa propre table !</div>
				</div>
				<div class="column is-3">
					<img src="../../assets/img/picto/step3.png" alt="">
					<h3 class="title is-3">Massage-Me</h3>
					<div class="content">
						Vous n'avez plus qu'a vous détendre et profiter de votre séance en toute quiétude. Jamais se détendre n'a été aussi facile </div>
				</div>
			</div>
			<div class="columns is-half is-centered no-gap">
				<div class="column picto">
					<router-link to="/reserve">
						<button class=" reserve pulse raise up">RESERVER MAINTENANT</button>
					</router-link>
				</div>
			</div>
		</div>
	</section>
</template>
<script>
export default {

	name: 'PictoRow',

	data() {
		return {

		}
	}
}

</script>
