<style type="text/css" scoped>
.swiper-container {
	width: 75%;
	height: 80%%;
}

.swiper-slide {
	text-align: center;
	font-size: 18px;
	background: #fff;
	/* Center slide text vertically */
	display: -webkit-box;
	display: -ms-flexbox;
	display: -webkit-flex;
	display: flex;
	-webkit-box-pack: center;
	-ms-flex-pack: center;
	-webkit-justify-content: center;
	justify-content: center;
	-webkit-box-align: center;
	-ms-flex-align: center;
	-webkit-align-items: center;
	align-items: center;
}

.blackband {
	heigth: 10vh;
}

section {
	background-color: black;
}

</style>
<template>
	<section>
		<div class="blackband"></div>
		<div class="swiper-container">
			<div class="swiper-wrapper">
				<div class="swiper-slide"><img src="../../assets/img/large/story1.jpg" alt=""></div>
				<div class="swiper-slide"><img src="../../assets/img/large/story2.jpg" alt=""></div>
				<div class="swiper-slide"><img src="../../assets/img/large/story3.jpg" alt=""></div>
				<div class="swiper-slide"><img src="../../assets/img/large/story4.jpg" alt=""></div>
				<div class="swiper-slide"><img src="../../assets/img/large/story5.jpg" alt=""></div>
			</div>
			<!-- Add Arrows -->
			<div class="swiper-button-next"></div>
			<div class="swiper-button-prev"></div>
		</div>
		<div class="blackband"></div>
	</section>
</template>
<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {

	name: 'CarouselRow',

	data() {
		return {
			swiperOption: {
				pagination: '.swiper-pagination',
				direction: 'vertical',
				slidesPerView: 1,
				paginationClickable: true,
				spaceBetween: 30,
				mousewheelControl: true
			}
		}
	},
	components: {
		swiper,
		swiperSlide
	},
	mounted() {
		var swiper = new Swiper('.swiper-container', {
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},
		});
	}
}

</script>
