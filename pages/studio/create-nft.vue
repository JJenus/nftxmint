<script setup>
	import axios from "axios";

	const CONFIG = useRuntimeConfig().public;
	const currentPage = "Mint NFT";
	const collections = useCollections().userCollections;

	useSeoMeta({
		title: `${CONFIG.APP} - ${currentPage}`,
	});

	const inputSelect = ref();
	const imageUrl = ref();

	const form = ref({
		name: "",
		category: "",
		supply: 1,
		nftImg: "",
		collectionId: "",
		price: "",
		userId: userData().data.value.id,
	});

	const saveFile = () => {
		const file = imageUrl.value;
		if (!file) {
			return errorAlert("Select an image");
		}
		const formData = new FormData();
		formData.append("file", file);
		formData.append("upload_preset", "ml_default");

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
		<div class="row g-8 justify-content-center">
			<div class="col-12 col-lg-6">
				<div class="fs-3 fw-semibold mb-5">
					Once your item is minted you will not be able to change any
					of its information.
				</div>

				<div
					class="border-dashed py-2 oder-lg-2 order-1 w-100 p-5 rounded border-primary mb-5 d-flex flex-row justify-content-between align-items-center"
				>
					<div>
						<div class="d-flex flex-column mb-4">
							<span class="fw-bold">Minting fee </span>
							<div class="fs-2 fw-bold">100</div>
						</div>
					</div>
					<i
						class="fa-brands fa-ethereum fs-3x text-warning me-4"
					></i>
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
								class="mh-250px mh-lg-300px mw-300px mw-lg-500px"
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
						<div
							v-if="collections.length > 0"
							class="mb-5 order-lg-1 order-2"
						>
							<label for="" class="form-label"
								>Pick Collection</label
							>
							<select v-model="form.collectionId" class="form-control" name="" id="">
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
								placeholder="Preferred nft name"
								type="text"
								class="form-control form-control-solid"
							/>
						</div>
						<div class="mb-5">
							<label for="" class="form-label"
								>Items available</label
							>
							<input
								placeholder="Supply"
								type="text"
								class="form-control form-control-solid"
							/>
						</div>

						<div class="mb-5">
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
