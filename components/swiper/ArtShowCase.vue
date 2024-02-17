<script setup>
	const open = (nftPath) => {
		navigateTo(`/asset/${nftPath}`);
	};
	const arts = ref([
		{
			category: "art",
			name: "Khan",
			floor: "0.23 ETH",
			volume: "17,000",
			image: "/assets/media/nft/art/48f515409362ec557603578c18fd2134.jpg",
		},
		{
			category: "art",
			name: "Rango",
			floor: "1.23 Matic",
			volume: "11,420",
			image: "/assets/media/nft/gaming/GyEkb_tl0e0gXf_Vdce7Pkkc5OBU-ORbYUa4b-iIW4t39Gy5293OvnI5LLcwIxTI4XKO8yg5bHXldgDcPDdSnmrApGFHfLZyfs8V.jpg",
		},
		{
			category: "art",
			name: "Ido",
			floor: "1.23 Matic",
			volume: "11,420",
			image: "/assets/media/nft/art/2757e233bc2708e8d0f5ad3079b39d21.jpg",
		},
		{
			category: "art",
			name: "Chi",
			floor: "4.23 ETH",
			volume: "1,000",
			image: "/assets/media/nft/art/198b0fa57beea4256eadfefb74bc1602.jpg",
		},
		{
			category: "art",
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
				<NftCollection :collection="art"/>
			</SwiperSlide>
		</Swiper>
	</div>
</template>

<style scoped></style>
