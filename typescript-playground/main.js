"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var customer_1 = require("./customer");
var myCustomer = new customer_1.Customer(10);
myCustomer.fooBar(5);
// Funktion
setTimeout(function () {
    console.log('MC', myCustomer);
}, 2000);
// Funktionm
function foo() {
}
//# sourceMappingURL=main.js.map