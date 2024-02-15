<script setup>
	definePageMeta({
		middleware: "auth",
	});
	const created = ref([]);
</script>

<template>
	<div>
		<div
			v-if="created.length < 1"
			class="min-h-300px rounded border border-primary d-flex align-items-center justify-content-center"
		>
			<h1>No created items</h1>
		</div>
	</div>
</template>
