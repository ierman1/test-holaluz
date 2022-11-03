<template>
	<div class="search-bar-container">
		<label>Find CUPS</label>
		<input type="text" v-model="searchTerm" @change="updateSearchTerm">
	</div>
</template>

<script>

export default {
	name: 'SearchBar',
	data() {
		return {
			searchTerm: ''
		}
	},
	methods: {
		updateSearchTerm() {
			this.$emit('updatingSearchTerm', this.searchTerm);
		}
	}
}

</script>