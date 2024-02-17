<script setup>
	const NFTs = ref([
		{
			name: "Tour De Pac",
			floor: "91.23 Matic",
			volume: "11,420",
			image: "/assets/media/nft/gaming/7d4217892337d4900e2fad175c5c0011.jpg",
		},
		{
			name: "Again",
			floor: "20.23 ETH",
			volume: "12,21",
			image: "/assets/media/nft/art/48f515409362ec557603578c18fd2134.jpg",
		},
		{
			name: "Maldiva",
			floor: "1.23 Matic",
			volume: "11,420",
			image: "/assets/media/nft/memberships/3cd9c9d97e35a7ff5ee11baf5dca7b90.jpg",
		},
		{
			name: "Greener",
			floor: "91.23 Matic",
			volume: "11,420",
			image: "/assets/media/nft/memberships/maverick-membership.webp",
		},
		{
			name: "Melbourn",
			floor: "4.23 ETH",
			volume: "1,000",
			image: "/assets/media/nft/music/what-are-music-nfts.webp",
		},
		{
			name: "Vice City",
			floor: "2.23 ETH",
			volume: "17,000",
			image: "/assets/media/nft/music/ee5c835ca7927237f4dbac8270dc4c0f.jpg",
		},
	]);
</script>

<template>
	<div class="py-4">
		<Swiper
			:modules="[SwiperAutoplay]"
			:space-between="10"
			:breakpoints="{
				// when window width is >= 480px
				768: {
					slidesPerView: 3,
				},
				// when window width is >= 640px
				992: {
					slidesPerView: 4,
				},
			}"
			:loop="true"
			:autoplay="{
				delay: 6000,
				disableOnInteraction: true,
			}"
		>
			<SwiperSlide v-for="(nft, i) in NFTs" :key="i">
				<div class="card">
					<div class="card-body p-0">
						<img
							:src="nft.image"
							alt=""
							class="w-100 h-300px rounded"
						/>
					</div>
				</div>
			</SwiperSlide>
		</Swiper>
	</div>
</template>

<style scoped></style>
