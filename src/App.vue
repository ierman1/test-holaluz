<template>
	<main>
		<SearchBar
			@updatingSearchTerm="newValue => searchTerm = newValue"></SearchBar>
		<CupsInfo :searchTerm="searchTerm"></CupsInfo>
	</main>
</template>

<script>

import SearchBar from "@/components/SearchBar";
import CupsInfo from "@/components/CupsInfo";

export default {
	name: 'App',
	components: {
		CupsInfo,
		SearchBar
	},
	data() {
		return {
			searchTerm: ''
		}
	}
}

</script>

<style lang="scss">

	body, html, #app {
		min-height: 100vh;
		margin: 0;
		padding: 0;
		width: 100vw;
	}

	html * {
		box-sizing: border-box;
	}

	#app {
		background-color: whitesmoke;
		display: flex;
		justify-content: center;
	}

	main {
		display: inline-block;
		font-family: Arial;
		padding: 2rem;
		width: 100%;

		@media (min-width: 480px) {
			width: 80%;
		}

		@media (min-width: 800px) {
			width: 50%;
		}

		@media (min-width: 1200px) {
			width: 30%;
		}
	}

</style>
