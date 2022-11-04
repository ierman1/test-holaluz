const clientsFilePath = '/static/clients.json';

function Client(fullName, address, role, buildingType) {
    this.fullName = fullName;
    this.address = address;
    this.role = role;
    this.buildingType = buildingType;
}

Client.fromObject = (object) => {
    if (object)
        return new Client(object.full_name, object.address, object.role, object.building_type);

    return null;
}

Client.fetch = () => {
    return fetch(clientsFilePath)
        .then((response) => response.json());
}

export default Client;