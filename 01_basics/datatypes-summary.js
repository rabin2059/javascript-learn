// Primitive data types

// 7 types : String, Number, Boolean, Null, Undefined, Symbol, BigInt

const score = 100;
const scoreValue = 100.34;
const isLoggedIn = false;
const outsideTemp = null;
let user;
const id = Symbol("1234");
const anotherId = Symbol("1234");

// console.log(id === anotherId)

const bigNumber = 234534534858349502n; //bigInt

//  Reference (Non Primitive)

// Array, Objects, Functions
// They return "object" when checked their datatype using typeof operator

const heros = ["superman", "batman", "wonder woman"];
let myObj = {
  name: "Bruce Wayne",
  age: 35,
};

const myFunction = function () {
  console.log("Hello World");
};

// console.log(typeof bigNumber);

// ++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primative), Heap (Non-Primitive)

/* Primitive data types are stored in stack and non-primitive data types are stored in heap memory.
When we assign a primitive value to a variable, it is stored directly in the stack.
When we assign a non-primitive value to a variable, it is stored in the heap and the variable holds a reference to that location in memory.
 */


let myName = "Rabin Rai"

let anotherName = myName
anotherName = "Sagar Rai"

console.log(myName);
console.log(anotherName);

let userOne = {
    email: "user@gmail.com",
    uid: "1234",
}

let userTwo = userOne

userTwo.email = "user1@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);