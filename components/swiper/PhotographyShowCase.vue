<script setup>
	const album = ref([
		{
			name: "I am me",
			floor: "91.23 Matic",
			volume: "11,420",
			image: "/assets/media/nft/music/ee5c835ca7927237f4dbac8270dc4c0f.avif",
		},
		{
			name: "Lavrina",
			floor: "20.23 ETH",
			volume: "12,21",
			image: "/assets/media/nft/music/9785f0b062da87518076fa7d8b6a0381.avif",
		},
		{
			name: "Estadi Magri",
			floor: "1.23 Matic",
			volume: "11,420",
			image: "/assets/media/nft/music/c5c3ff4a66c4c34f1c93333476162631.avif",
		},
		{
			name: "I am me",
			floor: "91.23 Matic",
			volume: "11,420",
			image: "/assets/media/nft/music/ee5c835ca7927237f4dbac8270dc4c0f.avif",
		},
		{
			name: "Adingra",
			floor: "4.23 ETH",
			volume: "1,000",
			image: "/assets/media/nft/music/what-are-music-nfts.webp",
		},
		{
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
				v-for="(photo, index) in album"
				:key="index"
			>
				<div
					class="card hover-elevate-up hover-slide card-stretch h-100"
				>
					<div class="card-body p-0 h-100">
						<img
							:src="photo.image"
							alt=""
							class="w-100 h-200px rounded-top"
						/>
					</div>
					<div class="card-footer p-4 py-5">
						<h5 class="mb-2 fs-4 d-flex align-items-center">
							{{ photo.name }}
							<i
								class="ki-outline ki-check-circle text-success fs-2 ms-3"
							>
							</i>
						</h5>
						<div class="d-flex justify-content-between">
							<div class="d-flex flex-column">
								<div class="fs-5 text-muted">Floor</div>
								<div class="fs-4 fw-bold">
									{{ photo.floor }}
								</div>
							</div>
							<div class="d-flex flex-column">
								<div class="fs-5 text-muted">Volume</div>
								<div class="fs-4 fw-bold">
									{{ photo.volume }}
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
