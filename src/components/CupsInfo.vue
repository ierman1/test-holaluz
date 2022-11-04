<template>
	<div class="cups-info-container">
		<div class="cups-info-blocks" v-if="client && supplyPoint">
			<ClientInfo :client="client"></ClientInfo>
			<SupplyPointInfo :supplyPoint="supplyPoint"></SupplyPointInfo>
		</div>
		<p class="potential" v-if="potential">Potential client</p>
		<p class="offer-type" v-if="offerType">{{ offerType }}</p>
		<p class="error" v-if="error">CUPS not found.</p>
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
			supplyPoint: null,
			error: false
		}
	},
	computed: {
		potential() {
			if (this.client && this.supplyPoint)
				return this.client.buildingType == 'house' && this.supplyPoint.neighborIds.length >= 1;

			return null;
		},
		offerType() {
			if (this.potential) {
				if (this.supplyPoint.neighbors.filter(n => n.power.p1 > this.supplyPoint.power.p1 && n.power.p2 > this.supplyPoint.power.p2).length >= 1) {
					if (this.supplyPoint.neighbors.filter(n => n.invoicedAmount > 100).length >= 1)
						return 'Special discount: 12% discount.';

					return 'Basic discount: 5% discount.';
				}

				return 'Standard offer: No discount.'
			}

			return null;
		}
	},
	watch: {
		searchTerm: function(newVal) {
			this.error = false;

			Client.fetch().then(data => {
				const clientInfo = data.find(client => client.cups === newVal);
				this.client = Client.fromObject(clientInfo);

				this.error = this.client == null;
			});

			SupplyPoint.fetch().then(data => {
				const supplyPointInfo = data.find(supplyPoint => supplyPoint.cups === newVal);
				this.supplyPoint = SupplyPoint.fromObject(supplyPointInfo);

				if (this.supplyPoint != null)
					this.supplyPoint.fetchNeighbors();

				this.error = this.supplyPoint == null;
			});
		}
	}
}

</script>

<style lang="scss">

	.cups-info-container {
		.error {
			color: red;
			margin: 0;
			padding: 1rem 0;
		}

		.potential {
			background-color: rgba(100, 149, 237, .5);
			border: 1px solid dodgerblue;
			border-radius: 5px;
			color: white;
			font-weight: bold;
			padding: .5rem;
		}

		.cups-info-blocks {
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			margin: 1rem 0;

			@media (min-width: 800px) {
				flex-direction: row;
			}

			.info-container {
				background-color: white;
				border: 1px solid lightgray;
				border-radius: 5px;
				flex-grow: 1;
				padding: 1rem;

				&:last-of-type {
					margin-top: 1rem;
				}

				@media (min-width: 800px) {
					&:nth-of-type(1) {
						margin-right: .5rem;
					}
					&:last-of-type {
						margin-left: .5rem;
						margin-top: 0;
					}
				}

				hr {
					margin-bottom: 1.5rem;
				}

				p {
					margin: 0;
					margin-bottom: 1rem;
				}

				.title {
					font-weight: bold;
				}
			}
		}
	}

</style>