import { log } from 'console'; import { verify } from 'crypto';
<script setup lang="ts">
	import { type IUser } from "~/utils/interfaces/IUser";
	import axios, {
		AxiosError,
		type AxiosRequestConfig,
		type AxiosResponse,
	} from "axios";

	const props = defineProps<{ user: IUser }>();

	const appConfig = useRuntimeConfig();
	const submitButton = ref();

	function getObject(obj: any): any {
		const newObj: { [key: string]: any } = {};

		for (const key in obj) {
			if (obj[key] !== null && key != "account") {
				newObj[key] = obj[key];
			}
		}

		return newObj;
	}

	const verify = () => {
		console.log("verifying...");
		const user = props.user;
		const data = getObject(props.user);
		data.verified = true;
		// console.log(user);

		const axiosConfig: AxiosRequestConfig = {
			method: "put",
			data: data,
			url: `${appConfig.public.BE_API}/users/${data.id}`,
			timeout: 20000,
			headers: {
				Authorization: "Bearer " + useAuth().userData.value?.token,
			},
		};

		submitButton.value.setAttribute("data-kt-indicator", "on");
		// return;
		axios
			.request(axiosConfig)
			.then((response: AxiosResponse<IUser, any>) => {
				console.log("Yes ", response.data);
				successAlert("Verified!");
				// user.verified = true;
			})
			.catch((err: AxiosError<any, any>) => {
				const errRes = err.response;
				console.log("Status: ", errRes?.status);
				errorAlert("Verification failed!");
				console.log(errRes);
			})
			.finally(() => {
				// if (!user.verified)
				submitButton.value.removeAttribute("data-kt-indicator");
			});
	};
</script>
<template>
	<div
		class="card mb-5 mb-xl-10 border-0"
		id="kt_profile_details_view"
		bis_skin_checked="1"
	>
		<!--begin::Card header-->
		<div
			class="card-header cursor-pointer align-items-center"
			bis_skin_checked="1"
		>
			<!--begin::Card title-->
			<div class="card-title m-0" bis_skin_checked="1">
				<h3 class="fw-bold m-0">Profile Details</h3>
			</div>
			<!--end::Card title-->

			<!--begin::Action-->
			<button
				ref="submitButton"
				v-if="!user?.status"
				class="btn btn-light-primary"
			>
				<!--begin::Indicator label-->
				<span class="indicator-label">
					<i class="ki-duotone ki-user-tick fs-3">
						<span class="path1"></span>
						<span class="path2"></span>
						<span class="path3"></span>
					</i>
					Verify
				</span>
				<!--end::Indicator label-->

				<!--begin::Indicator progress-->
				<span class="indicator-progress">
					Please wait...
					<span
						class="spinner-border spinner-border-sm align-middle ms-2"
					></span>
				</span>
			</button>
			<div v-else>
				<span class="bullet bullet-dot h-5px w-5px bg-gray-400"></span>
				<span
					class="bullet bullet-dot h-5px w-5px bg-gray-400 mx-2"
				></span>
				<span class="bullet bullet-dot h-5px w-5px bg-gray-400"></span>
			</div>
			<!--end::Action-->
		</div>
		<!--begin::Card header-->

		<!--begin::Card body-->
		<div class="card-body p-9" bis_skin_checked="1">
			<!--begin::Row-->
			<div class="row mb-7" bis_skin_checked="1">
				<!--begin::Label-->
				<label class="col-lg-4 fw-semibold text-muted">Full Name</label>
				<!--end::Label-->

				<!--begin::Col-->
				<div class="col-lg-8" bis_skin_checked="1">
					<span class="fw-bold fs-6 text-gray-800">
						{{ user.name ? user.name : "Unknown Collector" }}
					</span>
				</div>
				<!--end::Col-->
			</div>
			<!--end::Row-->

			<!--begin::Input group-->
			<div class="row mb-7" bis_skin_checked="1">
				<!--begin::Label-->
				<label class="col-5 col-lg-4 fw-semibold text-muted">
					Email
				</label>
				<!--end::Label-->

				<!--begin::Col-->
				<div
					class="col-7 col-lg-8 d-flex align-items-center flex-wrap"
					bis_skin_checked="1"
				>
					<span class="fw-semibold text-gray-800 fs-6 me-2">
						{{ user?.email }}</span
					>
					<span
						v-if="user?.status == 'verified'"
						class="badge badge-success"
						>Verified</span
					>
					<span v-else class="badge badge-danger">Not verified</span>
				</div>
				<!--end::Col-->
			</div>
			<!--end::Input group-->

			<!--begin::Input group-->
			<div class="row mb-7" bis_skin_checked="1">
				<!--begin::Label-->
				<label class="col-5 col-lg-4 fw-semibold text-muted">
					Contact Phone

					<span
						class="ms-1"
						data-bs-toggle="tooltip"
						aria-label="Phone number must be active"
						data-bs-original-title="Phone number must be active"
						data-kt-initialized="1"
					>
						<i class="ki-outline ki-information fs-7"></i>
					</span>
				</label>
				<!--end::Label-->

				<!--begin::Col-->
				<div class="col-7 col-lg-8 fv-row" bis_skin_checked="1">
					<span class="fw-bold fs-6 text-gray-800 me-2"
						>{{ user.phone? user.phone: "Unknown" }}
					</span>
				</div>
				<!--end::Col-->
			</div>
			<!--end::Input group-->

			<!--begin::Input group-->
			<div class="row mb-7" bis_skin_checked="1">
				<!--begin::Label-->
				<label class="col-5 col-lg-4 fw-semibold text-muted"
					>ETH Address</label
				>
				<!--end::Label-->

				<!--begin::Col-->
				<div class="col-7 col-lg-8" bis_skin_checked="1">
					<a
						role="button"
						class="fw-semibold fs-6 text-gray-800 text-hover-primary"
						>{{ user?.ethAddress }}</a
					>
				</div>
				<!--end::Col-->
			</div>
			<!--end::Input group-->

			<!--begin::Notice-->
			<div
				class="notice d-flex bg-light-warning rounded border-warning border border-dashed p-6"
				bis_skin_checked="1"
			>
				<!--begin::Icon-->
				<i
					class="ki-outline ki-information fs-2tx text-warning me-4"
				></i>
				<!--end::Icon-->

				<!--begin::Wrapper-->
				<div
					v-if="user?.status !== 'veified'"
					class="d-flex flex-stack flex-grow-1"
					bis_skin_checked="1"
				>
					<!--begin::Content-->
					<div class="fw-semibold" bis_skin_checked="1">
						<h4 class="text-gray-900 fw-bold">
							We need your attention!
						</h4>

						<div class="fs-6 text-gray-700" bis_skin_checked="1">
							>Email is not verified.
						</div>
					</div>
					<!--end::Content-->
				</div>
				<!--end::Wrapper-->
			</div>
			<!--end::Notice-->
		</div>
		<!--end::Card body-->
	</div>
</template>
