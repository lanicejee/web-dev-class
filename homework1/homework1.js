// Write a function below with the name "pow" that accepts 2 arguments and returns the
// result of the first argument raised to the power of the second argument.
// For example: if argument1 = 2 and argument2 = 8, the function should return 2^8.

//{BRIAN}> Good use of the for-loop here. Remember to check the type of your vars!
//{BRIAN}> There is a built-in operator called 
//{BRIAN}> the exponent operator which looks like this: "**". Thus, you could rewrite
//{BRIAN}> this function in the following way:

/*{BRIAN}>
function pow(base, exponent) {
  if (typeof base !== 'number' || typeof exponent !== 'number') {
    return Error("Not a number!");
  }
  return base ** exponent;
}
*/

function pow(base, exponent) {
  let amount = 1;
  for(let n = 0; n < exponent; n++) {
    amount *= base;
  }
  return amount;
}

//---------------------------------------------------

// Fill in the function body below, which accepts an array as an argument.
// The function should:
// * loop through the array
// * if, while looping through the array, we encounter a non-numeric
//   value, we should return a boolean, false.
// * If all the values are numbers, return true.

function numberArrayValidator(arr) {
  let counter = 0;
  for(let element of arr) {
    /*{BRIAN}>
    The for-loop here will automatically loop through all the elements in the
    array; there is no need to use a counter. Additionally, the first if-block
    is not needed since we only want to check if an element in the array is NOT
    a number. Thus, we only really need 1 if-block:

    if (typeof element !== "number") {
      return false;
    }

    We return true outside of the for-loop because if the for-loop exits, this
    means that we have not encountered a non-numeric value.

    Putting this all together, it might look like this:

    for (...) {
      if (...) {
        return false;
      }
    }
    return true;
    */
    if(typeof element === 'number') { 
      counter++;
      continue;
    }
    else if(typeof element !== 'number') {
      return false;
    }
  }
  if(counter === arr.length) {
    return true;
  }
}


//---------------------------------------------------

// Create a function below with the name "objectHasNameProp" that accepts
// 1 argument, an object, and checks if the object has a property with the
// name, "name".
// If it does, return true. Otherwise, return false.

function objectHasNameProp(obj) {
  /*{BRIAN}>
  NICE use of the 'in' operator! Keep in mind that "truthy" values automatically
  evaluate to true or false--essentially what this means is that we dont need
  to check if "name" in obj === true, we just need to make sure "name" exists in
  obj.

  What this looks like in code:
  if ("name" in obj) {...}
    
  ^ this evaluates to if (true) {...} or if (false) {...}

  */
  if("name" in obj === true) { // Don't need the "=== true part".
    return true;
  }
  else {
    return false;
  }
}

/*
const me = {
  name: "janice"
};

console.log(objectHasNameProp(me));
*/

//---------------------------------------------------

// Create a function below named "addNamePropToObject". This function should:
// * accept 1 argument
// * You must check the type of argument you receive--if the type is
//   not 'object', then you must return null.
// * If the type IS 'object', then add a property, "name", to the object
// * and set its value to be your full name as a string.
// * Return the object.

/*{BRIAN}> NICE! Good work here.
*/
function addNamePropToObject(obj) {
  if(typeof obj !== 'object') {
    return null;
  }
  else {
    obj.name = "Janice Lee"
    return obj;
  }
}

/*
const me = {
  age: 20
};

let x = 3;

console.log(addNamePropToObject(me));
*/

//---------------------------------------------------

// Write a JavaScript program to list the properties of a JavaScript object.
// Sample object:


/*{BRIAN}>
Good work here. Can you write this as a function? What if you have to print this
to the screen NOT as an array?
*/
const student = {
name : "David Rayy",
sclass : "VI",
rollno : 12 };

//Sample Output: name,sclass,rollno


Object.keys(student); //or whatever the object's name is, in this case student


//---------------------------------------------------

// Write a function named "deletePropFromObj", which accepts 2 arguments:
// an object and a string, which represents the property to be deleted from the
// object.
// If the property does not exist, return false. Otherwise, return the deleted object.

/*{BRIAN}>
Good work here but keep in mind that you don't need "=== true". 
*/
function deletePropFromObj(obj, propName) {
  if(propName in obj === true) { // same as above--no need to use "=== true".
    delete obj[propName];
    return obj;
  }
  else {
    return false;
  }
}

/*
const me = {
  name: "janice",
  age: 20
};

console.log(deletePropFromObj(me, "name"));
*/

//---------------------------------------------------

// Create a function named "Person". You should add a function to Person's
// prototype, named "sayHello". This prototype function should log out
// "Hello, my name is <name>" (with your name in place of "<name>").
// If you're confused, reference this link:
//
// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes
//

/*{BRIAN}>
Good work!
*/
function Person(name) {
  this.name = name;
}

Person.prototype.sayHello = function() {
  console.log("Hello, my name is " + this.name);
}

let me = new Person("Janice");
//me.sayHello();


//---------------------------------------------------

// Create a function named "specialLoop" that loops through an array and
// console.log's out each element in the array. You CANNOT use a standard
// for, while, or do-while loop. (Find a way to loop through an array
// without using the methods mentioned above.)

