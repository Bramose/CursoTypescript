(() => {

    interface Client {
        name: string;
        age: number;
        address: Address;
        getFullAddress():string;
    }

    interface Address {
        id: number;
        zip: string;
        city: string;
    }

    const client: Client = {
        name: 'Fernando',
        age: 25,
        address: {
            id: 125,
            zip: 'KY2 SUD',
            city: 'Ottawa'
        },
        getFullAddress(){
            return `${this.address.city} ${this.address.zip}`
        }
    }

    // console.log(client.getFullAddress())

    const client2: Client = {
        name: 'Melisa',
        age:30,
        address: {
            city: 'San Pancho',
            id: 120,
            zip: '36400'
        },
        getFullAddress(){
            return `${this.address.city} ${this.address.zip}`
        }
    }
    
})()