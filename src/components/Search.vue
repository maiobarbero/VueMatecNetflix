<template>
	<div>
		<b-nav-form class="d-flex justify-content-center align-items-cente mb-5">
			<b-form-input
				size="mdm"
				class="mr-sm-2 input"
				placeholder="Search"
				v-on:update="getSearchedMovies"
			></b-form-input>
			-->

			<b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
		</b-nav-form>
		<b-row class="mx-auto">
			<b-col
				v-for="movie in searchedMovies"
				:key="movie.title + movie.year"
				cols="12"
				md="6"
				lg="4"
				xl="2"
			>
				<MovieCard :movie="movie" />
			</b-col>
		</b-row>
	</div>
</template>

<script>
import MovieCard from "./MovieCard.vue";

export default {
	name: "Search",
	components: { MovieCard },
	methods: {
		getSearchedMovies: function(e) {
			this.$store.commit("RICERCA", e);
		},
	},
	computed: {
		searchedMovies: function() {
			return this.$store.state.searched;
		},
	},
};
</script>

<style scoped>
form {
	display: flex !important;
}
</style>
