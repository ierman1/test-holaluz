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

</style>
