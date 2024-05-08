const score=400
console.log(score);
const balance = new Number(100)
console.log(balance);
console.log(balance.toString().length);
console.log(balance.toFixed(2));
const otherNumber=23.456
console.log(otherNumber.toPrecision(3));
const hundreds=10000000
console.log(hundreds.toLocaleString('en-IN'));

//MATHS
console.log(Math);
console.log(Math.abs(-4)); //convert negative to positive
console.log(Math.round(4.3));
console.log(Math.round(4.6));
console.log(Math.ceil(4.2)); //ceil will choose upper value
console.log(Math.floor(4.6)); // floor choose lower value
console.log(Math.max(4,3,5,1,8));
console.log(Math.min(4,3,5,1,8));
console.log(Math.random()); // output will come b/w 0 to 1
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);
const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)