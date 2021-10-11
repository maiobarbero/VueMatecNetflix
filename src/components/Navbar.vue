<template>
	<div>
		<b-navbar toggleable="lg" type="dark" class="mx-5">
			<b-navbar-brand to="/" class="brand">MATEC</b-navbar-brand>

			<b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

			<b-collapse id="nav-collapse" is-nav class="ms-5">
				<b-navbar-nav>
					<!-- ! b-nav-item = router-link -->

					<b-nav-item to="/">Home</b-nav-item>

					<b-nav-item to="/elenco">Tutti i film</b-nav-item>

					<b-nav-item to="/ricerca">Ricerca</b-nav-item>
				</b-navbar-nav>

				<!-- Right aligned nav items -->

				<b-navbar-nav class="ms-auto">
					<router-link to="/preferiti">
						<p class="text-muted">
							{{ $store.state.nome_utente }}
						</p>
					</router-link>
					<router-link to="/preferiti">
						<b-icon
							icon="person-fill"
							aria-hidden="true"
							class=" mx-1"
							variant="muted"
						></b-icon>
					</router-link>
				</b-navbar-nav>
			</b-collapse>
		</b-navbar>
	</div>
</template>

<script>
export default {
	name: "Navbar",
};
</script>

<style scoped>
.brand {
	font-weight: 900;
	font-size: 2.5rem !important;
	color: #e50914 !important;
	letter-spacing: -0.2rem;
}
p {
	font-weight: bold;
}
.icon-profile {
	color: #fff;
}
</style>
