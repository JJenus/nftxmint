<script setup>
	import currency from "currency.js";
	import axios from "axios";

	const CONFIG = useRuntimeConfig().public;
	useSeoMeta({
		title: `${CONFIG.APP} - Asset`,
	});

	const settings = useAppSettings().settings;

	const loading = useAppSettings().isPageLoading;
	loading.value = true;

	const processing = ref(false);

	const route = useRoute();

	const nftID = ref(route.params.id);
	const myNFT = ref({});
	const myCollection = ref({});

	const counter = ref(1);

	const initCounter = () => {
		if (process.client) {
			const budgetSlider = document.querySelector(
				"#kt_docs_forms_advanced_interactive_slider"
			);

			noUiSlider.create(budgetSlider, {
				start: [1],
				connect: true,
				range: {
					min: 1,
					max: myNFT.value.supply,
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
	};

	const totalCost = () => {
		return currency(myNFT.value.price, {
			symbol: "",
			precision: 8,
		}).multiply(counter.value);
	};

	const getNFT = () => {
		const config = {
			url: `${CONFIG.BE_API}/nfts/${nftID.value}`,
			method: "GET",
		};

		axios
			.request(config)
			.then((res) => {
				myNFT.value = res.data;
				console.log(res.data);
				getCollection();
			})
			.catch((err) => {
				infoAlert("NFT not found!");
				setTimeout(() => {
					window.location.href = "/";
				}, 3000);
			});
	};

	const getCollection = () => {
		const config = {
			url: `${CONFIG.BE_API}/collections/${myNFT.value.collectionId}`,
			method: "GET",
		};

		axios
			.request(config)
			.then((res) => {
				myCollection.value = res.data;
				console.log(res.data);
				try {
					loading.value = false;
					setTimeout(() => {
						initCounter();
					}, 2000);
				} catch (error) {
					console.log(error);
				}
			})
			.catch((err) => {
				infoAlert("Collection not found!");
				setTimeout(() => {
					window.location.href = "/";
				}, 3000);
			})
			.finally(() => (loading.value = false));
	};

	const buy = () => {
		const data = userData();
		if (!data.checkBalance(totalCost().value)) {
			return errorAlert("Insufficient balance!");
		}
		const nft = { ...myNFT.value };
		nft.price = totalCost().value;
		nft.supply = counter.value;
		nft.userId = data.data.value.id;

		processing.value = true;

		const config = {
			url: `${CONFIG.BE_API}/nfts/buy`,
			method: "POST",
			data: nft,
		};

		axios
			.request(config)
			.then((res) => {
				console.log(res.data);
				data.loadUser();
				successAlert(`Congratulations! You now own ${nft.name}.`);
				// setTimeout(() => {
				// 	window.location.href = "/account";
				// }, 5000);
			})
			.catch((err) => {
				errorAlert("Unable to acquire " + nft.name);
			})
			.finally(() => (processing.value = false));
	};

	onMounted(() => {
		getNFT();
	});
</script>

<template>
	<div v-if="!loading" class="container-fluid mt-5">
		<div v-if="myNFT.name" class="row g-8">
			<div class="col-12 col-md-7 col-lg-7">
				<h1 class="display-6 mb-7 d-md-none">
					{{ myNFT.name }}
					<i class="ki-duotone ki-black-right-line fs-1 text-white">
						<span class="path1"></span>
						<span class="path2"></span>
					</i>
					{{ myCollection.name }}
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
								class="badge d-none badge-white badge-circle fs-6 badge-outline"
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
							class="w-100 imh-450px card-rounded-bottom"
							alt="nft"
							:src="myNFT.nftImg"
						/>
					</div>
				</div>
			</div>
			<div class="col">
				<div class="mb-5">
					<h1 class="display-6 mb-3 d-none d-md-block">
						{{ myNFT.name }}
						<i
							class="ki-duotone ki-black-right-line fs-1 text-white"
						>
							<span class="path1"></span>
							<span class="path2"></span>
						</i>
						{{ myCollection.name }}
					</h1>

					<div class="d-flex flex-column flex-md-row">
						<div>
							<button
								class="btn p-0 me-5 bg-transparent btn-active-color-primary btn-active-icon-primary"
							>
								<i class="ki-solid ki-burger-menu-3 fs-3"></i>
								{{ myNFT.supply }} items
							</button>
						</div>

						<div>
							<button
								class="btn d-none p-0 me-5 bg-transparent btn-active-color-primary btn-active-icon-info"
							>
								<i class="ki-solid ki-eye fs-3"></i> 234 views
							</button>
						</div>

						<div>
							<button
								class="btn d-none p-0 me-5 bg-transparent btn-active-color-primary btn-active-icon-danger"
							>
								<i class="ki-solid ki-heart fs-3"></i> 3 likes
							</button>
						</div>

						<div>
							<button
								class="btn p-0 me-5 bg-transparent btn-active-color-primary btn-active-icon-warning"
							>
								<i class="ki-solid ki-book-open fs-3"></i>
								{{ myNFT.category }}
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
								<h1 class="display-6">{{ myNFT.price }} ETH</h1>
								<div class="fw-bold pt-1">
									Total: {{ totalCost() }}
									ETH
								</div>
								<div class="text-muted mt-1 d-none">
									Listed by
									<!-- <span
										class="text-primary fw-bold text-uppercase"
										>{{ myNFT.owner }}</span
									> -->
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
							<button
								@click="buy()"
								class="btn btn-primary w-100 w-lg-75"
							>
								<span v-if="!processing"
									>Buy {{ counter }} Now</span
								>
								<span v-else class="">
									Processing
									<span
										class="spinner-border spinner-border-sm ms-2"
									></span>
								</span>
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
