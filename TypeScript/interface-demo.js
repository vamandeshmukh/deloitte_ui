var Customer = /** @class */ (function () {
    function Customer() {
        this.firstName = 'Hari';
        this.lastName = 'Krishna';
        this.age = 25;
        this.city = 'Bengaluru'; // the class can have additional properties
    }
    // and methods
    Customer.prototype.display = function () {
        console.log("Customer Name: " + this.firstName + " " + this.lastName);
        console.log("Age: " + this.age);
        console.log("City: " + this.city);
    };
    return Customer;
}());
var c1 = new Customer();
c1.display();
