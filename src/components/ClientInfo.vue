<template>
	<ul v-if="client">
		<li>{{ client.fullName }}</li>
		<li>{{ client.address }}</li>
		<li>{{ client.role }}</li>
		<li>{{ client.buildingType }}</li>
	</ul>
</template>

<script>

export default {
	name: 'ClientInfo',
	props: ['client']
}

</script>