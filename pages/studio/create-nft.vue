<script setup>
	import axios from "axios";

	const CONFIG = useRuntimeConfig().public;
	const currentPage = "Mint NFT";
	const collections = useCollections().userCollections;

	useSeoMeta({
		title: `${CONFIG.APP} - ${currentPage}`,
	});

	const settings = useAppSettings().settings;

	const inputSelect = ref();
	const imageUrl = ref();
	const loading = ref(false);

	const form = ref({
		name: "",
		category: "art",
		supply: 1,
		nftImg: "",
		collectionId: "",
		price: "",
		desc: "",
		userId: userData().data.value.id,
		ownerId: userData().data.value.id,
	});

	const saveNFT = () => {
		if (!form.value.nftImg) {
			return errorAlert("Image upload error");
		}
		if(!userData().checkBalance(settings.value.mintingFee)){
			return errorAlert("Insufficient balance! Fund your wallet.")
		}
		axios
			.request({
				method: "post",
				url: `${CONFIG.BE_API}/nfts`,
				data: form.value,
			})
			.then((response) => {
				console.log(response.data);
				useCollections();
				userData().loadUser();
				successAlert("Success!");
			})
			.catch((error) => {
				console.error("Error uploading image:", error);
				loading.value = false;
				errorAlert("Failed to create nft");
				return null;
			})
			.finally(() => {
				loading.value = false;
			});
	};

	const saveFile = () => {
		const file = imageUrl.value;
		if (!file) {
			return errorAlert("Select an image");
		}
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
					console.log("Image uploaded successfully:", response.data);
					form.value.nftImg = imageUrl;
					saveNFT();
					return imageUrl;
				} else {
					console.error("Failed to upload image:", response.data);
					return null;
				}
			})
			.catch((error) => {
				loading.value = false;

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

	onMounted(() => {
		console.log(collections.value);
	});
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
		<div class="row g-3 g-lg-8 justify-content-center">
			<div class="col-12 col-lg-6">
				<div class="card bg-transparent border-0">
					<div class="card-body">
						<div class="fs-6 fw-semibold mb-5">
							Once your item is minted you will not be able to
							change any of its information.
						</div>

						<div class="d-flex flex-column">
							<!--begin::Input group-->
							<div class="fv-row order-1 order-lg-2 mb-5 mb-lg-0">
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
										class="mh-250px mh-lg-300px mw-300px mw-md-400px mw-xl-450px"
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
												click to upload.
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
							<div
								class="border-dashed py-2 order-lg-1 order-2 mb-lg-5 w-100 p-5 rounded border-primary mb-0 d-flex flex-row justify-content-between align-items-center"
							>
								<i
									class="ki-duotone ki-flash-circle fs-4x text-success me-4"
								>
									<span class="path1"></span>
									<span class="path2"></span>
								</i>
								<div class="d-flex flex-column">
									<span class="fw-bold fs-5 text-primary"
										>Minting fee
									</span>
									<div class="fs-2 fw-bold text-end">
										{{ settings.mintingFee }}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="col-12 col-lg-6">
				<div
					class="card card-stretch border-0 card-flush bg-transparent"
				>
					<!--begin::Body-->
					<div class="card-body">
						<form class="form" @submit.prevent="saveFile()">
							<div
								v-if="collections.length > 0"
								class="mb-5 order-lg-1 order-2"
							>
								<label for="" class="form-label"
									>Pick Collection</label
								>
								<select
									required
									v-model="form.collectionId"
									class="form-control"
									name=""
								>
									<option
										v-for="col in collections"
										:value="col.id"
										:key="col.id"
									>
										{{ col.name }}
									</option>
								</select>
							</div>
							<div v-else class="mb-5">
								<div class="text-info text-sm fw-semibold">
									Don't own a collection?
								</div>
								<NuxtLink
									to="/studio/create-collection"
									class="border border-2 rounded mt-3 d-flex align-items-center p-3 fw-bold fs-6"
								>
									<i
										class="ki-solid ki-plus-square fs-2 me-2"
									></i>
									Create collection
								</NuxtLink>
							</div>
							<div class="mb-5">
								<label for="" class="form-label">Name</label>
								<input
									required
									placeholder="Preferred nft name"
									type="text"
									class="form-control form-control-solid"
									v-model="form.name"
								/>
							</div>
							<div class="mb-5 order-lg-1 order-2">
								<label for="" class="form-label"
									>Category</label
								>
								<select
									required
									v-model="form.category"
									class="form-control"
									name=""
								>
									<option value="art">Art</option>
									<option value="music">Music</option>
									<option value="photography">
										Photography
									</option>
									<option value="gaming">Gaming</option>
								</select>
							</div>
							<div class="mb-5">
								<label for="" class="form-label"
									>Items available</label
								>
								<input
									required
									placeholder="Supply"
									type="number"
									class="form-control form-control-solid"
									v-model="form.supply"
								/>
							</div>
							<div class="mb-5">
								<label for="" class="form-label">Price</label>
								<input
									required
									placeholder="0.000"
									type="text"
									class="form-control form-control-solid"
									v-model="form.price"
								/>
							</div>

							<div class="mb-5">
								<label for="" class="form-label"
									>Description</label
								>
								<textarea
									class="form-control"
									v-model="form.desc"
								></textarea>
							</div>
							<div>
								<button
									:disabled="loading || !form.collectionId"
									type="submit"
									class="btn btn-primary w-100"
								>
									<span v-if="!loading">Create NFT</span>
									<span v-else class="">
										Processing...
										<span
											class="spinner-border spinner-border-sm ms-2"
										></span>
									</span>
								</button>
							</div>
						</form>
					</div>
					<!--end::Body-->
				</div>
			</div>
		</div>
	</div>
</template>
