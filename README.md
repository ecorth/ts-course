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

### Inheritance

1. Ts only support single inheritance
```ts
export class Shape{
  constructor(private _x: number, private _y: number){}
  // get and set accesors
  getInfo(): string{
    return `x=${this._x} and y=${this_y}`;
  }
}

//inheritance
import {Shape} from "./Shape";
export class Circle extends Shape{
  constructor(theX: number, theY: number, private _radius: number)
  {
    super(theX, theY);
  }

  getInfo(): string{
    return super.getIngo + ` radius=${this._radius}`;
  }
}
```

### Abstract class
1. An abstract class represents a general concepts
2. Can't create an instans of abstract class
3. Al have abstrac methods
4. Abstract methos mush be implements by "SUBCLASS"


```ts
//Abstract class
export abstract class Shape{
  abstract calculateArea(): number;
}

//implements
import {Shape} from "./Shape";
export class Circle extends Shape{
  constructor(theX: number, theY: number, private _radius: number)
  {
    super(theX, theY);
  }
  //override the method
  calculateArea(): number{
    return this._width * this._length;
  }
}
```


### Interfaces
1. Define an interface with a method contract.
2. Classes implemente the interface accordingly.
3. A class can implement a multiple interfaces.

```ts
//interface
export interface Coach{
  getDailyWorkout(): string;
}

//implements
import {Coach} from "./Coach";
export class CrikectCoach implements Coach{
  getDailyWorkout(): string{
    return "Practice your spin bowling technique.";
  }
}

//implements
import {Coach} from "./Coach";
export class GolfCoach implements Coach{
  getDailyWorkout(): string{
    return "Hit 100 balls at the golf range.";
  }
}
```
