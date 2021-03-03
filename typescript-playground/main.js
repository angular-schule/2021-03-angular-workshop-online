var Customer = /** @class */ (function () {
    function Customer(id) {
        this.id = id;
    }
    Customer.prototype.fooBar = function (foo) {
        var _this = this;
        setTimeout(function () {
            console.log('Die ID ist', _this.id);
        }, 2000);
        console.log(this.id);
        return 'Hallo';
    };
    return Customer;
}());
var myCustomer = new Customer(10);
myCustomer.fooBar(5);
setTimeout(function () {
    console.log('MC', myCustomer);
}, 2000);
//# sourceMappingURL=main.js.map