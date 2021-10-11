import Vue from "vue";
import Vuex from "vuex";

// Import dei film
import data from "../assets/moviedata.json";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		nome_utente: "visitatore",
		avatar: "",
		movies: data,
		searched: [],
		favorites: [],
	},
	mutations: {
		NUOVONOME: function(state, name) {
			state.nome_utente = name;
		},
		NUOVOAVATAR: function(state, avatar) {
			state.avatar = avatar;
		},
		RICERCA: function(state, searched) {
			state.searched = state.movies.filter((movie) =>
				movie.title.toLowerCase().includes(searched.toLowerCase())
			);
		},
		PREFERITI: function(state, movie) {
			state.favorites.push(movie);
		},
	},
	actions: {},
	modules: {},
	getters: {
		bestMovies: (state) => {
			return state.movies.filter((movie) => movie.info.rank <= 4);
		},
		actionMovies: (state) => {
			return state.movies.filter((movie) =>
				movie.info.genres.includes("Action")
			);
		},
	},
});
