<script setup>
	const games = useCollections().gaming;
</script>

<template>
	<div v-if="games.length > 0">
		<h1 class="fs-1 mb-2">Gaming NFTs</h1>
		<Swiper
			:modules="[SwiperAutoplay]"
			:space-between="10"
			:breakpoints="{
				// when window width is >= 480px
				640: {
					slidesPerView: 2,
				},
				768: {
					slidesPerView: 4,
				},
				// when window width is >= 640px
				992: {
					slidesPerView: 5,
				},
			}"
			:loop="true"
			:autoplay="{
				delay: 8000,
				disableOnInteraction: true,
			}"
		>
			<SwiperSlide
				class="py-5 h-100"
				v-for="(game, index) in games"
				:key="index"
			>
				<NftCollection :collection="game" />
			</SwiperSlide>
		</Swiper>
	</div>
</template>

<style scoped></style>
