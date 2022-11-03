<template>
	<div class="supply-point-list-container">
		<ClientInfo :client="client"></ClientInfo>
		<SupplyPointInfo :supplyPoint="supplyPoint"></SupplyPointInfo>
		<span class="error" v-if="!client && !supplyPoint">CUPS not found.</span>
	</div>
</template>

<script>

import ClientInfo from "@/components/ClientInfo";
import SupplyPointInfo from "@/components/SupplyPointInfo";

import Client from "@/models/Client";
import SupplyPoint from "@/models/SupplyPoint";

export default {
	name: 'CupsInfo',
	components: {
		SupplyPointInfo,
		ClientInfo
	},
	props: ['searchTerm'],
	data() {
		return {
			client: null,
			supplyPoint: null
		}
	},
	watch: {
		searchTerm: function(newVal) {
			Client.fetch().then(data => {
				const clientInfo = data.find(client => client.cups === newVal);
				clientInfo ? this.client = new Client(clientInfo.full_name, clientInfo.address, clientInfo.role, clientInfo.building_type) : this.client = null;
			});

			SupplyPoint.fetch().then(data => {
				const supplyPointInfo = data.find(supplyPoint => supplyPoint.cups === newVal);
				supplyPointInfo ? this.supplyPoint = new SupplyPoint(supplyPointInfo.tariff, supplyPointInfo.invoiced_amount, supplyPointInfo.power, supplyPointInfo.neighbors) : this.supplyPoint = null;
			});
		}
	}
}

</script>