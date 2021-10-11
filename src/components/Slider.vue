<template>
	<div v-if="movies">
		<carousel
			:scrollPerPage="false"
			:perPageCustom="[
				[320, 1],
				[768, 2],
				[1024, 3],
			]"
			:autoplay="true"
			:centerMode="true"
			:loop="true"
			><slide v-for="movie in movies" :key="movie.title + movie.year">
				<MovieCard :movie="movie" />
			</slide>
		</carousel>
	</div>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";
import MovieCard from "./MovieCard.vue";

export default {
	name: "Slider",
	components: { Carousel, Slide, MovieCard },
	props: ["movies"],
};
</script>

<style></style>
