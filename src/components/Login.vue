<template>
	<div>
		<h1 class="text-center text-white mt-5">
			Benvenuto {{ $store.state.nome_utente }}
		</h1>
		<h3 class="text-center text-white mt-5">
			Inserisci il tuo nome e scegli un avatar
		</h3>
		<b-row class="justify-content-center mt-5">
			<b-col cols="4">
				<b-form-input
					size="sm"
					class="mr-sm-2"
					placeholder="Inserisci un nome"
					value=""
					v-on:update="updateName"
				></b-form-input>
			</b-col>
		</b-row>
		<b-row class="justify-content-center mt-5 text-center">
			<b-col>
				<b-img
					thumbnail
					:src="require('@/assets/img/DmBraqkXcAA1Yco.jpeg')"
					fluid
					alt="Avatar 1"
					width="90%"
					v-on:click="selectAvatar"
				></b-img>
			</b-col>
			<b-col>
				<b-img
					width="90%"
					thumbnail
					:src="require('@/assets/img/Netflix-avatar.png')"
					fluid
					alt="Avatar 2"
					v-on:click="selectAvatar"
				></b-img
			></b-col>
			<b-col>
				<b-img
					thumbnail
					:src="require('@/assets/img/images.jpeg')"
					fluid
					alt="Avatar 3"
					width="90%"
					v-on:click="selectAvatar"
				></b-img>
			</b-col>
		</b-row>
	</div>
</template>

<script>
export default {
	name: "Login",
	methods: {
		updateName: function(e) {
			this.$store.commit("NUOVONOME", e);
		},
		selectAvatar: function(e) {
			this.$store.commit("NUOVOAVATAR", e.path[0].src);
		},
	},
};
</script>

<style scoped>
h1 {
	font-weight: 900 !important;
}
</style>
