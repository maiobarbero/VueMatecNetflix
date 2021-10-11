import Vue from "vue";
import VueRouter from "vue-router";

// TODO import delle views
import Home from "../views/Home.vue";
import Elenco from "../views/Elenco.vue";
import Ricerca from "../views/Ricerca.vue";
import Preferiti from "../views/Preferiti.vue";
// Vue Router
Vue.use(VueRouter);

export default new VueRouter({
	routes: [
		{
			path: "/",
			name: "Home",
			component: Home,
		},
		{
			path: "/elenco",
			name: "Elenco",
			component: Elenco,
		},
		{
			path: "/ricerca",
			name: "Ricerca",
			component: Ricerca,
		},
		{
			path: "/preferiti",
			name: "Preferiti",
			component: Preferiti,
		},
	],
});
