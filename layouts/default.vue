<script setup>
	const config = useRuntimeConfig().public;

	const route = useRoute();
	console.log();
	const user = userData().data;

	const active = ref("all");

	const navs = [
		{
			name: "All",
			path: "/",
		},
		{
			name: "Art",
			path: "/category/art",
		},
		{
			name: "Gaming",
			path: "/category/gaming",
		},
		{
			name: "Photography",
			path: "/category/photography",
		},
		{
			name: "Music",
			path: "/category/music",
		},
	];

	const loaded = useCookie("reload", { maxAge: 60 * 60 * 24 });
	loaded.value = false;
	const showNav = ref(false);

	onMounted(() => {
		const paths = route.path.split("/");
		if (paths[2]) {
			active.value = paths[2];
			showNav.value =
				active.value == "all" ||
				active.value == "music" ||
				active.value == "art" ||
				active.value == "photography";

				console.log("Show navs: "+showNav.value);
		} else if(!paths[1]) {
			active.value = "all";
			showNav.value = true;
		}
	});
</script>

<template>
	<div
		id="kt_app_body"
		data-kt-app-header-fixed-mobile="true"
		data-kt-app-sidebar-enabled="true"
		data-kt-app-sidebar-push-header="true"
		data-kt-app-sidebar-push-toolbar="true"
		data-kt-app-sidebar-push-footer="true"
		class="app-default w-100 overflow-hidden"
	>
		<!--begin::App-->
		<div class="d-flex flex-column flex-root app-root" id="kt_app_root">
			<!--begin::Page-->
			<div
				class="app-page flex-column flex-column-fluid"
				id="kt_app_page"
			>
				<!--begin::Header-->
				<Header />
				<!--end::Header-->
				<!--begin::Wrapper-->
				<div
					class="app-wrapper flex-column flex-row-fluid"
					id="kt_app_wrapper"
				>
					<!--begin::Main-->
					<div
						class="app-main flex-column flex-row-fluid"
						id="kt_app_main"
					>
						<!--begin::Content wrapper-->
						<div class="d-flex flex-column flex-column-fluid">
							<!--begin::Content-->
							<div
								id="kt_app_content"
								class="app-content flex-column-fluid"
							>
								<div v-if="showNav === true" class="mb-3 container">
									<div class="hover-scroll-x hide-scrollbar">
										<ul
											class="nav nav-tabs nav-pills d-flex flex-nowrap border-0 me-5 mb-3 mb-md-0 fs-6 min-w-lg-200px"
										>
											<li
												v-for="nav in navs"
												class="nav-item me-08 mb-md-2"
												@click="active = nav.name"
											>
												<NuxtLink
													class="nav-link w-100 bg-transparent btn btn-color-white btn-active-color-white btn-active-light btn-sm"
													:class="
														active ==
														nav.name.toLowerCase()
															? 'active'
															: ''
													"
													:to="nav.path"
												>
													<span
														class="d-flex flex-column align-items-start"
													>
														<span
															class="fs-4 fw-bold"
															>{{
																nav.name
															}}</span
														>
													</span>
												</NuxtLink>
											</li>
										</ul>
									</div>
								</div>

								<!--begin::Content container-->
								<div
									style="position: relative"
									id="kt_app_content_container"
									class="app-container position-relative"
								>
									<slot />
								</div>
								<!--end::Content container-->
							</div>
							<!--end::Content-->
						</div>
						<!--end::Content wrapper-->

						<!--begin::Footer-->
						<Footer />
						<!--end::Footer-->
					</div>
					<!--end:::Main-->
				</div>
				<!--end::Wrapper-->
			</div>
			<!--end::Page-->
		</div>
		<!--end::App-->

		<!--begin::Scrolltop-->
		<div id="kt_scrolltop" class="scrolltop" data-kt-scrolltop="true">
			<i class="ki-outline ki-arrow-up"></i>
		</div>
		<!--end::Scrolltop-->

		<!--begin::View component-->
		<MobileNav class="d-lg-none" />
		<!--end::View component-->
	</div>
</template>

<style scoped>
	.hide-scrollbar {
		scrollbar-width: none; /* Firefox */
		-ms-overflow-style: none; /* IE and Edge */
	}

	.hide-scrollbar::-webkit-scrollbar {
		display: none; /* WebKit (Chrome, Safari, etc.) */
	}
</style>
