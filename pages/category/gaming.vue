<script setup>
	const CONFIG = useRuntimeConfig().public;
	const nftType = ref("Gaming");
	const currentPage = nftType.value + " NFT";

	useSeoMeta({
		title: `${CONFIG.APP} - ${currentPage}`,
	});
	const NFTs = useCollections().gaming;
	const all = NFTs.value.reduce((c, p) => {
		p.nfts.forEach((e) => c.push(e));
		return c;
	}, []);
</script>

<template>
	<div>
		<div class="px-5 mx-4">
			<!--begin::Card-->
			<div class="d-lg-none mx-in3">
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
									:src="nft.bannerImg"
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
									:src="nft.bannerImg"
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
			<h1 class="fs-1 mb-2 mt-7">{{ nftType }} NFTs</h1>

			<div class="container-fluid my-4">
				<div class="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-7">
					<div v-for="nft in all" :key="nft.id" class="col">
						<NftToken :token="nft" />
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
