<script setup>
	const login = () => {};
</script>
<template>
	<div
		class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg menu-state-color fw-semibold py-4 fs-6 w-300px"
		data-kt-menu="true"
	>
		<!--begin::Menu item-->
		<div class="menu-item px-3">
			<div class="menu-content d-flex align-items-center px-3 border-0">
				<!--begin::Username-->
				<div class="d-flex flex-column">
					<div class="fw-bold d-flex align-items-center fs-5">
						Join
						<span
							class="badge badge-light-success fw-bold fs-8 px-2 py-1 ms-2"
							>Pro</span
						>
					</div>

					<a
						href="#"
						class="fw-bold text-primary text-hover-primary fs-5"
					>
						NFTex
					</a>
				</div>
				<!--end::Username-->
			</div>
		</div>
		<!--end::Menu item-->

		<form @submit.prevent="login()">
			<div class="px-5 menu-item mb-3">
				<input type="text" class="form-control" />
			</div>

			<!--begin::Menu item-->
			<div class="menu-item px-5">
				<button class="btn btn-light-dark w-100">Join</button>
			</div>
		</form>
		<!--end::Menu item-->
	</div>
</template>
