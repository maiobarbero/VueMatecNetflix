<template>
	<div id="home">
		<Login
			v-if="
				this.$store.state.nome_utente == 'visitatore' ||
					this.$store.state.avatar == ''
			"
		/>
		<section v-else>
			<MoviesList categoria="I migliori film" :movies="bestMovies" />
			<MoviesList categoria="Film d'azione" :movies="actionMovies" />
		</section>
	</div>
</template>

<script>
import { mapGetters } from "vuex";
// Components
import Login from "../components/Login.vue";
import MoviesList from "../components/MoviesList.vue";

export default {
	name: "Home",
	components: { Login, MoviesList },
	computed: {
		movies: function() {
			return this.$store.state.movies;
		},
		...mapGetters(["bestMovies", "actionMovies"]),
	},
};
</script>

<style></style>
