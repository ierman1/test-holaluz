const supplyPointsFilePath = '/static/supply-points.json';

function SupplyPoint(tariff, invoicedAmount, power, neighbors) {
    this.tariff = tariff;
    this.invoicedAmount = invoicedAmount;
    this.power = power;
    this.neighbors = neighbors;
}

SupplyPoint.fetch = () => {
    return fetch(supplyPointsFilePath)
        .then((response) => response.json());
}

export default SupplyPoint;