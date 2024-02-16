<script setup lang="ts">
	const config = useRuntimeConfig().public;
	const auth = useAuth();
	const user = userData().data;
</script>

<template>
	<div
		id="kt_app_header"
		class="app-header d-flex border-0 py-10"
		:data-kt-sticky="true"
		data-kt-sticky-name="app-header-sticky"
		data-kt-sticky-offset="{default: 'false', lg: '300px'}"
	>
		<!--begin::Header container-->
		<div
			class="app-container container-fluid d-flex align-items-stretch justify-content-between"
			id="kt_app_header_container"
		>
			<!--begin::Logo-->
			<div class="d-flex d-lg-none align-items-center me-auto">
				<NFTexLogo :classes="'h-40px ms-n3'" />
			</div>

			<div class="d-none d-lg-flex align-items-center">
				<NFTexLogo :classes="'h-60px'" />
			</div>
			<!--end::Logo-->

			<!--begin::Page title-->
			<div
				class="d-none d-lg-flex align-items-center position-relative me-4"
				bis_skin_checked="1"
			>
				<i
					class="ki-outline ki-magnifier fs-3 position-absolute ms-3"
				></i>
				<input
					type="text"
					id="kt_filter_search_header"
					class="form-control form-control-solid w-450px ps-10"
					placeholder="Search"
				/>
			</div>

			<!--end::Page title-->

			<!--begin::Navbar-->
			<div class="app-navbar flex-shrink-0" id="kt_app_aside_navbar">
				<!--begin::Login-->
				<div class="app-navbar-item ms-n3w">
					<!--begin::Menu- wrapper-->
					<div
						v-if="!auth.isAuthenticated()"
						class="btn btn-secondary btn-custom fw-bold btn-active-light btn-active-color-white btn-color-white"
						data-bs-toggle="modal"
						data-bs-target="#kt_modal_login"
					>
						<i class="ki-outline ki-entrance-left fs-2"></i> Login
					</div>

					<div v-else>
						<div
							class="btn btn-secondary btn-custom fw-bold btn-active-light btn-active-color-white btn-color-white"
							data-kt-menu-trigger="{default: 'click', lg: 'hover'}"
							data-kt-menu-attach="parent"
							data-kt-menu-placement="bottom"
						>
							<i
								class="fa-brands fa-ethereum fs-2 text-warning me-1"
							></i>
							<span class="pb-5"> {{ user.balance }} ETH </span>
						</div>
						<BalanceDropdown />
					</div>
					<!--end::Menu wrapper-->
				</div>
				<!--end::Login-->

				<!--begin::Search-->
				<div class="app-navbar-item d-flex d-none d-lg-none ms-5">
					<!--begin::Drawer toggle-->
					<div
						class="btn btn-custom fw-bold btn-active-color-white btn-color-white btn-icon w-40px h-40px"
						id="kt_activities_toggle"
					>
						<i class="ki-outline ki-magnifier fs-2x"></i>
					</div>
					<!--end::Drawer toggle-->
				</div>
				<!--end::Search-->

				<!--begin::User menu-->
				<div
					class="app-navbar-item mx-3 ms-lg-1"
					id="kt_header_user_menu_toggle"
				>
					<!--begin::Menu wrapper-->

					<div
						class="cursor-pointer d-nonei d-lg-block symbol symbol-circle ms-2 symbol-35px symbol-lg-50px ms-0 ms-lg-3"
						data-kt-menu-trigger="{default: 'click', lg: 'hover'}"
						data-kt-menu-attach="parent"
						data-kt-menu-placement="bottom-end"
					>
						<!--begin::Drawer toggle-->
						<div
							v-if="!auth.isAuthenticated()"
							class="btn btn-secondary btn-custom fw-bold btn-active-light btn-active-color-white btn-color-white btn-icon w-35px h-35px w-md-40px h-md-40px"
						>
							<i class="ki-outline ki-profile-circle fs-2x"></i>
						</div>
						<img
							v-else
							:src="
								user.profileImg
									? user.profileImg
									: 'https://robohash.org/nftexchaing-user.png'
							"
							alt="user"
							class="border border-info border-2"
						/>
						<!--end::Drawer toggle-->
					</div>

					<!--begin::User account menu-->
					<UserDropdown />
					<!--end::User account menu-->
					<!--end::Menu wrapper-->
				</div>
				<!--end::User menu-->

				<!--begin::Cart-->
				<div
					class="app-navbar-item d-none d-lg-flexi justify-content-end flex-grow-1 ms-1 ms-lg-3"
				>
					<!--begin::Drawer toggle-->
					<div
						class="btn btn-secondary btn-custom fw-bold btn-active-light btn-active-color-white btn-color-white btn-icon w-40px h-40px"
						id="kt_activities_toggle"
					>
						<i class="ki-outline ki-handcart fs-2x"></i>
					</div>
					<!--end::Drawer toggle-->
				</div>
				<!--end::Cart-->

				<!--end::Quick links-->
			</div>
			<!--end::Navbar-->

			<!--begin::Sidebar toggle-->
			<div
				class="d-flex d-lg-none align-items-center me-n1 ms-3"
				title="Show sidebar menu"
			>
				<button
					class="btn btn-icon btn-icon-white btn-active-icon-white btn-active-color-white w-35px h-35px"
					id="kt_app_sidebar_mobile_toggle"
				>
					<i class="ki-solid ki-burger-menu-5 fs-3x"></i>
				</button>
			</div>
			<!--end::Sidebar toggle-->
		</div>
		<!--end::Header container-->
	</div>
</template>

<style>
	.glass-container {
		background: rgba(
			255,
			255,
			255,
			0.2
		); /* Adjust the alpha value for transparency */
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.9); /* Optional: Add a subtle shadow */
	}
</style>
