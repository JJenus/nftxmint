<script setup>
	const nft = ref({
		collectionName: "Amagidon",
		name: "Ido",
		floor: 1.23,
		crypto: "Matic",
		volume: "11,420",
		image: "/assets/media/nft/art/2757e233bc2708e8d0f5ad3079b39d21.avif",
		category: "Art",
		owner: "xyeiry",
	});

	const start = ref(false);

	const counter = ref(0);
	if (process.client) {
		const budgetSlider = document.querySelector(
			"#kt_docs_forms_advanced_interactive_slider"
		);

		noUiSlider.create(budgetSlider, {
			start: [1],
			connect: true,
			range: {
				min: 1,
				max: 500,
			},
			step: 1,
		});

		budgetSlider.noUiSlider.on("update", function (values, handle) {
			counter.value = Math.round(values[handle]);
			if (handle) {
				counter.value = Math.round(values[handle]);
				// counter.value = budgetValue.innerHTML;
			}
		});
	}
</script>

<template>
	<div class="container-fluid mt-5">
		<div class="row g-8">
			<div class="col-12 col-md-4 col-lg-5">
				<h1 class="display-6 mb-7 d-md-none">
					{{ nft.name }}
					<i class="ki-duotone ki-black-right-line fs-1 text-white">
						<span class="path1"></span>
						<span class="path2"></span>
					</i>
					{{ nft.collectionName }}
				</h1>
				<div class="card">
					<div
						class="card-header m-0 py-1 d-flex align-items-center justify-content-between"
					>
						<div class="text-white">
							<button
								class="btn bg-body btn-icon-white btn-active-icon-primary p-0"
							>
								<i class="ki-solid ki-right-left fs-1"> </i>
							</button>
						</div>
						<div class="d-flex align-items-center">
							<span
								class="badge badge-white badge-circle fs-6 badge-outline"
								>3</span
							>
							<button
								class="btn btn-primaryi bg-body btn-icon-white btin-icon btn-active-icon-danger p-1 pe-0"
							>
								<i
									class="ki-solid ki-heart btn-active-icon-primary fs-1"
								>
								</i>
							</button>
						</div>
					</div>
					<div class="card-body p-0">
						<img
							class="w-100 mh-450px card-rounded-bottom"
							alt="nft"
							:src="nft.image"
						/>
					</div>
				</div>
			</div>
			<div class="col">
				<div class="mb-5">
					<h1 class="display-6 mb-3 d-none d-md-block">
						{{ nft.name }}
						<i
							class="ki-duotone ki-black-right-line fs-1 text-white"
						>
							<span class="path1"></span>
							<span class="path2"></span>
						</i>
						{{ nft.collectionName }}
					</h1>

					<div class="d-flex flex-column flex-md-row">
						<div>
							<button
								class="btn p-0 me-5 bg-transparent btn-active-color-primary btn-active-icon-primary"
							>
								<i class="ki-solid ki-burger-menu-3 fs-3"></i>
								{{ nft.volume }} items
							</button>
						</div>

						<div>
							<button
								class="btn p-0 me-5 bg-transparent btn-active-color-primary btn-active-icon-info"
							>
								<i class="ki-solid ki-eye fs-3"></i> 234 views
							</button>
						</div>

						<div>
							<button
								class="btn p-0 me-5 bg-transparent btn-active-color-primary btn-active-icon-danger"
							>
								<i class="ki-solid ki-heart fs-3"></i> 3 likes
							</button>
						</div>

						<div>
							<button
								class="btn p-0 me-5 bg-transparent btn-active-color-primary btn-active-icon-warning"
							>
								<i class="ki-solid ki-book-open fs-3"></i>
								{{ nft.category }}
							</button>
						</div>
					</div>
				</div>
				<div class="card mb-10">
					<div class="card-body">
						<div class="text-muted">Current price</div>
						<div
							class="d-flex align-items-center justify-content-between"
						>
							<div>
								<h1 class="display-6">
									{{ nft.floor }} {{ nft.crypto }}
								</h1>
								<div class="fw-bold pt-1">
									Total: {{ nft.floor * counter }}
									{{ nft.crypto }}
								</div>
								<div class="text-muted mt-1">
									Listed by
									<span
										class="text-primary fw-bold text-uppercase"
										>{{ nft.owner }}</span
									>
								</div>
							</div>

							<div>
								<!--begin::Slider-->
								<div class="d-flex flex-column text-center">
									<div
										class="d-flex align-items-start justify-content-center mb-7"
									>
										<i
											class="ki-duotone text-white ki-element-plus fs-4 mt-1 me-2 fw-bold"
										>
											<span class="path1"></span>
											<span class="path2"></span>
											<span class="path3"></span>
											<span class="path4"></span>
											<span class="path5"></span>
										</i>
										<span
											class="fw-bold fs-3x"
											id="kt_modal_create_campaign_budget_label"
										></span>
										<span class="fw-bold fs-3x">{{
											counter
										}}</span>
									</div>
									<div
										id="kt_docs_forms_advanced_interactive_slider"
										class="noUi-sm"
									></div>
								</div>
								<!--end::Slider-->
							</div>
						</div>

						<div class="mt-4">
							<button class="btn btn-primary w-100 w-lg-75">
								Buy {{ counter }} Now
							</button>
						</div>
					</div>
				</div>

				<div class="card">
					<div class="card-body"></div>
				</div>
			</div>
		</div>
	</div>
</template>
