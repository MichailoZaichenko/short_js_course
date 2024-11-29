//string
let sincleQuots = 'Hello!';
var doubleQuots = "Hello!!";
const backticks = `Hello ${2+2}`;
console.log(backticks);
console.log( typeof backticks);

// Number
const string = 'hello';
const wholeNum = 5;
const decimalNumber = 0.5;
console.log(wholeNum);
console.log(decimalNumber);

let result = wholeNum / decimalNumber;
console.log(result);
result = string / wholeNum;
console.log(result);

// Boolans
const isCool = false;

if(isCool){
    console.log('Cool');
} else {
    console.log('Not cool')
};

// null
let age = null;

console.log(age);
console.log(typeof age);

// Undefined
let x; 

console.log(x);

//Objects
const person = {
    name: 'John', 
    age: 25,
    hight: 186,
}

console.log(person.name)

//Array
const arr = [1,2,3,4,5]