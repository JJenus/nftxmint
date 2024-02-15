<script setup>
	definePageMeta({
		middleware: "auth",
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
	<div class="m-0 p-0 mt-n6">
		<div class="d-flex flex-column flex-md-row m-0 p-0">
			<div class="order-2 order-lg-1 m-0 p-0 w-lg-800px me-md-10">
				<div
					class="d-flex min-h-lg-500px flex-column container-fluid justify-content-center w-100 w-lg-75 p-lg-0"
				>
					<NuxtLink
						to="create-collection"
						class="btn btn-secondary w-100 h-125px d-flex align-items-center mb-5"
					>
						<div
							class="d-flex justify-content-between align-items-center w-100"
						>
							<div class="">
								<div class="d-flex">
									<i
										class="ki-solid ki-element-1 fw-bold fs-2x me-2"
									>
									</i>
									<h1 class="">Create A Collection</h1>
								</div>
								<span class="fs-5"
									>Launch your NFT collection</span
								>
							</div>
							<i class="ki-solid ki-right fw-bold fs-2x"></i>
						</div>
					</NuxtLink>

					<NuxtLink
						to="create-nft"
						class="btn btn-secondary w-100 h-125px d-flex align-items-center"
					>
						<div
							class="d-flex justify-content-between align-items-center w-100"
						>
							<div class="">
								<div class="fw-2x d-flex">
									<i
										class="ki-solid ki-slider-vertical-2 fw-bold fs-2x me-2"
									>
									</i>
									<h1>Mint an NFT</h1>
								</div>
								<span class="fs-5"
									>Add NFT to your collection</span
								>
							</div>
							<i class="ki-solid ki-plus fw-bold fs-2x"></i>
						</div>
					</NuxtLink>
				</div>
			</div>
			<div
				class="position-relative order-1 order-lg-2 mb-5 mb-lg-0 m-0 p-0 ms-n10 ms-lg-0 me-n10 mw-lg-700px"
			>
				<div
					style="z-index: 1000"
					class="d-flex d-md-none align-items-center position-absolute bottom-0 mb-3 start-0 ms-6"
				>
					<div
						class="rounded-circle bg-white ps-1 d-flex justify-content-center h-60px w-60px align-items-center"
					>
						<NFTexLogoMini :classes="'h-50px mb-0'" />
					</div>
					<h1 class="display-2 ms-3">Create</h1>
				</div>
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
						<div class="card card-rounded">
							<div class="card-body p-0 m-0">
								<img
									:src="nft.image"
									alt=""
									class="w-100 h-250px rounded-start h-lg-500px rounded-left"
								/>
							</div>
						</div>
					</SwiperSlide>
				</Swiper>
			</div>
		</div>
	</div>
</template>
