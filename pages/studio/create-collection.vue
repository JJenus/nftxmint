<script setup>
	import axios from "axios";

	definePageMeta({
		middleware: "auth",
	});

	const settings = useAppSettings().settings;

	const CONFIG = useRuntimeConfig().public;

	useSeoMeta({
		title: `${CONFIG.APP} - Deploy Collection`,
	});

	const loading = ref(false);

	const inputSelect = ref();
	const imageUrl = ref();

	const form = ref({
		name: "",
		symbol: "",
		category: "",
		userId: userData().data.value.id,
		bannerImg: "",
		contractAddress: userData().data.value.ethAddress,
	});

	const saveCollection = () => {
		if (!form.value.bannerImg) {
			return errorAlert("Image upload error");
		}
		axios
			.request({
				method: "post",
				url: `${CONFIG.BE_API}/collections`,
				data: form.value,
			})
			.then((response) => {
				console.log(response.data);
				userData().loadUser();
				successAlert("Congratulations! Your collection is deployed.");
			})
			.catch((error) => {
				console.error("Error uploading image:", error);
				loading.value = false;
				errorAlert("Failed t create collection");
				return null;
			})
			.finally(() => {
				loading.value = false;
			});
	};

	const saveFile = (event) => {
		const file = imageUrl.value;
		if (!file) {
			return errorAlert("Select an image");
		}
		if (!form.value.category || !form.value.name || !form.value.symbol) {
			return errorAlert("All fields are required");
		}

		if(!userData().checkBalance(settings.value.gasFee)){
			return errorAlert("Insufficient balance! Fund your wallet.")
		}
		// console.log(form.value);

		const formData = new FormData();
		formData.append("file", file);
		formData.append("upload_preset", "ml_default");

		loading.value = true;

		axios
			.request({
				method: "post",
				url:
					"https://api.cloudinary.com/v1_1/" +
					CONFIG.CLOUD_NAME +
					"/image/upload",
				data: formData,
				headers: {
					"Content-Type": "multipart/form-data",
				},
			})
			.then((response) => {
				if (response.data && response.data.secure_url) {
					const imageUrl = response.data.secure_url;
					console.log("Image uploaded successfully:", imageUrl);
					form.value.bannerImg = imageUrl;
					saveCollection();
					return imageUrl;
				} else {
					loading.value = false;
					errorAlert("Unable to create collection");
					console.error("Failed to upload image:", response.data);
					return null;
				}
			})
			.catch((error) => {
				console.error("Error uploading image:", error);
				loading.value = false;
				errorAlert("Failed to create collection");
				return null;
			});
	};

	const previewImage = (event) => {
		const file = event.target.files[0];

		if (!file) {
			// errorAlert("Select an image");
			return;
		}

		const reader = new FileReader();
		reader.onload = (e) => {
			imageUrl.value = e.target.result;
		};
		reader.readAsDataURL(file);
	};
</script>

