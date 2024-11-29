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
let age_null = null;

console.log(age_null);
console.log(typeof age_null);

// Undefined
let x; 

console.log(x);

//Objects
const person = {
    name_p: 'John', 
    age: 25,
    hight: 186,
}

const person2 = { ...person, age: 32};

console.log(person.age);
console.log(person2)

//Array
const arr = [1,2,3,4,5]
const arr2 = [...arr, 345,34534,53245];
console.log(arr2);
console.log('----------');
// Equels
console.log(5 == '5');
console.log(5 === '5');
console.log(5 != '5');
console.log(5 !== '5');
console.log('----------');
// logical operators
console.log(true && false);
console.log(true && true);
console.log(true || false);
console.log(false || false);
console.log(!true)

console.log('----------');
// if
const age1 = 18;
if ( age1 > 18 ){
    console.log('You can enter!')
} else if (age1 === 18 ){
    console.log('You just turn 18')
} else { 
    console.log('Grow up')
}

console.log('----------');
// while loop
let i = 0;
while (i<10){
    console.log(i);
    i++;
}

console.log('----------');
// for loop

for(let i = 0; i < 10; i++) {
    console.log(i);
}
console.log('----------');
// functions
function square(number) { 
    return number * number;
}

console.log(square(5))

console.log('----------');

// map
let names = ['pedro', "jesica", "carol"];
console.log(names.map((name)=> {
    return `${name}1`;
}));

// funtion declaration
function name(params){
    //statements
}
//function espression
const name1 = function(params){
    //statements
}
//arrow function
const name2 = (params) => {
    //statements
}

const square1 = (number) => number * number;
console.log( square1(10) );

const square2 = number => {
    return number * number;
}
console.log( square2(10) );

// export default function DoSomething( ){
//     console.log('hello')
// }

// export const DoSomething = () => {
    
// }

// onClick = {() => {
//     console.log("hellow world");
// }}

// Async/Await = Async = makes a function return a promise
//                            Await = makes an async function wait for a promise

// Allows you write asynchronous code in a synchronous manner
// Async doesn't have resolve or reject parameters
// Everything after Await is placed in an event queue
function walkDog(){
    return new Promise((resolve, reject) => { 
        setTimeout(() => {
            const dogWalked = true;
            
            if (dogWalked){
                resolve('you walked the dog')
            }
            else{
                reject("you didn't walk the dog")
            }

        }, 1500)
    })
}

function cleanKitchen(){
    return new Promise((resolve, reject) => { 
        setTimeout(() => {
            const cleanedKitchen = true;
            
            if (cleanedKitchen){
                resolve('you cleaned the kitchen')
            }
            else{
                reject("you didn't clean the kitchen")
            }

        }, 1500)
    })
}

function takeOutTrash(){
    return new Promise((resolve, reject) => { 
        setTimeout(() => {
            const tookOutTrash = true;
            
            if (tookOutTrash){
                resolve('you took out the trash')
            }
            else{
                reject("you didn't take out the trash")
            }

        }, 1500)
    })
}

async function doChores(){

    try{
        const walkDogResult = await walkDog();
        console.log(walkDogResult);
    
        const cleanKitchenResult = await cleanKitchen();
        console.log(cleanKitchenResult);
    
        const takeOutTrashResult = await takeOutTrash();
        console.log(takeOutTrashResult);
        
        console.log("You finsihed all the chores!");
    }
    catch(error){
        console.error(error);
    }
}

doChores();