import { Customer } from "./customer";

const myCustomer = new Customer(10);
myCustomer.fooBar(5);

// Funktion
setTimeout(function() {
    console.log('MC', myCustomer);
}, 2000);

// Funktion
function foox () {}