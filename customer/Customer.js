"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer = void 0;
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
exports.Customer = Customer;
//# sourceMappingURL=Customer.js.map