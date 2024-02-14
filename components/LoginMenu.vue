<script setup lang="ts">
	import axios from "axios";

	const appConfig = useRuntimeConfig();
	const form = ref({
		email: "",
		password: "",
	});

	const found = ref<boolean | null>(null);
	const findButton = ref();
	const loginButton = ref();
	const regButton = ref();

	const isInvalidCredentials = ref();
	const passwordType = ref("password");

	const toggleType = () => {
		if (passwordType.value == "password") {
			passwordType.value = "text";
		} else {
			passwordType.value = "password";
		}
	};

	const login = () => {
		const axiosConfig: any = {
			method: "get",
			url: `${useRuntimeConfig().public.BE_API}/auth/login`,
			timeout: 20000,
			// headers: {
			//     Authorization: "Bearer " + useAuth().userData.value?.token,
			// },
		};

		regButton.value.setAttribute("data-kt-indicator", "on");

		axios
			.request(axiosConfig)
			.then((response) => {})
			.catch((error): void => {
				const errRes = error.response;
				console.log("Status: ", errRes?.status);
				if (
					errRes?.status !== null &&
					(errRes?.status === 401 || errRes?.status === 404)
				) {
					isInvalidCredentials.value = errRes.data.message;
					console.log(error.message);
				} else errorAlert("Error occurred, check your internet!");
				console.log(error);
			})
			.finally(() => {
				loginButton.value.removeAttribute("data-kt-indicator");
			});
	};

	const createAccount = () => {
		const axiosConfig: any = {
			method: "get",
			url: `${useRuntimeConfig().public.BE_API}/auth/login`,
			timeout: 20000,
			// headers: {
			//     Authorization: "Bearer " + useAuth().userData.value?.token,
			// },
		};

		regButton.value.setAttribute("data-kt-indicator", "on");

		axios
			.request(axiosConfig)
			.then((response) => {})
			.catch((error): void => {
				console.log(error);
			})
			.finally(() => {
				regButton.value.removeAttribute("data-kt-indicator");
			});
	};

	const find = () => {
		const axiosConfig: any = {
			method: "post",
			data: form.value,
			url: `${appConfig.public.BE_API}/auth/find`,
			timeout: 15000,
		};

		findButton.value.setAttribute("data-kt-indicator", "on");

		axios
			.request(axiosConfig)
			.then((response) => {
				found.value = true;
			})
			.catch((error): void => {
				found.value = false;
				console.log(error);
			})
			.finally(() => {
				findButton.value.removeAttribute("data-kt-indicator");
			});
	};
</script>
<template>
	<div class="modal fade" tabindex="-1" id="kt_modal_login">
		<div class="modal-dialog modal-dialog-centered">
			<div class="modal-content w-300px mx-auto">
				<div class="modal-header border-0 position-relative">
					<div class="d-flex flex-column modal-title w-100">
						<div
							class="fw-bold position-relative d-flex align-items-center justify-content-center fs-5"
						>
							<NFTexLogoMini></NFTexLogoMini>
							<span
								class="badge badge-light-success fw-bold fs-8 px-2 py-1 ms-20 mb-5 position-absolute bottom-0"
								>Pro</span
							>
						</div>

						<a
							href="#"
							class="fw-bold text-center text-primaryi text-hover-primary fs-5"
						>
							NFTex
						</a>
					</div>

					<!--begin::Close-->
					<div
						class="btn btn-icon btn-icon-danger btn-sm btn-active-light-primary ms-2 end-0 position-absolute top-0 m-4"
						data-bs-dismiss="modal"
						aria-label="Close"
					>
						<i class="ki-duotone ki-cross fs-3x"
							><span class="path1"></span
							><span class="path2"></span
						></i>
					</div>
					<div
						@click="found = null"
						v-if="found !== null"
						class="btn btn-icon btn-sm btn-active-light-primary fw-bold start-0 position-absolute top-0 m-4"
						aria-label="Close"
					>
						<i class="ki-solid ki-left fs-3x"></i>
					</div>
					<!--end::Close-->
				</div>

				<div class="modal-body">
					<form v-if="found" @submit.prevent="login()">
						<div class="px-5 menu-item mb-3">
							<input
								disabled
								type="email"
								class="form-control form-control-solid"
								v-model="form.email"
								name="email"
							/>
						</div>
						<div class="px-5 menu-item mb-3">
							<label for="" class="form-label">Password</label>
							<div
								class="d-flex align-items-center position-relative"
								bis_skin_checked="1"
							>
								<button
									class="btn position-absolute ms-3 bg-body"
								>
									<i
										v-if="passwordType == 'password'"
										class="ki-outline ki-eye fs-3"
									></i>
								</button>
								<input
									:type="passwordType"
									id="kt_filter_search"
									class="form-control form-control-solid pe-10 w-100"
									placeholder="password"
									v-model="form.password"
								/>
							</div>
						</div>

						<!--begin::Menu item-->
						<div class="menu-item px-5">
							<button
								ref="loginButton"
								class="btn btn-secondary w-100"
							>
								<span class="indicator-label"> Login </span>
								<!--end::Indicator label-->

								<!--begin::Indicator progress-->
								<span class="indicator-progress">
									Please wait...
									<span
										class="spinner-border align-middle ms-2"
									></span>
								</span>
							</button>
						</div>
					</form>
					<form
						v-else-if="found === false"
						@submit.prevent="createAccount()"
					>
						<div class="px-5 menu-item mb-3">
							<input
								disabled
								type="email"
								class="form-control form-control-solid"
								v-model="form.email"
								name="email"
							/>
						</div>
						<div class="px-5 menu-item mb-3">
							<label for="" class="form-label">Password</label>
							<div
								class="d-flex align-items-center position-relative"
								bis_skin_checked="1"
							>
								<input
									:type="passwordType"
									id="kt_filter_search"
									class="form-control form-control-solid pe-10 w-100"
									placeholder="password"
									v-model="form.password"
								/>

								<button
									@click.prevent="toggleType()"
									type="button"
									class="btn position-absolute btn-active-icon-danger me-3 bg-transparent p-0 end-0"
								>
									<i
										v-if="passwordType == 'password'"
										class="ki-outline ki-eye fs-3 hover-scale"
									></i>
									<i
										v-else
										class="ki-outline ki-eye-slash fs-3 hover-scale"
									></i>
								</button>
							</div>
						</div>

						<!--begin::Menu item-->
						<div class="menu-item px-5">
							<button
								ref="regButton"
								class="btn btn-secondary w-100"
							>
								<span class="indicator-label">
									Create account
								</span>
								<!--end::Indicator label-->

								<!--begin::Indicator progress-->
								<span class="indicator-progress">
									Please wait...
									<span
										class="spinner-border align-middle ms-2"
									></span>
								</span>
							</button>
						</div>
					</form>

					<form v-if="found == null" @submit.prevent="find()">
						<div class="px-5 menu-item mb-3">
							<input
								v-model="form.email"
								type="email"
								class="form-control"
								name="email"
							/>
						</div>

						<!--begin::Menu item-->
						<div class="menu-item px-5">
							<button
								ref="findButton"
								class="btn btn-secondary w-100"
							>
								<!--begin::Indicator label-->
								<span class="indicator-label"> Proceed </span>
								<!--end::Indicator label-->

								<!--begin::Indicator progress-->
								<span class="indicator-progress">
									<!-- Please wait... -->
									<span
										class="spinner-border align-middle ms-2"
									></span>
								</span>
								<!--end::Indicator progress-->
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>
</template>
