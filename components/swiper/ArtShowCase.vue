<script setup>
	const open = (nftPath) => {
		navigateTo(`/asset/${nftPath}`);
	};
	const arts = ref([
		{
			name: "Khan",
			floor: "0.23 ETH",
			volume: "17,000",
			image: "/assets/media/nft/art/48f515409362ec557603578c18fd2134.avif",
		},
		{
			name: "Rango",
			floor: "1.23 Matic",
			volume: "11,420",
			image: "/assets/media/nft/gaming/GyEkb_tl0e0gXf_Vdce7Pkkc5OBU-ORbYUa4b-iIW4t39Gy5293OvnI5LLcwIxTI4XKO8yg5bHXldgDcPDdSnmrApGFHfLZyfs8V.avif",
		},
		{
			name: "Ido",
			floor: "1.23 Matic",
			volume: "11,420",
			image: "/assets/media/nft/art/2757e233bc2708e8d0f5ad3079b39d21.avif",
		},
		{
			name: "Chi",
			floor: "4.23 ETH",
			volume: "1,000",
			image: "/assets/media/nft/art/198b0fa57beea4256eadfefb74bc1602.avif",
		},
		{
			name: "Khan",
			floor: "2.23 ETH",
			volume: "17,000",
			image: "/assets/media/nft/art/turn-digital-arti-into-nft.webp",
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
				v-for="(art, index) in arts"
				:key="index"
			>
				<div
					class="card hover-elevate-up hover-slide card-stretch h-100"
				>
					<div class="card-body p-0 h-100">
						<img
							@click="open(art.name)"
							:src="art.image"
							alt=""
							class="w-100 h-200px rounded-top"
						/>
					</div>
					<div class="card-footer p-4 py-5">
						<NuxtLink to="/category/art">
							<h5 class="mb-2 fs-4 d-flex align-items-center">
								{{ art.name }}
								<i
									class="ki-outline ki-check-circle text-success fs-2 ms-3"
								>
								</i>
							</h5>
							<div class="d-flex justify-content-between">
								<div class="d-flex flex-column">
									<div class="fs-5 text-muted">Floor</div>
									<div class="fs-4 fw-bold">
										{{ art.floor }}
									</div>
								</div>
								<div class="d-flex flex-column">
									<div class="fs-5 text-muted">Volume</div>
									<div class="fs-4 fw-bold">
										{{ art.volume }}
									</div>
								</div>
							</div>
						</NuxtLink>
					</div>
				</div>
			</SwiperSlide>
		</Swiper>
	</div>
</template>

<style scoped></style>
