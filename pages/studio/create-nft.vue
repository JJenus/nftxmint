<script setup>
	// import { loadMoonPay } from "@moonpay/moonpay-js";
	import axios from "axios";

	const CONFIG = useRuntimeConfig().public;
	const currentPage = "Mint NFT";
	
	useSeoMeta({
		title: `${CONFIG.APP} - ${currentPage}`,
	});
	
	// const moonPay = await loadMoonPay();

	// const moonPaySdk = moonPay({
	// 	flow: "buy",
	// 	environment: "sandbox",
	// 	variant: "overlay",
	// 	params: {
	// 		apiKey: "pk_test_a67kDxbY30ybPbQmezwipwwrF80FaS",
	// 		theme: "dark",
	// 		baseCurrencyCode: "usd",
	// 		baseCurrencyAmount: "100",
	// 		defaultCurrencyCode: "eth",
	// 	},
	// 	debug: true,
	// });
	const inputSelect = ref();
	const imageUrl = ref();

	const saveFile = () => {
		const file = imageUrl.value;
		if (!file) {
			return errorAlert("Select an image");
		}
		const formData = new FormData();
		formData.append("file", file);
		formData.append("upload_preset", "ml_default");

		return axios
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
					return imageUrl;
				} else {
					console.error("Failed to upload image:", response.data);
					return null;
				}
			})
			.catch((error) => {
				console.error("Error uploading image:", error);
				return null;
			});
	};

	const previewImage = (event) => {
		const file = event.target.files[0];
		if (!file) return;

		const reader = new FileReader();
		reader.onload = (e) => {
			imageUrl.value = e.target.result;
		};
		reader.readAsDataURL(file);
	};

	// const buy = () => {
	// 	moonPaySdk.show();
	// };

	onMounted(() => {});
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
			<div class="mx-md-auto ms-5 fs-1 fw-bold">Create an NFT</div>
		</div>
		<div class="row g-8 justify-content-center">
			<div class="col-12 col-lg-6">
				<div class="fs-3 fw-semibold mb-8">
					Once your item is minted you will not be able to change any
					of its information.
				</div>

				<form class="form" action="#" method="post">
					<!--begin::Input group-->
					<div class="fv-row">
						<!--begin::Dropzone-->
						<div
							@click="inputSelect.click()"
							class="dropzone position-relative w-100 min-h-300px d-flex align-items-center justify-content-center"
							id="kt_dropzonejs_nft_single_studio"
						>
							<input
								ref="inputSelect"
								type="file"
								class="d-none"
								@change="previewImage($event)"
							/>
							<img
								v-if="imageUrl"
								class="h-100"
								:src="imageUrl"
								alt=""
								srcset=""
							/>
							<!--begin::Message-->
							<div class="dz-message needsclick position-absolute">
								<i
									class="ki-duotone ki-file-up fs-3x text-primary"
									><span class="path1"></span
									><span class="path2"></span
								></i>

								<!--begin::Info-->
								<div class="ms-4 ">
									<h3 class="fs-5 fw-bold text-gray-900 mb-1">
										click to upload.
									</h3>
									<span class="fs-7 fw-semibold text-gray-500"
										>Max size: 5mb</span
									>
								</div>
								<!--end::Info-->
							</div>
						</div>
						<!--end::Dropzone-->
					</div>
				</form>
			</div>
			<div class="col-12 col-lg-6">
				<div
					class="card card-stretch border-0 card-flush bg-transparent"
				>
					<!--begin::Body-->
					<div class="card-body">
						<div class="mb-8">
							<label for="" class="form-label">Name</label>
							<input
								placeholder="Preferred nft name"
								type="text"
								class="form-control form-control-solid"
							/>
						</div>
						<div class="mb-8">
							<label for="" class="form-label"
								>Items available</label
							>
							<input
								placeholder="Supply"
								type="text"
								class="form-control form-control-solid"
							/>
						</div>

						<div class="mb-8">
							<label for="" class="form-label">Description</label>
							<textarea class="form-control"></textarea>
						</div>
						<div>
							<button
								@click="saveFile()"
								class="btn btn-primary w-100"
							>
								Create NFT
							</button>
						</div>
					</div>
					<!--end::Body-->
				</div>
			</div>
		</div>
	</div>
</template>
