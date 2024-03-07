<script setup>
	const CONFIG = useRuntimeConfig().public;

	useSeoMeta({
		title: `Welcome to ${CONFIG.APP}`,
	});
</script>

<template>
	<div class="container-fluid">
		<!--begin::Card-->
		<div class="card mb-10 border-0 bg-transparent">
			<!--begin::Card body-->
			<div class="card-body min-h-300px">
				<div
					class="d-flex flex-column flex-md-row justify-content-around align-items-center"
				>
					<div class="mw-350px ms-md-4 ms-xl-1">
						<h1 class="display-4">
							Discover, collect and sell extraordinary NFTs.
						</h1>
						<h6 class="text-muted">
							Next generation NFTs, art, music, photography, and
							more.
						</h6>
					</div>
					<div class="text-center ms-auito">
						<NuxtImg
							class="min-w-500 mhi-300px card-rounded"
							alt=""
							src="/assets/media/nft/art/art-main.png"
							sizes="md:450px"
						/>
					</div>
				</div>
			</div>
			<!--end::Card body-->
		</div>
		<!--end::Card-->

		<div class="mb-4">
			<SwiperArtShowCase />
		</div>

		<div class="mb-4">
			<SwiperMusicShowCase />
		</div>

		<div class="mb-4">
			<SwiperGamingShowCase />
		</div>

		<div class="mb-4">
			<SwiperPhotographyShowCase />
		</div>
	</div>
</template>
