<script setup>
	const studio = ref([
		{
			category: "music",
			name: "I am me",
			floor: "91.23 Matic",
			volume: "11,420",
			image: "/assets/media/nft/music/ee5c835ca7927237f4dbac8270dc4c0f.avif",
		},
		{
			category: "music",

			name: "Lavrina",
			floor: "20.23 ETH",
			volume: "12,21",
			image: "/assets/media/nft/music/9785f0b062da87518076fa7d8b6a0381.avif",
		},
		{
			category: "music",

			name: "Estadi Magri",
			floor: "1.23 Matic",
			volume: "11,420",
			image: "/assets/media/nft/music/c5c3ff4a66c4c34f1c93333476162631.avif",
		},
		{
			category: "music",

			name: "I am me",
			floor: "91.23 Matic",
			volume: "11,420",
			image: "/assets/media/nft/music/ee5c835ca7927237f4dbac8270dc4c0f.avif",
		},
		{
			category: "music",

			name: "Adingra",
			floor: "4.23 ETH",
			volume: "1,000",
			image: "/assets/media/nft/music/what-are-music-nfts.webp",
		},
		{
			category: "music",
			name: "Methusa",
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
				v-for="(music, index) in studio"
				:key="index"
			>
				<NftCollection :collection="music" />
			</SwiperSlide>
		</Swiper>
	</div>
</template>

<style scoped></style>
