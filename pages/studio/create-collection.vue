<script setup>
	onMounted(() => {
		if (process.client) {
			const myNftDropzone = new Dropzone(
				"#kt_dropzonejs_nft_collection_studio",
				{
					url: "https://keenthemes.com/scripts/void.php", // Set the url for your upload script location
					paramName: "file", // The name that will be used to transfer the file
					maxFiles: 1,
					maxFilesize: 5, // MB
					addRemoveLinks: true,
					autoProcessQueue: false,
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
			<div class="mx-md-auto ms-5 fs-1 fw-bold">Create Collection</div>
		</div>
		<div class="d-flex flex-column flex-md-row justify-content-center">
			<div class="cardi card-stretch me-md-8 mb-8">
				<div class="card-body">
					<!--begin::Form-->
					<form class="form" action="#" method="post">
						<!--begin::Input group-->
						<div class="fv-row">
							<!--begin::Dropzone-->
							<div
								class="dropzone w-100"
								id="kt_dropzonejs_nft_collection_studio"
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
										<h3
											class="fs-5 fw-bold text-gray-900 mb-1"
										>
											Drop image here or click to upload.
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
								/>
							</div>
							<div class="col-12 col-md-4">
								<label for="" class="form-label">Symbol</label>
								<input
									placeholder="AVS"
									type="text"
									class="form-control form-control-solid"
								/>
							</div>
						</div>
						<div>
							<button class="btn btn-primary w-100">
								Deploy collection
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
