<script setup>
	const album = ref([
		{
			category: "music",
			name: "I am me",
			floor: "91.23 Matic",
			volume: "11,420",
			image: "/assets/media/nft/music/ee5c835ca7927237f4dbac8270dc4c0f.avif",
		},
		{
			name: "Lavrina",
			category: "music",
			floor: "20.23 ETH",
			volume: "12,21",
			image: "/assets/media/nft/music/9785f0b062da87518076fa7d8b6a0381.avif",
		},
		{
			name: "Estadi Magri",
			category: "music",
			floor: "1.23 Matic",
			volume: "11,420",
			image: "/assets/media/nft/music/c5c3ff4a66c4c34f1c93333476162631.avif",
		},
		{
			name: "I am me",
			category: "music",
			floor: "91.23 Matic",
			volume: "11,420",
			image: "/assets/media/nft/music/ee5c835ca7927237f4dbac8270dc4c0f.avif",
		},
		{
			name: "Adingra",
			category: "music",
			floor: "4.23 ETH",
			volume: "1,000",
			image: "/assets/media/nft/music/what-are-music-nfts.webp",
		},
		{
			name: "Methusa",
			category: "music",
			floor: "2.23 ETH",
			volume: "17,000",
			image: "/assets/media/nft/music/ee5c835ca7927237f4dbac8270dc4c0f.avif",
		},
	]);
</script>

<template>
	<div>
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
