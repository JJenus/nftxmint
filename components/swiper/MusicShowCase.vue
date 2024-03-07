<script setup>
	const studio = useCollections().music;
</script>

<template>
	<div v-if="studio.length > 0">
		<h1 class="fs-1 mb-2">Music NFTs</h1>
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
				v-for="(music, index) in studio"
				:key="index"
			>
				<NftCollection :collection="music" />
			</SwiperSlide>
		</Swiper>
	</div>
</template>

<style scoped></style>
