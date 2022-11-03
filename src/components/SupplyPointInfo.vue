<template>
	<ul v-if="supplyPoint">
		<li>{{ supplyPoint.tariff }}</li>
		<li>{{ supplyPoint.invoicedAmount }}</li>
		<li>{{ supplyPoint.power }}</li>
		<li>{{ supplyPoint.neighbors }}</li>
	</ul>
</template>

<script>

export default {
	name: 'SupplyPointInfo',
	props: ['supplyPoint']
}

</script>