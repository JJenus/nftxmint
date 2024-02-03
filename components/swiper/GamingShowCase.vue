<script setup>
	const games = ref([
		{
			name: "Tour De Pac",
			floor: "91.23 Matic",
			volume: "11,420",
			image: "/assets/media/nft/gaming/7d4217892337d4900e2fad175c5c0011.avif",
		},
		{
			name: "Again",
			floor: "20.23 ETH",
			volume: "12,21",
			image: "/assets/media/nft/gaming/20f9fd3c07cb3ed1c085221ee0acdd06.avif",
		},
		{
			name: "Maldiva",
			floor: "1.23 Matic",
			volume: "11,420",
			image: "/assets/media/nft/gaming/dbb8f49a7ee1d7c6d42d35321535f6bc.avif",
		},
		{
			name: "Greener",
			floor: "91.23 Matic",
			volume: "11,420",
			image: "/assets/media/nft/gaming/GyEkb_tl0e0gXf_Vdce7Pkkc5OBU-ORbYUa4b-iIW4t39Gy5293OvnI5LLcwIxTI4XKO8yg5bHXldgDcPDdSnmrApGFHfLZyfs8V.avif",
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
				<div
					class="card hover-elevate-up hover-slide card-stretch h-100"
				>
					<div class="card-body p-0 h-100">
						<img
							:src="game.image"
							alt=""
							class="w-100 h-200px rounded-top"
						/>
					</div>
					<div class="card-footer p-4 py-5">
						<h5 class="mb-2 fs-4 d-flex align-items-center">
							{{ game.name }}
							<i
								class="ki-outline ki-check-circle text-success fs-2 ms-3"
							>
							</i>
						</h5>
						<div class="d-flex justify-content-between">
							<div class="d-flex flex-column">
								<div class="fs-5 text-muted">Floor</div>
								<div class="fs-4 fw-bold">
									{{ game.floor }}
								</div>
							</div>
							<div class="d-flex flex-column">
								<div class="fs-5 text-muted">Volume</div>
								<div class="fs-4 fw-bold">
									{{ game.volume }}
								</div>
							</div>
						</div>
					</div>
				</div>
			</SwiperSlide>
		</Swiper>
	</div>
</template>

<style scoped></style>
