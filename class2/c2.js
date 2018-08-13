/*
1. Review basic javascript
2. Go over js arrays
3. Go over js objects in depth
4. Practice js
5. Complex js topics, such as classes, prototypes, and functions/higher order functions
6. DOM + js
7. Practice
8. Take about your project
*/
/*
function countLetters(somethingToCount) { //Argument
  let total = 0;
  for (let i = 0; i < somethingToCount.length; i++) {
    //console.log(somethingToCount([i]));
    total += 1;
  }
  return total;
}

function count(number) {
  if(typeof number === 'number') {
    for(let i = number; i > -1; i--) {
      console.log(i);
    }
  } else {
    return countLetters(number);
  }
}

console.log(count(10)); //count down from 10
console.log(count("my word")); //counts the word



let usernameForLogin = ""; // Type is string, used to store user's name.



/**
 * login - Takes in a username and password as arguemtns, checks to see if
 *        username and password exist and if they are valid. The function
 *         should return the bool "true" if the combo is valid, or false otherwise.
 * @param (string) username    a string representing the user.
 * @param (string) passwords   The user's password, which can contain numbers,
 *                              special characters, and reg chars.
 * @return (boolean) True if the login is valid, false otherwise.
 */

function login(username, password) {
  // Check if username and password are type string.
  // If it's valid:
  //  send combo to server and wait for reply.
  // If it's invalid:
  //  Create and error object, tell user that types don't match.
  // Should return bool.
}
/*
let myNewArr = [1, 2, 3, 4, 5]; // myNewArr.length == 5 (true)
let myLongHandArr = new Array();

console.log("Indexing", myNewArr[0]);

//
['adam', 'eve', 'snek', 'jesus'].forEach(function(currentElement) {
  console.log(currentElement); //lists each element
  console.log(currentElement, index); //gives index as well
)}


console.log(("google".split(""))); //["g", "o", etc.]
console.log(['j', 'o', 'n'].join("")); //jon or ":D" is the glue so j :D o :D etc.

//Creating objects
let Cat = new Object();
let SecondCat = {};
let ThirdCat = function() {
}

//singleton or also called "one-off"
const Mammal = {
  legs: 4,
  sound: "meow",
  hair: true,
  greet: function() {
    console.log(this.sound);
  }
};

const myMammal = Mammal;
myMammal.greet(); //outputs meow

//constructor. constructs a new object for you. pass in a value that represents the sound.
const Mammal = function(sound) {
  this.legs = 4;
  this.sound = sound;
  this.hair = true;
  this.greet = function() {
    console.log(this.sound);
  }
}

const myMammal = new Mammal2("woof");
myMammal.greet(); //outputs woof, whatever you gave the function

//Creating a class
class Cup {
  constructor() {
    this.color = "blue";
  }
  holdWater() {
    return true;
  }
}

*/

/*
GROUND RULES

Variables:
* Variable names should be camel-cased
* Always document what the expected type is
* Variable name should give a CLEAR indication of its intended use

Functions:
* Function name should be camel-cased
* Make function purpose very specific. Make it very good at one thing.
* Before you code, type out what you want the function to do.
* Write out, in comments, the steps your function should take.
* Make sure the return type matched the expected return.

General code style:
* Keep your code behind the vertical line. (~80 chars)

DOM stuff!
*/

let popup = document.getElementById("popup");
popup.innerText = "I added some new text!";

/*
alert("YOU SUCK!");
const userThought = prompt("Do you think you suck?");

if(userThought.trim().toLowerCase() === "no") {
  alert("Okay then");
}
*/
popup.style.backgroundColor = "pink";

popup.addEventListener("click", function(event) {
  if(this.innerText === "Clicked!") {
    this.innerText = "Click me again!"
  }
  else {
    this.innerText = "Clicked!";
  }
});

let linkTags = document.getElementsByTagName("a");

for(let i = 0; i < linkTags.length; i++) {
  linkTags[i].addEventListener("click", function(event) {
    event.preventDefault();
    const actuallyGo = prompt("Hey! You're about to leave this page and go to"
                              + this.href + "Enter ' yes' if you meant to do this.");
    if(actuallyGo.trim().toLowerCase() === "yes") {
      window.location = this.href;
    }
  });
}

let contactButton = document.querySelector("#contact");

contactButton.addEventListener("click", function(event) {
  // Calling it the email a tag with id=email
  if(document.querySelector("#email")) {
    alert("You can click on the link to my email below!");
  }
  else {
    let newLink = document.createElement("a");
    newLink.setAttribute("href", "mailto:babby@gmail.com");
    newLink.innerText = "Email me";
    document.querySelector(".links").appendChild(newLink);
    console.log("Appended element.");
    alert("Hey, click on that new link below!");
    }
});
