class Customer {
    private _firstName: string;
    private _lastName: string;
    constructor(_firstName :string, _lastName:string) {
        this._firstName = _firstName;
        this._lastName = _lastName;
    }
    get firstName() :string{
        return this._firstName;
    }
    set firstName(_firstName) {
        this._firstName = _firstName;
    }
    get lastName() :string{
        return this._lastName;
    }
    set lastName(_lastName) {
        this._lastName = _lastName;
    }
}
let someCustomer = new Customer("Hector", "Luna");
console.log(someCustomer.firstName);
