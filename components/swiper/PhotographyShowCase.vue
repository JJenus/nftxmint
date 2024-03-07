<script setup>
	const album = useCollections().photography;
</script>

<template>
	<div v-if="album.length > 0">
		<h1 class="fs-1 mb-2">Photography NFTs</h1>
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
				v-for="(photo, index) in album"
				:key="index"
			>
				<NftCollection :collection="photo" />
			</SwiperSlide>
		</Swiper>
	</div>
</template>

<style scoped></style>
