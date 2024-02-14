<script setup>
	const games = ref([
		{
			category: "gaming",
			name: "Tour De Pac",
			floor: "91.23 Matic",
			volume: "11,420",
			image: "/assets/media/nft/gaming/7d4217892337d4900e2fad175c5c0011.avif",
		},
		{
			name: "Again",
			category: "gaming",
			floor: "20.23 ETH",
			volume: "12,21",
			image: "/assets/media/nft/gaming/20f9fd3c07cb3ed1c085221ee0acdd06.avif",
		},
		{
			category: "gaming",

			name: "Maldiva",
			floor: "1.23 Matic",
			volume: "11,420",
			image: "/assets/media/nft/gaming/dbb8f49a7ee1d7c6d42d35321535f6bc.avif",
		},
		{
			category: "gaming",
			name: "Greener",
			floor: "91.23 Matic",
			volume: "11,420",
			image: "/assets/media/nft/gaming/GyEkb_tl0e0gXf_Vdce7Pkkc5OBU-ORbYUa4b-iIW4t39Gy5293OvnI5LLcwIxTI4XKO8yg5bHXldgDcPDdSnmrApGFHfLZyfs8V.avif",
		},
		{
			category: "gaming",
			name: "Melbourn",
			floor: "4.23 ETH",
			volume: "1,000",
			image: "/assets/media/nft/music/what-are-music-nfts.webp",
		},
		{
			category: "gaming",
			name: "Vice City",
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
				v-for="(game, index) in games"
				:key="index"
			>
				<NftCollection :collection="game" />
			</SwiperSlide>
		</Swiper>
	</div>
</template>

<style scoped></style>