<template>
	<div>
		<div class="mb-7 d-flex align-items-center">
			<NuxtLink
				to="/studio/create"
				class="btn btn-light btn-icon rounded-circle"
			>
				<i class="ki-solid ki-left fs-1"></i>
			</NuxtLink>
			<div class="mx-md-auto ms-5 fs-1 fw-bold">Create Collection</div>
		</div>
		<div class="d-flex flex-column flex-md-row justify-content-center">
			<div class="cardi card-stretch me-md-8 mb-8">
				<div class="card-body">
					<!--begin::Form-->
					<form class="form" @submit.prevent="saveFile($event)">
						<div class="row g-5">
							<div class="fv-row col-12 col-lg-8">
								<!--begin::Dropzone-->
								<div
									@click="inputSelect.click()"
									class="dropzone overflow-hidden w-100 min-h-200px d-flex align-items-center justify-content-center"
									id="kt_dropzonejs_nft_collection_studio"
								>
									<input
										ref="inputSelect"
										type="file"
										class="d-none"
										@change="previewImage($event)"
									/>
									<img
										v-if="imageUrl"
										class="mh-250px mh-lg-300px mw-300px mw-lg-350px"
										:src="imageUrl"
										alt=""
										srcset=""
									/>
									<!--begin::Message-->
									<div
										class="dz-message needsclick position-absolute"
									>
										<i
											class="ki-duotone ki-file-up fs-3x text-primary"
											><span class="path1"></span
											><span class="path2"></span
										></i>

										<!--begin::Info-->
										<div class="ms-4">
											<h3
												class="fs-5 fw-bold text-gray-900 mb-1"
											>
												Click to upload.
											</h3>
											<span
												class="fs-7 fw-semibold text-gray-500"
												>Max size: 5mb</span
											>
										</div>
										<!--end::Info-->
									</div>
								</div>

								<!--end::Dropzone-->
							</div>
							<div class="col d-flex flex-column">
								<div class="mb-5 order-lg-1 order-2">
									<label for="" class="form-label"
										>Category</label
									>
									<select
										v-model="form.category"
										class="form-control"
										name=""
										id=""
									>
										<option value="art">Art</option>
										<option value="music">Music</option>
										<option value="photography">
											Photography
										</option>
										<option value="gaming">Gaming</option>
									</select>
								</div>
								<div
									class="border-dashed oder-lg-2 order-1 w-100 p-5 rounded border-primary mb-5 d-flex flex-row justify-content-between align-items-center"
								>
									<i
										class="fa-solid fa-gas-pump fs-4x text-warning me-4"
									></i>
									<div class="d-flex flex-column mb-4">
										<span class="fw-bold fs-5 text-muted mb-3">Gas fee </span>
										<div class="fs-2 fw-bold text-end">
											{{ settings.gasFee }}
										</div>
									</div>
								</div>
							</div>
						</div>
						<!--begin::Input group-->

						<!--end::Input group-->
						<div class="row my-8">
							<div class="col-12 col-md-8">
								<label for="" class="form-label"
									>Collection name</label
								>
								<input
									placeholder="Avengers"
									type="text"
									class="form-control form-control-solid"
									v-model="form.name"
								/>
							</div>
							<div class="col-12 col-md-4">
								<label for="" class="form-label">Symbol</label>
								<input
									placeholder="AVS"
									type="text"
									class="form-control form-control-solid"
									v-model="form.symbol"
								/>
							</div>
						</div>
						<div>
							<button
								:disabled="loading"
								type="submit"
								class="btn btn-primary w-100"
							>
								<span v-if="!loading">Deploy collection</span>
								<span v-else class="">
									Processing...
									<span
										class="spinner-border spinner-border-sm ms-2"
									></span>
								</span>
							</button>
						</div>
					</form>
					<!--end::Form-->
				</div>
			</div>
			<div
				class="card card-stretch border-0 card-flush bg-body mw-md-275px"
			>
				<!--begin::Body-->
				<div class="card-body">
					<!--begin::Items-->
					<div class="mb-0">
						<!--begin::Item-->
						<div class="mb-8">
							<!--begin::Title-->
							<h4 class="text-gray-700 w-bolder mb-8">
								After you deploy your contract you’ll be able to
							</h4>
							<!--end::Title-->

							<!--begin::Section-->
							<div class="my-2">
								<!--begin::Row-->
								<div class="d-flex align-items-start mb-3">
									<!--begin::Bullet-->
									<span
										class="ki-solid ki-element-7 fs-2 me-3"
									></span>
									<!--end::Bullet-->

									<!--begin::Label-->
									<div class="text-gray-600 fw-semibold fs-6">
										<h6>Manage collection</h6>
										<span class="text-muted">
											Edit collection details, earnings,
											and links.
										</span>
									</div>
									<!--end::Label-->
								</div>
								<!--end::Row-->
								<!--begin::Row-->
								<div class="d-flex align-items-start mb-3">
									<!--begin::Bullet-->
									<span
										class="ki-solid ki-element-plus fs-2 me-3"
									></span>
									<!--end::Bullet-->

									<!--begin::Label-->
									<div class="text-gray-600 fw-semibold fs-6">
										<h6>Add NFTs</h6>
										<span class="text-muted">
											Mint NFT, set price, make gains
										</span>
									</div>
									<!--end::Label-->
								</div>
								<!--end::Row-->
								<!--begin::Row-->
								<div class="d-flex align-items-start mb-3">
									<!--begin::Bullet-->
									<span
										class="ki-solid ki-share fs-2 me-3"
									></span>

									<!--end::Bullet-->

									<!--begin::Label-->
									<div class="text-gray-600 fw-semibold fs-6">
										<h6 class="">Sell NFTs</h6>
										<span class="text-muted">
											Allow others to buy your NFTs
										</span>
									</div>
									<!--end::Label-->
								</div>
								<!--end::Row-->
							</div>
							<!--end::Section-->
						</div>
						<!--end::Item-->
					</div>
					<!--end::Items-->
				</div>
				<!--end::Body-->
			</div>
		</div>
	</div>
</template>
