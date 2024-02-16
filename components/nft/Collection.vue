<script setup>
	// const props = defineProps<{ user: IUser }>();

	defineProps({
		collection: {
			required: true,
		},
	});
</script>
<template>
	<div class="card hover-elevate-up hover-slide card-stretch h-100">
		<NuxtLink
			:to="'/category/' + collection.category"
			class="card-body p-0 h-100"
		>
			<NuxtImg
				@click="open(collection.name)"
				:src="collection.image"
				alt=""
				class="w-100 h-200px rounded-top"
			/>
		</NuxtLink>
		<div class="card-footer p-4 py-5">
			<NuxtLink :to="'/asset/collection/' + collection.name">
				<h5 class="mb-2 fs-4 d-flex align-items-center">
					{{ collection.name }}
					<i
						class="ki-outline ki-check-circle text-success fs-2 ms-3"
					>
					</i>
				</h5>
				<div class="d-flex justify-content-between">
					<div class="d-flex flex-column">
						<div class="fs-5 text-muted">Floor</div>
						<div class="fs-4 fw-bold">
							{{ collection.floor }}
						</div>
					</div>
					<div class="d-flex flex-column">
						<div class="fs-5 text-muted">Volume</div>
						<div class="fs-4 fw-bold">
							{{ collection.volume }}
						</div>
					</div>
				</div>
			</NuxtLink>
		</div>
	</div>
</template>
