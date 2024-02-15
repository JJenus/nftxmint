<script setup>
	definePageMeta({
		middleware: "auth",
	});
	onMounted(() => {
		if (process.client) {
			const myDropzone = new Dropzone(
				"#kt_dropzonejs_nft_single_studio",
				{
					url: "https://keenthemes.com/scripts/void.php", // Set the url for your upload script location
					paramName: "file", // The name that will be used to transfer the file
					maxFiles: 1,
					maxFilesize: 5, // MB
					addRemoveLinks: true,
					autoProcessQueue: false,
					thumbnailWidth: 500,
					thumbnailHeight: 500,
					createImageThumbnails: true,
					accept: function (file, done) {
						console.log("Yes");
						if (file.name == "wow.jpg") {
							done("Naha, you don't.");
						} else {
							done();
						}
					},
				}
			);
		}
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
				<div class="fs-3 fw-semibold mb-8">
					Once your item is minted you will not be able to change any
					of its information.
				</div>

				<form class="form" action="#" method="post">
					<!--begin::Input group-->
					<div class="fv-row">
						<!--begin::Dropzone-->
						<div
							class="dropzone w-100 min-h-300px d-flex align-items-center justify-content-center"
							id="kt_dropzonejs_nft_single_studio"
						>
							<!--begin::Message-->
							<div class="dz-message needsclick">
								<i
									class="ki-duotone ki-file-up fs-3x text-primary"
									><span class="path1"></span
									><span class="path2"></span
								></i>

								<!--begin::Info-->
								<div class="ms-4">
									<h3 class="fs-5 fw-bold text-gray-900 mb-1">
										Drop image here or click to upload.
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
							<button class="btn btn-primary w-100">
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
