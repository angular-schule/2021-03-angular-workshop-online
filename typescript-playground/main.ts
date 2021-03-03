class Customer {
    private id: number;

    constructor(id: number) {
        this.id = id;
    }
}


const myCustomer = new Customer(3);
console.log(myCustomer);