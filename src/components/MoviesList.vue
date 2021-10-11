<template>
	<div class="container mt-5">
		<h4 class="text-white mb-4">{{ categoria }}</h4>
		<Slider :movies="movies" />
	</div>
</template>

<script>
import Slider from "./Slider.vue";

export default {
	name: "MoviesList",
	components: { Slider },
	props: ["categoria", "movies"],
};
</script>

<style></style>
