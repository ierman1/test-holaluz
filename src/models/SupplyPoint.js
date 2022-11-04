const supplyPointsFilePath = '/static/supply-points.json';

function SupplyPoint(tariff, invoicedAmount, power, neighbors) {
    this.tariff = tariff;
    this.invoicedAmount = invoicedAmount;
    this.power = power;
    this.neighborIds = neighbors;

    this.neighbors = [];
}

SupplyPoint.prototype.fetchNeighbors = function () {
    this.neighborIds.forEach(neighbor => {
        SupplyPoint.fetch().then(data => {
            const supplyPointInfo = data.find(supplyPoint => supplyPoint.cups === neighbor);
            this.neighbors.push(SupplyPoint.fromObject(supplyPointInfo));
        });
    })
}

SupplyPoint.fromObject = (object) => {
    if (object)
        return new SupplyPoint(object.tariff, object.invoiced_amount, object.power, object.neighbors);

    return null;
}

SupplyPoint.fetch = () => {
    return fetch(supplyPointsFilePath)
        .then((response) => response.json());
}

export default SupplyPoint;