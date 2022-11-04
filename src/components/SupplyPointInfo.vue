<template>
	<div class="info-container" v-if="supplyPoint">
		<p class="title">Supply point</p>
		<hr>
		<p><span class="title">Tariff: </span>{{ supplyPoint.tariff }}</p>
		<p><span class="title">Invoiced amount: </span>{{ supplyPoint.invoicedAmount }}</p>
		<p><span class="title">Power: </span>{{ supplyPoint.power.p1 }} / {{ supplyPoint.power.p2 }}</p>
	</div>
</template>

<script>

export default {
	name: 'SupplyPointInfo',
	props: ['supplyPoint']
}

</script>