function specialLoop(arr) {
  arr.forEach(element => console.log(element));
}

/*{BRIAN}>
Good work here!
*/

//specialLoop([1, 2, 3, 4]);

//---------------------------------------------------

// Create a function named "weatherChecker". This function should:
// * Accept 1 argument, which should have one of the following values:
//   "rainy", "sunny", "cloudy", "snowy", "windy"
// * Your goal is to tell the user how to best prepare themselves for
//   the weather (via console.log). If it's sunny, tell the user to
//   "wear sunscreen!".
// * If it's cloudy or windy, tell them to bring some kind of outerwear.
// * If it's rainy, tell them to bring an umbrella, and if its snowy,
//   tell them to to wear a thick coat and snow boots.
// * You MUST use a switch statement to finish this function.
// * The function doesn't return anything.

/*{BRIAN}>
Good stuff. Although I didn't specify this in the requirements, you should always
have a "default" statement for a switch-block. 
*/

function weatherChecker(forecast) {
  switch(forecast) {
    case "rainy":
      console.log("Bring an umbrella!");
      break;
    case "sunny":
      console.log("Wear sunscreen!");
      break;
    case "cloudy":
      console.log("Bring a jacket!");
      break;
    case "snowy":
      console.log("Wear a thick coat and snow boots!");
      break;
    case "windy":
      console.log("Wear a windbreaker!");
      break;
  }
}

//weatherChecker("windy");

//---------------------------------------------------

// Create a function named "makeChristmasTree". This function should:
// * Accept 1 argument, a number. This number represents the height of
//   a tree. Remember, you should check to make sure that the argument
//   you receive is valid (that it is a number). This number must also be
//   positive (or zero)!
// * The function will create a tree, represented as a string, with the
//   asterisk (*) character.
// * The function should create a tree, as seen below. It should both
//   log out the result AND return the result as a string.
// Example:
/*
// Calling makeChristmasTree...
makeChristmasTree(5);
// Output:
    *
   ***
  *****
 *******
    *

makeChristmasTree(1);
// Output:
  *

makeChristmasTree(2);
// output:
  *
  *

makeChristmasTree(3):
// output:

  *
 ***
  *

makeChristmasTree(4):
// output:

  *
 ***
*****
  *

makeChristmasTree(0):
// Output:

(nothing should be outputted)


makeChristmasTree(-1):
// Output:

ERROR!
*/


function makeChristmasTree(height) {
  let christmasTree = "";
  let longestLineLength = height * 2 - 3;
  if(typeof height !== 'number' || height < 0) {
    console.log("ERROR!");
  }
  else if(height === 1) {
    christmasTree += "*";
  }
  else if(height === 2) {
    christmasTree += "*\n*";
  }
  else if(height >= 3) {
    for(let i = 1; i < height; i++) {
      if(christmasTree.length !== longestLineLength) {
        christmasTree += " ".repeat(height - i - 1);
      }
      christmasTree += "*".repeat(i * 2 - 1) + "\n";
    }
    christmasTree += " ".repeat(height - 2) + "*";
  }
  //console.log(christmasTree);
  return christmasTree;
}

// makeChristmasTree(8);


//{BRIAN}> Great job!!!

//{BRIAN}> This is good code :^)!
/* {BRIAN}>
This is another solution, optimized for this question:

We know that the maximum # of stars in any given tree where the height >= 2 is
represented by the following relation:

MaximumNumberOfStars = 2(height - 1) - 1

Example:
height = 5, MaximumNumberOfStars = 2(5 - 1) - 1 = 8 - 1 = 7.
    *
   ***
  *****
 ******* <-- 7 stars.
    *

height = 6, MaximumNumberOfStars = 2(6 - 1) - 1 = 10 - 1 = 9.
    *
   ***
  *****
 *******
********* <-- 9 stars.
    *

If the height is one or zero, however, then we can simply print out one or zero
stars, respectively.

We want to maximize space (amount of memory required to store your tree) and 
time efficiency for this question. How do we do this?

Since we can calculate the maximum # of stars in a given tree where height >= 2,
we can create an array that represents the stars at any given level and continuously
add the result to a string! Here's what that looks like:
*/

function optimizedMakeTree(height) {
  let tree = "";
  if (height >= 2) {

    for (let i = 0; hmax = height - 1, i < hmax; i++) {
      tree += " ".repeat(height - i - 2) + "*".repeat((i * 2) + 1) + "\n";
    }

    tree += " ".repeat(height - 2) + "*";
    return tree;
  }
  else if (height < 0) {
    return Error("You must supply a height >= 0!");
  }
  else {
    return '*'.repeat(height);
  }
}

// You can test the speed of your code against mine!

// Here's the benchmarks:

console.log(optimizedMakeTree(5));
console.log(makeChristmasTree(5));
console.log("\n\n");

console.time("Optimized Code");
optimizedMakeTree(10000);
console.timeEnd("Optimized Code");

console.time("Your Code");
makeChristmasTree(10000);
console.timeEnd("Your Code");

