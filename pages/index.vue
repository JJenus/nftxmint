<script setup>
	const active = "All";
	const navs = [
		{
			name: "All",
		},
		{
			name: "Arts",
		},
		{
			name: "Gaming",
		},
		{
			name: "Memberships",
		},
		{
			name: "Photography",
		},
		{
			name: "Music",
		},
	];
</script>

<template>
	<div id="kt_app_content_container" class="app-container container-fluid">
		<div class="mb-5">
			<ul
				class="nav nav-tabs nav-pills d-flex overflow-scroll border-0 me-5 mb-3 mb-md-0 fs-6 min-w-lg-200px"
			>
				<li v-for="nav in navs" class="nav-item me-08 mb-md-2">
					<a
						class="nav-link w-100 bg-transparent btn btn-color-white btn-active-color-white btn-active-light btn-sm"
						data-bs-toggle="tab"
						:class="active == nav.name ? 'active' : ''"
						href="#kt_vtab_pane_4"
					>
						<span class="d-flex flex-column align-items-start">
							<span class="fs-4 fw-bold">{{ nav.name }}</span>
						</span>
					</a>
				</li>
			</ul>
		</div>
		<!--begin::Card-->
		<div class="card mb-10">
			<!--begin::Card body-->
			<div class="card-body min-h-300px"></div>
			<!--end::Card body-->
		</div>
		<div class="card mb-10">
			<!--begin::Card body-->
			<div class="card-body min-h-300px"></div>
			<!--end::Card body-->
		</div>
		<div class="card mb-10">
			<!--begin::Card body-->
			<div class="card-body min-h-300px"></div>
			<!--end::Card body-->
		</div>
		<!--end::Card-->
	</div>
</template>
