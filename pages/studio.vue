<script setup lang="ts">
	const auth = useAuth();
	if (!auth.isAuthenticated()) {
		auth.logout();
	}
</script>

<template>
    <NuxtPage></NuxtPage>
</template>