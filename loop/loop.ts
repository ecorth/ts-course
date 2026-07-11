// for and arrays
let arrayNumber : number[] = [1,2,3,1234,34,51];

for(let i = 0; i < arrayNumber.length; i++){
  console.log(arrayNumber[i]);
}

// simplified for
let sports : string[] = ["powerlifting", "swimming", "skateboarding", "calisthenics"];

for(let sportValue of sports){
  console.log(sportValue);
}
// push method
console.log("Length previous push " + sports.length);
sports.push("chess");
console.log("Length after push " + sports.length);
