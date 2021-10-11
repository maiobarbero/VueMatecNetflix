<template>
	<div>
		<b-card
			:title="movie.title"
			:img-src="movie.info.image_url"
			:img-alt="movie.title"
			img-top
			tag="article"
			style="max-width: 20rem;"
			class="mb-3 card"
			bg-variant="dark"
			text-variant="light"
		>
			<div class="d-flex justify-content-between">
				<b-button v-b-modal="movie.title" class="btn-red">More</b-button>
				<b-modal
					:id="movie.title"
					title="Dettagli film"
					ok-only
					ok-variant="outline-danger"
				>
					<h3>{{ movie.title }}</h3>
					<p>Regista: {{ movie.info.directors }}</p>
					<p>Attori: {{ movie.info.actors }}</p>
					<p>Trama: {{ movie.info.plot }}</p>
				</b-modal>
				<b-button
					v-if="!isFavorites"
					class="btn-red"
					@click="addToFavorites"
					:disabled="disable"
					><b-icon icon="heart-fill" aria-hidden="true" variant="white"></b-icon
				></b-button>
			</div>
		</b-card>
	</div>
</template>

<script>
export default {
	name: "MovieCard",
	props: ["movie"],
	data() {
		return {
			disable: false,
		};
	},
	computed: {
		isFavorites() {
			return this.$route.name === "Preferiti";
		},
	},
	methods: {
		addToFavorites() {
			if (!this.disable) {
				this.disable = true;
			}
			this.$store.commit("PREFERITI", this.movie);
		},
	},
};
</script>

<style scoped></style>
