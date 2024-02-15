<script setup>
	const created = ref([]);
	definePageMeta({
		middleware: "auth",
	});
</script>

<template>
	<div>
		<div
			v-if="created.length < 1"
			class="min-h-300px rounded border border-primary d-flex align-items-center justify-content-center"
		>
			<h1>No collected found</h1>
		</div>
	</div>
</template>
