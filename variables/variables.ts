// first console log
console.log("Hello ts");
// declare variable
let found : boolean = true;
let greet : string = "Hi! everyone from ts";
let total : number = 492.5;
if (found) {
    console.log(greet + " : " + total);
}
// any let "any" value be careful
let ambigous : any = 34;
console.log(ambigous);
ambigous = "eco";
console.log(ambigous);
ambigous = false;
console.log(ambigous);
// template string using backticks `
let nombre: string = "Héctor";
console.log(`Hi! ${nombre} your total is ${total}`);
