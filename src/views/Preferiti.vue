<template>
	<div id="preferiti" class="container">
		<MovieList categoria="I tuoi film preferiti" :movies="favoritesMovies" />
	</div>
</template>

<script>
import MovieList from "../components/MoviesList.vue";
export default {
	name: "Preferiti",
	components: { MovieList },
	data: function() {
		return {};
	},
	computed: {
		favoritesMovies: function() {
			return this.$store.state.favorites;
		},
	},
};
</script>

<style></style>
