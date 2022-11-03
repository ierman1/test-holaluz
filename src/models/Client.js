const clientsFilePath = '/static/clients.json';

function Client(fullName, address, role, buildingType) {
    this.fullName = fullName;
    this.address = address;
    this.role = role;
    this.buildingType = buildingType;
}

Client.fetch = () => {
    return fetch(clientsFilePath)
        .then((response) => response.json());
}

export default Client;