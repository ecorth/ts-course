"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Customer {
    _firstName;
    _lastName;
    constructor(_firstName, _lastName) {
        this._firstName = _firstName;
        this._lastName = _lastName;
    }
    get firstName() {
        return this._firstName;
    }
    set firstName(_firstName) {
        this._firstName = _firstName;
    }
    get lastName() {
        return this._lastName;
    }
    set lastName(_lastName) {
        this._lastName = _lastName;
    }
}
let someCustomer = new Customer("Hector", "Luna");
console.log(someCustomer.firstName);
//# sourceMappingURL=Customer.js.map