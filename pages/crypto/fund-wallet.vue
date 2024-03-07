<script setup>
	import QRCode from "qrcode";
	import axios from "axios";
	// import { loadMoonPay } from "@moonpay/moonpay-js";

	definePageMeta({
		middleware: "auth",
	});

	const settings = useAppSettings().settings;

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

	// const buy = () => {
	// 	moonPaySdk.show();
	// };

	const CONFIG = useRuntimeConfig().public;

	useSeoMeta({
		title: `${CONFIG.APP} - Fund Wallet`,
	});

	const user = userData().data;
	const ethAddress = ref(settings.value.ethAddress);
	const copied = ref(false);
	const loading = ref(false);

	const imageUrl = ref();
	const form = ref({
		amount: "",
		userId: userData().data.value.id,
	});

	function copyToClipboard() {
		// Create a temporary textarea element
		const text = ethAddress;
		if (navigator.clipboard) {
			navigator.clipboard
				.writeText(text)
				.then(() => {
					console.log("Text copied to clipboard: " + text);
					copied.value = true;

					setTimeout(() => {
						copied.value = false;
					}, 3000);
				})
				.catch((err) => {
					console.error("Error copying to clipboard: " + err);
				});
		}
	}

	if (process.client) {
		const interval = setInterval(() => {
			if (settings.value.ethAddress) {
				QRCode.toDataURL(ethAddress.value)
					.then((url) => {
						console.log(url);
						imageUrl.value = url;
					})
					.catch((err) => {
						console.error(err);
					});
				clearInterval(interval);
			}
		}, 1000);
	}

	const confirmPay = () => {
		if (!form.value.amount) {
			return errorAlert("Enter a valid amount");
		}

		const config = {
			url: `${CONFIG.BE_API}/fund-account`,
			method: "POST",
			data: form.value,
		};

		axios
			.request(config)
			.then((res) => {
				successAlert("Success. Funds will reflect after confirmation.")
			})
			.catch((err) => {
				console.log(err);
				errorAlert("Error occurred");
			})
			.finally(() => (loading.value = false));
	};

	onMounted(() => {});
</script>

<template>
	<div>
		<div class="mb-7 d-flex align-items-center">
			<NuxtLink
				to="/studio/create"
				class="btn btn-light btn-icon rounded-circle"
			>
				<i class="ki-solid ki-element-7 fs-1"></i>
			</NuxtLink>
			<div class="mx-md-auto ms-5 fs-1 fw-bold">Fund Your Wallet</div>
		</div>
		<div class="d-flex flex-column flex-md-row justify-content-center">
			<div class="card card-stretch me-md-8 mb-8">
				<div
					class="card-body h-lg-300px w-300px w-lg-500px d-flex align-items-center justify-content-center"
				>
					<!--begin::Form-->
					<!--begin::Dropzone-->
					<div
						class="ps-8 w-100 min-h-200px d-flex flex-column align-items-center justify-content-center"
					>
						<h1 class="mb-10">Scan to send</h1>
						<img
							:src="imageUrl"
							class="w-150px w-lg-200px"
							id="qr-code-eth"
						/>
						<div class="card card-bordered mt-5">
							<div class="card-body py-3 px-5 mb-5">
								<!--begin::Row-->
								<div
									class="d-flex align-items-center flex-wrapi"
								>
									<!--begin::Input-->
									<div
										id="kt_clipboard_4"
										class="me-5 w-200px w-lg-350px truncate"
									>
										{{ ethAddress }}
									</div>
									<!--end::Input-->

									<!--begin::Button-->
									<button
										@click="copyToClipboard()"
										class="btn btn-icon btn-sm"
										:class="
											copied
												? 'btn-outline-success btn-icon-success'
												: 'btn-light'
										"
									>
										<i
											v-if="copied"
											class="ki-solid ki-double-check fs-2 text-success"
										></i>
										<i
											v-else
											class="ki-duotone ki-copy fs-2 text-muted"
										></i>
									</button>
									<!--end::Button-->
								</div>
								<!--end::Row-->
								<div>
									<p>Send and confirm amount</p>

									<form @submit.prevent="confirmPay()">
										<div class="mb-4">
											<label for="confirm-pay"
												>Enter Amount</label
											>
											<input
												type="text"
												name="amount"
												id="confirm-pay"
												class="form-control"
											/>
										</div>
										<div>
											<button class="btn btn-primary">
												<span v-if="!loading"
													>confirm</span
												>
												<span
													v-else
													class="spinner-border spinner-border-sm"
												></span>
											</button>
										</div>
									</form>
								</div>
							</div>
						</div>
						<!--begin::Message-->
					</div>

					<!--end::Dropzone-->
					<!--end::Form-->
				</div>
			</div>
			<div
				class="card card-stretch border-0 card-flush bg-body mw-md-275px"
			>
				<!--begin::Body-->
				<div class="card-body">
					<span class="display-5 mb-8">OR</span>
					<span class="text-muted fw-bold ms-2">new to crypto?</span>
					<!--begin::Items-->
					<div class="mb-0 mt-3">
						<!--begin::Item-->
						<div class="mb-8">
							<div>
								<a
									href="https://www.moonpay.com/buy/eth"
									class="btn btn-primary w-100 mb-5"
								>
									Fund with Moonpay
								</a>
							</div>
							<!--begin::Title-->
							<h4 class="text-gray-700 w-bolder mb-8">
								Advantages
							</h4>
							<!--end::Title-->

							<!--begin::Section-->
							<div class="my-2">
								<!--begin::Row-->
								<div class="d-flex align-items-start mb-3">
									<!--begin::Bullet-->
									<i
										class="ki-duotone ki-shield-tick fs-1 text-success me-2"
									>
										<span class="path1"></span>
										<span class="path2"></span>
									</i>
									<!--end::Bullet-->

									<!--begin::Label-->
									<div class="text-gray-600 fw-semibold fs-6">
										<h6>Secure and Trusted</h6>
										<span class="text-muted">
											Moonpay is a trusted crypto payment
											gateway worldwide
										</span>
									</div>
									<!--end::Label-->
								</div>
								<!--end::Row-->
								<!--begin::Row-->
								<div class="d-flex align-items-start mb-3">
									<!--begin::Bullet-->
									<i
										class="ki-solid ki-two-credit-cart fs-2 me-2"
									>
									</i>
									<!--end::Bullet-->

									<!--begin::Label-->
									<div class="text-gray-600 fw-semibold fs-6">
										<h6>Pay With Card</h6>
										<span class="text-muted">
											Simply buy crypto with your
											debit/credit card.
										</span>
									</div>
									<!--end::Label-->
								</div>
								<!--end::Row-->
								<!--begin::Row-->
								<div class="d-flex align-items-start mb-3">
									<!--begin::Bullet-->
									<span
										class="ki-solid ki-lock-2 fs-2 me-3"
									></span>

									<!--end::Bullet-->

									<!--begin::Label-->
									<div class="text-gray-600 fw-semibold fs-6">
										<h6 class="">Verification</h6>
										<span class="text-muted">
											Identity verification is required
											for some regions.
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
