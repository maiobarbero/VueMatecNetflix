<template>
	<div id="elenco">
		<b-container>
			<b-row class="mx-auto">
				<b-col
					cols="12"
					md="6"
					lg="4"
					xl="2"
					v-for="movie in movies"
					:key="movie.title + movie.year"
				>
					<MovieCard :movie="movie" />
				</b-col>
			</b-row>
		</b-container>
	</div>
</template>

<script>
import MovieCard from "../components/MovieCard.vue";

export default {
	name: "Elenco",
	components: { MovieCard },
	computed: {
		movies: function() {
			return this.$store.state.movies;
		},
	},
};
</script>

<style></style>
