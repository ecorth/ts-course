### Variables

1. boolean -> true or false
2. number -> support integer and floating
3. string
4. any -> support any datatype assignment


### Loop

```ts
  //classic for
  for(let i = 0; i < arrayNumber.length; i++){
    ...
  }
  
  //simplified for
  for(let sportValue of sports){
  ...
  }
```

### Classes

#### Access Modifiers

1. public -> accessible for all classes
2. protected -> accessible in current class and subclasses
3. private -> accessible only in current class

#### Contructor

```ts
// classic declaration
class Customer{
  constructor(_firstName :string, _lastName:string) {
      this._firstName = _firstName;
      this._lastName = _lastName;
  }
}
// simplified
constructor(private _firstName :string, 
            private _lastName:string) {}

// create an instanc
let someCustomer = new Customer("Hector", "Luna");
```
