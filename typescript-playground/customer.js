"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer = void 0;
var Customer = /** @class */ (function () {
    function Customer(id) {
        this.id = id;
    }
    // Methode
    Customer.prototype.fooBar = function (foo) {
        var _this = this;
        setTimeout(function () {
            console.log('Die ID ist', _this.id);
        }, 2000);
        console.log(this.id);
        // Funktion
        function bar() { }
        return 'Hallo';
    };
    return Customer;
}());
exports.Customer = Customer;
//# sourceMappingURL=customer.js.map