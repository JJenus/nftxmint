<script setup>
	const open = (nftPath) => {
		navigateTo(`/asset/${nftPath}`);
	};
	const arts = useCollections().art;
</script>

<template>
	<div v-if="arts.length > 0">
		<h1 class="fs-1 mb-2">Art NFTs</h1>

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
				v-for="(art, index) in arts"
				:key="index"
			>
				<NftCollection :collection="art" />
			</SwiperSlide>
		</Swiper>
	</div>
</template>

<style scoped></style>
