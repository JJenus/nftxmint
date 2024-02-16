<script setup>
	const CONFIG = useRuntimeConfig().public;
	const currentPage = "Art NFT";

	useSeoMeta({
		title: `${CONFIG.APP} - ${currentPage}`,
	});
	const NFTs = ref([
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
		<div class="px-5 mx-4">
			<!--begin::Card-->
			<div class="d-nonie d-lg-none mx-in3">
				<Swiper
					:modules="[
						SwiperAutoplay,
						SwiperEffectCoverflow,
						SwiperEffectCards,
					]"
					:effect="'cards'"
					:cards-effect="{}"
					:centered-slides="true"
					:grab-cursor="true"
					:slides-per-view="'auto'"
					:loop="true"
					:autoplay="{
						delay: 4000,
						disableOnInteraction: true,
					}"
				>
					<SwiperSlide v-for="(nft, i) in NFTs" :key="i">
						<div class="card">
							<div class="card-body p-0">
								<img
									:src="nft.image"
									alt=""
									class="w-100 h-350px h-lg-350px rounded"
								/>
							</div>
						</div>
					</SwiperSlide>
				</Swiper>
			</div>

			<a href="/asset/aaa" class="d-none d-lg-block">
				<Swiper
					:modules="[SwiperAutoplay]"
					:space-between="10"
					:slides-per-view="'auto'"
					:loop="true"
					:autoplay="{
						delay: 5000,
						disableOnInteraction: true,
					}"
				>
					<SwiperSlide v-for="(nft, i) in NFTs" :key="i">
						<div class="card">
							<div class="card-body p-0">
								<img
									:src="nft.image"
									alt=""
									class="w-100 h-350px h-lg-500px rounded"
								/>
							</div>
						</div>
					</SwiperSlide>
				</Swiper>
			</a>
		</div>
		<div class="">
			<h1 class="fs-1 mb-2 mt-7">Art NFTs</h1>

			<div class="container-fluid my-4">
				<div class="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-7">
					<div v-for="(nft, i) in NFTs" :key="i" class="col">
						<div
							class="card hover-elevate-up hover-slide card-stretch h-100"
						>
							<div class="card-body p-0 h-100">
								<img
									:src="nft.image"
									alt=""
									class="w-100 h-200px rounded-top"
								/>
							</div>
							<NuxtLink
								:to="'/asset/' + nft.name"
								class="card-footer p-4 py-5"
							>
								<h5 class="mb-2 fs-4 d-flex align-items-center">
									{{ nft.name }}
									<i
										class="ki-outline ki-check-circle text-success fs-2 ms-3"
									>
									</i>
								</h5>
								<div class="d-flex justify-content-between">
									<div class="d-flex flex-column">
										<div class="fs-5 text-muted">Floor</div>
										<div class="fs-4 fw-bold">
											{{ nft.floor }}
										</div>
									</div>
									<div class="d-flex flex-column">
										<div class="fs-5 text-muted">
											Volume
										</div>
										<div class="fs-4 fw-bold">
											{{ nft.volume }}
										</div>
									</div>
								</div>
							</NuxtLink>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
