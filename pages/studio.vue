<script setup lang="ts">
	const auth = useAuth();
	if (!auth.isAuthenticated()) {
		auth.logout();
	}

	const CONFIG = useRuntimeConfig().public;

	useSeoMeta({
		title: `${CONFIG.APP} - Studio`,
	});
</script>

<template>
    <NuxtPage></NuxtPage>
</template>