/* console.log("Hello, world");
//console is the terminal, log is to log something in. essentially print line

// These are ways of declaring variables
var first = 1;
let second = 2;

// Const variables cannot be redeclared.
const third = 3;

/*
Declaring a variable: var first;
Assigning a variable: var = 1; aka when you give it a value
*/

/*
let sum;
let multiplyResult;

sum = first + second;
multiplyResult = third * second;

console.log(sum);
console.log(third / second);
*/

/*
// Number
let myNumber = 2;
// String
let myString = "Hello, world!";

let myNull = null;
console.log(myNull);
*/

/*

function function_name(argument1, argument2) {
...body...
}

*/

/*
function myAdder(argument1, arugment2) {
  sayHello();
  return argument1 + argument2;
}
// return vs console.log-- console.log only displays, return gives back a value

function sayHello() {
  console.log("Hello!");
}

let myResult = myAdder(1, 2);
console.log(myResult);
*/

// Create a function that accepts 2 arguments, multiplies them together, and returns the result.

function multiplier(argument1, argument2) {
  return argument1 * argument2;
}

let mybool = true;

if (mybool === true) {
  console.log("True!");
}
else {
  console.log("False!");
}
// !== means not equal
