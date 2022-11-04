<template>
	<div class="search-bar-container">
		<label>Find CUPS</label>
		<div class="input-container">
			<input type="text" v-model="searchTerm" @change="updateSearchTerm">
			<button @click="updateSearchTerm">Search</button>
		</div>
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

<style lang="scss">

	.search-bar-container {
		label {
			display: block;
			font-weight: bold;
		}

		.input-container {
			display: flex;
			width: 100%;

			input {
				border: 1px solid lightgray;
				border-radius: 5px;
				font-size: 16px;
				flex-grow: 1;
				margin-top: .3rem;
				margin-right: 1rem;
				outline: none;
				padding: .5rem;
			}
		}
	}

</style>