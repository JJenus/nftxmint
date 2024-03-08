<script setup>
	const myCollections = useCollections();

	const navs = ref([
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
	]);
	const route = useRoute();

	const active = ref("all");
	const showNav = ref(false);
	const show = (nav) => {
		if (nav === "Art") {
			return myCollections.art.value.length;
		} else if (nav === "Music") {
			return myCollections.music.value.length;
		} else if (nav === "Photography") {
			return myCollections.photography.value.length;
		} else if (nav === "Gaming") {
			return myCollections.gaming.value.length;
		} else {
			return 8;
		}
	};

	onMounted(() => {
		const paths = route.path.split("/");
		if (paths[2]) {
			active.value = paths[2];
			showNav.value =
				active.value == "all" ||
				active.value == "music" ||
				active.value == "art" ||
				active.value == "photography";

			console.log("Show navs: " + showNav.value);
		} else if (!paths[1]) {
			active.value = "all";
			showNav.value = true;
		}
	});
</script>

<template>
	<div class="">
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
						v-if="show(nav.name) > 0"
						class="nav-link w-100 bg-transparent btn btn-color-white btn-active-color-white btn-active-light btn-sm"
						:class="
							active == nav.name.toLowerCase() ? 'active' : ''
						"
						:to="nav.path"
					>
						<span class="d-flex flex-column align-items-start">
							<span class="fs-4 fw-bold">{{ nav.name }}</span>
						</span>
					</NuxtLink>
				</li>
			</ul>
		</div>
	</div>
</template>
