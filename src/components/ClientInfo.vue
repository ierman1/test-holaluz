<template>
	<div class="info-container" v-if="client">
		<p class="title">{{ client.fullName }}</p>
		<hr>
		<p><span class="title">Address: </span>{{ client.address }}</p>
		<p><span class="title">Role: </span>{{ client.role }}</p>
		<p><span class="title">Building type: </span>{{ client.buildingType }}</p>
	</div>
</template>

<script>

export default {
	name: 'ClientInfo',
	props: ['client']
}

</script>